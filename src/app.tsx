import { useRef, useState } from "react";
import animeData from "../anime-data";
import { domToBlob } from "modern-screenshot";
import { toast } from "sonner";
import { usePersistState } from "./hooks";

export const App = () => {
  const [selectedAnime, setSelectedAnime] = usePersistState<string[]>(
    "selectedAnime",
    []
  );

  const wrapper = useRef<HTMLDivElement>(null);

  const copyImage = async () => {
    if (!wrapper.current) return;

    const blob = await domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false;
        }
        return true;
      },
    });
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
  };

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center ">
          <div className="flex flex-col border border-b-0 w-fit" ref={wrapper}>
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
                    return year.map((item) => item.title).slice(0, 12);
                  }).length
                }{" "}
                部动画
              </span>
            </div>
            {Object.keys(animeData).map((year) => {
              const items = animeData[year] || [];
              return (
                <div key={year} className="flex border-b">
                  <div className="bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black">
                    {year}
                  </div>
                  <div className="flex shrink-0">
                    {items.slice(0, 12).map((item) => {
                      const isSelected = selectedAnime.includes(item.title);
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
                                );
                              }
                              return [...prev, item.title];
                            });
                          }}
                        >
                          <span className="leading-tight w-full line-clamp-3">
                            {item.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
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
                  return year.map((item) => item.title).slice(0, 12);
                })
              );
            }}
          >
            全选
          </button>

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(copyImage(), {
                success: "复制成功",
                loading: "复制中",
                error: "复制失败",
              });
            }}
          >
            复制图片
          </button>
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
          制作
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
  );
};
