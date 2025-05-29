import { useMemo, useRef, useState } from "react"
import animeData from "../anime-data"
import { domToBlob } from "modern-screenshot"
import { toast } from "sonner"
import { usePersistState } from "./hooks"

export const App = () => {
  const [selectedAnime, setSelectedAnime] = usePersistState<string[]>(
    "selectedAnime",
    []
  )

  const wrapper = useRef<HTMLDivElement>(null)

  const imageToBlob = async () => {
    if (!wrapper.current) return

    const blob = await domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })

    return blob
  }

  const copyImage = async () => {
    const blob = await imageToBlob()

    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
  }

  const downloadImage = async () => {
    if (!wrapper.current) return

    const blob = await imageToBlob()

    if (!blob) return

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "anime-sedai.png"
    a.click()

    URL.revokeObjectURL(url)
  }

  const prompt = useMemo(() => {
    return `
以下是我的动画列表，请生成一个锐评：
${Object.keys(animeData)
  .map((year) => {
    const items = animeData[year] || []

    if (items.length === 0) return ""

    const watched = items
      .filter((item) => selectedAnime.includes(item.title))
      .map((item) => item.title)
      .join(", ")
    const unWatched = items
      .filter((item) => !selectedAnime.includes(item.title))
      .map((item) => item.title)
      .join(", ")

    return [
      `**${year}年**:`,
      `看过: ${watched || "无"}`,
      `没看过: ${unWatched || "无"}`,
    ]
      .filter(Boolean)
      .join("\n")
  })
  .filter(Boolean)
  .join("\n")}
    `.trim()
  }, [selectedAnime])

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center ">
          <div
            className="flex flex-col border border-b-0 bg-white w-fit"
            ref={wrapper}
          >
            <div className="border-b justify-between p-2 text-lg  font-bold flex">
              <h1>
                动画世代<span className="remove"> - 点击选择你看过的动画</span>
                <span className="ml-2 text-zinc-400 font-medium">
                  anime-sedai.egoist.dev
                </span>
              </h1>
              <span className="shrink-0 whitespace-nowrap">
                我看过 {selectedAnime.length}/
                {
                  Object.values(animeData).flatMap((year) => {
                    return year.map((item) => item.title).slice(0, 12)
                  }).length
                }{" "}
                部动画
              </span>
            </div>
            {Object.keys(animeData).map((year) => {
              const items = animeData[year] || []
              return (
                <div key={year} className="flex border-b">
                  <div className="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black">
                    {year}
                  </div>
                  <div className="flex shrink-0">
                    {items.slice(0, 12).map((item) => {
                      const isSelected = selectedAnime.includes(item.title)
                      return (
                        <button
                          key={item.title}
                          className={`size-16 md:size-20 border-l break-all text-center shrink-0 inline-flex items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${
                            isSelected ? "bg-green-500" : "hover:bg-zinc-100"
                          }`}
                          title={item.title}
                          onClick={() => {
                            setSelectedAnime((prev) => {
                              if (isSelected) {
                                return prev.filter(
                                  (title) => title !== item.title
                                )
                              }
                              return [...prev, item.title]
                            })
                          }}
                        >
                          <span className="leading-tight w-full line-clamp-3">
                            {item.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              setSelectedAnime(
                Object.values(animeData).flatMap((year) => {
                  return year.map((item) => item.title).slice(0, 12)
                })
              )
            }}
          >
            全选
          </button>

          {selectedAnime.length > 0 && (
            <button
              type="button"
              className="border rounded-md px-4 py-2 inline-flex"
              onClick={() => {
                setSelectedAnime([])
              }}
            >
              清除
            </button>
          )}

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(copyImage(), {
                success: "复制成功",
                loading: "复制中",
                error(error) {
                  return `复制失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            复制图片
          </button>

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(downloadImage(), {
                success: "下载成功",
                loading: "下载中",
                error(error) {
                  return `下载失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            下载图片
          </button>
        </div>

        <div className="flex flex-col gap-2 max-w-screen-md w-full mx-auto">
          <div className="border focus-within:ring-2 ring-pink-500 focus-within:border-pink-500 rounded-md">
            <div className="flex items-center justify-between p-2 border-b">
              <span>锐评提示词</span>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:bg-zinc-100 px-1.5 h-7 flex items-center rounded-md"
                  onClick={() => {
                    navigator.clipboard.writeText(prompt)
                    toast.success("复制成功")
                  }}
                >
                  复制
                </button>

                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:bg-zinc-100 px-1.5 h-7 flex items-center rounded-md"
                  onClick={() => {
                    location.href = `chatwise://chat?input=${encodeURIComponent(
                      prompt
                    )}`
                  }}
                >
                  在 ChatWise 中打开 (需要先安装)
                </button>
              </div>
            </div>
            <textarea
              readOnly
              className="outline-none w-full p-2 resize-none cursor-default"
              rows={10}
              value={prompt}
            />
          </div>
        </div>

        <div className="mt-2 text-center">
          历年关注最多的动画，数据来自 bgm.tv，由
          <a
            href="https://x.com/localhost_4173"
            target="_blank"
            className="underline"
          >
            低空飞行
          </a>
          制作，
          <a
            href="https://github.com/egoist/anime-sedai"
            target="_blank"
            className="underline"
          >
            查看代码
          </a>
        </div>

        <div className="text-center">
          作者的其它产品:{" "}
          <a href="https://chatwise.app" target="_blank" className="underline">
            ChatWise
          </a>
          , 一个优雅的 AI 聊天客户端
        </div>
      </div>
    </>
  )
}
