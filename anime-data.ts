import type { Language } from "./src/i18n"

type AnimeItem = {
  titleZh: string
  titleEn: string
  titleJa: string
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "1990": [
    //12
    {
      titleZh: "美少女战士",
      titleEn: "Sailor Moon",
      titleJa: "美少女戦士セーラームーン"
    },
    {
      titleZh: "幽游白书",
      titleEn: "Yu Yu Hakusho",
      titleJa: "幽☆遊☆白書"
    },
    {
      titleZh: "忍者乱太郎",
      titleEn: "Ninjaboy Rantaro",
      titleJa: "忍たま乱太郎"
    },
    {
      titleZh: "城市猎人",
      titleEn: "City Hunter91",
      titleJa: "シティーハンター'91"
    },
    {
      titleZh: "蜡笔小新",
      titleEn: "Crayon Shin-chan",
      titleJa: "クレヨンしんちゃん"
    },
    {
      titleZh: "鲁邦三世",
      titleEn: "Lupin the 3rd",
      titleJa: "ルパン三世"
    },
    {
      titleZh: "吸血姫美夕",
      titleEn: "Vampire Princess Miyu",
      titleJa: "吸血姫美夕"
    },
    {
      titleZh: "不思议游戏",
      titleEn: "Mysterious Play",
      titleJa: "ふしぎ遊戯"
    },
    {
      titleZh: "魔神英雄传",
      titleEn: "MASHIN HERO WATARU",
      titleJa: "魔神英雄伝ワタル"
    },
    {
      titleZh: "樱桃小丸子",
      titleEn: "Chibi Maruko-chan",
      titleJa: "ちびまる子ちゃん"
    },
    {
      titleZh: "哆啦A梦",
      titleEn: "Doraemon",
      titleJa: "ドラえもん"
    },
    {
      titleZh: "龙珠",
      titleEn: "Dragon Ball",
      titleJa: "ドラゴンボール"
    }
    
  ],
  "1995": [
    //17
    { titleZh: "新世纪福音战士", 
      titleEn: "EVA", 
      titleJa: "新世紀エヴァンゲリオン"
    },
    {
      titleZh: "少女革命",
      titleEn: "Revolutionary Girl Utena",
      titleJa: "少女革命ウテナ"
    },
    {
      titleZh: "圣少女",
      titleEn: "Kaitou Saint Tail",
      titleJa: "怪盗セイント・テール"
    },
    { titleZh: "头文字D", 
      titleEn: "Initial D", 
      titleJa: "イニシャル・ディー"
    },
    {
      titleZh: "海贼王",
      titleEn: "One Piece",
      titleJa: "One Piece"
    },
    {
      titleZh: "灌篮高手",
      titleEn: "SLAM DUNK",
      titleJa: "SLAM DUNK"
    },
    {
      titleZh: "魔卡少女樱",
      titleEn: "CC Sakura",
      titleJa: "カードキャプターさくら"
    },
    {
      titleZh: "秀逗魔导士",
      titleEn: "slayers",
      titleJa: "スレイヤーズ"
    },
    {
      titleZh: "浪客剑心",
      titleEn: "Rurouni Kenshin",
      titleJa: "るろうに剣心 -明治剣客浪漫譚-"
    },
    {
      titleZh: "侧耳倾听",
      titleEn: "Whisper of the Heart",
      titleJa: "耳をすませば"
    },
    {
      titleZh: "COWBOY BEBOP",
      titleEn: "COWBOY BEBOP",
      titleJa: "カウボーイビバップ -COWBOY BEBOP-"
    },
    {
      titleZh: "神奇宝贝",
      titleEn: "Pocket Monster",
      titleJa: "ポケットモンスター"
    },
    {
      titleZh: "数码宝贝",
      titleEn: "Digital Monster Advanture",
      titleJa: "デジモンアドベンチャー"
    },
    {
      titleZh: "金田一少年事件簿",
      titleEn: "The Kindaichi Case Files",
      titleJa: "金田一少年の事件簿"
    },
    {
      titleZh: "中华小当家",
      titleEn: "Cooking Master Boy",
      titleJa: "中華一番！"
    },
    {
      titleZh: "四驱兄弟",
      titleEn: "Bakusō Kyōdai Let's & Go!!",
      titleJa: "爆走兄弟レッツ&ゴー!!"
    },
    {
      titleZh: "名侦探柯南",
      titleEn: "Detective Conan",
      titleJa: "名探偵コナン"
    }
  ],
  "2000": [
    //12
    { titleZh: "犬夜叉", 
      titleEn: "Inuyasha", 
      titleJa: "犬夜叉"
    },
    {
      titleZh: "最游记",
      titleEn: "Saiyuki: Requiem",
      titleJa: "幻想魔伝 最遊記"
    },
    {
      titleZh: "学校怪谈",
      titleEn: "Ghost story of school",
      titleJa: "学校の怪談"
    },
    {
      titleZh: "游戏王",
      titleEn: "Yu-Gi-Oh! Duel Monsters",
      titleJa: "遊☆戯☆王デュエルモンスターズ"
    },
    {
      titleZh: "星界战旗",
      titleEn: "Starry Banner",
      titleJa: "星界の戦旗"
    },
    {
      titleZh: "小麻烦",
      titleEn: "Da Da Da",
      titleJa: "だぁ! だぁ! だぁ! "
    },
    {
      titleZh: "哈姆太郎",
      titleEn: "Hamtaro",
      titleJa: "とっとこハム太郎"
    },
    {
      titleZh: "沉默的未知",
      titleEn: "Argento Soma",
      titleJa: "アルジェントソーマ"
    },
    {
      titleZh: "万有引力",
      titleEn: "Gravitation",
      titleJa: "グラビテーション"
    },
    {
      titleZh: "暗之末裔",
      titleEn: "Descendants of Darkness",
      titleJa: "闇の末裔"
    },
    {
      titleZh: "纯情房客俏房东",
      titleEn: "Love Hina",
      titleJa: "ラブひな"
    },
    {
      titleZh: "银河英雄传说",
      titleEn: "Legend of the Galactic Heroes",
      titleJa: "銀河英雄伝説"
    }
  ],
  "2001": [
    //11
    {
      titleZh: "棋魂",
      titleEn: "Hikaru no Go",
      titleJa: "ヒカルの碁"
    },
    {
      titleZh: "热带雨林的爆笑生活",
      titleEn: "Haré+Guu",
      titleJa: "ジャングルはいつもハレのちグゥ"
    },
    { titleZh: "天使领域", 
      titleEn: "Angelic Layer", 
      titleJa: "機動天使エンジェリックレイヤー"
    },
    {
      titleZh: "银河天使",
      titleEn: "Galaxy Angel",
      titleJa: "ギャラクシーエンジェル "
    },
    {
      titleZh: "魔力女管家",
      titleEn: "Mahoromatic",
      titleJa: "まほろまてぃっく"
    },
    {
      titleZh: "网球王子",
      titleEn: "The prince of tennis",
      titleJa: "テニスの王子様"
    },
    {
      titleZh: "圣石小子",
      titleEn: "RAVE",
      titleJa: "RAVE"
    },
    {
      titleZh: "刃牙",
      titleEn: "Baki the Grappler",
      titleJa: "グラップラー刃牙 "
    },
    {
      titleZh: "水果篮子",
      titleEn: "fruit basket",
      titleJa: "フルーツバスケット "
    },
    {
      titleZh: "星之卡比",
      titleEn: "Kirby",
      titleJa: "星のカービィ"
    },
    {
      titleZh: "超能奇兵",
      titleEn: "Scryed",
      titleJa: "スクライド"
    }
  ],
  "2002": [
    //10
    {
      titleZh: "火影忍者",
      titleEn: "NARUTO",
      titleJa: "NARUTO -ナルト-"
    },
    {
      titleZh: "全金属狂潮",
      titleEn: "Full Metal Panic!",
      titleJa: "フルメタル・パニック! "
    },
    { titleZh: "攻壳机动队", 
      titleEn: "Ghost in the Shell: Stand Alone Complex", 
      titleJa: "攻殻機動隊 STAND ALONE COMPLEX"
    },
    {
      titleZh: "十二国记",
      titleEn: "Twelve Kingdoms",
      titleJa: "十二国記"
    },
    {
      titleZh: "机动战士高达SEED",
      titleEn: "Mobile Suit Gundam SEED",
      titleJa: "機動戦士ガンダムSEED"
    },
    {
      titleZh: "我们一家",
      titleEn: "Atashinchi",
      titleJa: "あたしンち"
    },
    {
      titleZh: "少年侦探",
      titleEn: "Spiral: The Bounds of Reasoning",
      titleJa: "スパイラル ～推理の絆～"
    },
    {
      titleZh: "寻找满月",
      titleEn: "Full Moon o Sagashite",
      titleJa: "満月をさがして "
    },
    {
      titleZh: "人形电脑天使心",
      titleEn: "Chobits",
      titleJa: "ちょびっツ"
    },
    {
      titleZh: "青出于蓝",
      titleEn: "Bluer than indigo",
      titleJa: "藍より青し"
    }
  ],
  "2003": [
    //10
    {
      titleZh: "金童卡修",
      titleEn: "Zatch Bell!",
      titleJa: "金色のガッシュベル!!"
    },
    {
      titleZh: "废弃公主",
      titleEn: "Scrapped Princess",
      titleJa: "スクラップド・プリンセス"
    },
    { titleZh: "百变之星", 
      titleEn: "Kaleido Star", 
      titleJa: "カレイドスター"
    },
    {
      titleZh: "你所期望的永远",
      titleEn: "Rumbling Hearts",
      titleJa: "君が望む永遠"
    },
    {
      titleZh: "星空清理者",
      titleEn: "Planetes",
      titleJa: "プラネテス"
    },
    {
      titleZh: "明日的娜杰莎",
      titleEn: "omorrow's Nadja",
      titleJa: "明日のナージャ"
    },
    {
      titleZh: "星球流浪记",
      titleEn: "Uninhabited Planet Survive!",
      titleJa: "無人惑星サヴァイヴ "
    },
    {
      titleZh: "神枪少女",
      titleEn: "GUNSLINGER GIRL",
      titleJa: "GUNSLINGER GIRL"
    },
    {
      titleZh: "天使怪盗",
      titleEn: "D・N・ANGEL",
      titleJa: "D・N・ANGEL"
    },
    {
      titleZh: "真月谭月姬",
      titleEn: "Lunar Legend Tsukihime",
      titleJa: "真月譚 月姫"
    }
  ],
  "2004": [
    //10
    {
      titleZh: "怪物事变",
      titleEn: "MONSTER",
      titleJa: "MONSTER"
    },
    {
      titleZh: "蔷薇少女",
      titleEn: "Rozen Maiden",
      titleJa: "ローゼンメイデン"
    },
    { titleZh: "学园爱丽丝", 
      titleEn: "Alice Academy", 
      titleJa: "学園アリス"
    },
    {
      titleZh: "混沌武士",
      titleEn: "Samurai Champloo",
      titleJa: "サムライチャンプルー"
    },
    {
      titleZh: "次元舰队",
      titleEn: "Zipangu",
      titleJa: "ジパング"
    },
    {
      titleZh: "魔法少女奈叶",
      titleEn: "Magical girl lyrical Nanoha",
      titleJa: "魔法少女リリカルなのは"
    },
    {
      titleZh: "怪医黑杰克",
      titleEn: "Black Jack",
      titleJa: "ブラック・ジャック"
    },
    {
      titleZh: "游戏王",
      titleEn: "Yu-Gi-Oh! Duel Monsters GX",
      titleJa: "遊☆戯☆王デュエルモンスターズGX "
    },
    {
      titleZh: "圣母在上",
      titleEn: "Maria Watches Over Us",
      titleJa: "マリア様がみてる"
    },
    {
      titleZh: "死神",
      titleEn: "BLEACH",
      titleJa: "BLEACH"
    }
  ],
  "2005": [
    //12
    {
      titleZh: "水星领航员",
      titleEn: "ARIA The ANIMATION",
      titleJa: "ARIA The ANIMATION"
    },
    {
      titleZh: "虫师",
      titleEn: "Mushishi",
      titleJa: "蟲師"
    },
    { titleZh: "妖精的旋律", 
      titleEn: "Elfen Lied", 
      titleJa: "エルフェンリート"
    },
    {
      titleZh: "交响诗篇",
      titleEn: "Eureka Seven",
      titleJa: "交響詩篇エウレカセブン"
    },
    {
      titleZh: "地狱少女",
      titleEn: "Hell Girl",
      titleJa: "地獄少女"
    },
    {
      titleZh: "AIR",
      titleEn: "AIR",
      titleJa: "AIR"
    },
    {
      titleZh: "血战",
      titleEn: "BLOOD+",
      titleJa: "BLOOD+"
    },
    {
      titleZh: "蜂蜜幸运草",
      titleEn: "Honey and Clover",
      titleJa: "ハチミツとクローバー"
    },
    {
      titleZh: "草莓棉花糖",
      titleEn: "Strawberry Marshmallow",
      titleJa: "苺ましまろ"
    },
    {
      titleZh: "灼眼的夏娜",
      titleEn: "Shakugan no Shana",
      titleJa: "灼眼のシャナ"
    },
    {
      titleZh: "舞-乙HiME",
      titleEn: "MY-OTOME",
      titleJa: "舞-乙HiME"
    },
    {
      titleZh: "草莓百分百",
      titleEn: "Strawberry 100%",
      titleJa: "いちご100%"
    }
  ],
  "2006": [
    //20
    {
      titleZh: "死亡笔记",
      titleEn: "Death Note",
      titleJa: "DEATH NOTE"
    },
    {
      titleZh: "凉宫春日的忧郁",
      titleEn: "The Melancholy of Haruhi Suzumiya",
      titleJa: "涼宮ハルヒの憂鬱"
    },
    { 
      titleZh: "银魂", 
      titleEn: "Gintama", 
      titleJa: "銀魂"
    },
    {
      titleZh: "反叛的鲁路修",
      titleEn: "Code Geass: Lelouch of the Rebellion",
      titleJa: "コードギアス 反逆のルルーシュ"
    },
    {
      titleZh: "寒蝉鸣泣之时",
      titleEn: "Higurashi When They Cry",
      titleJa: "ひぐらしのなく頃に"
    },
    {
      titleZh: "黑礁",
      titleEn: "Black Lagoon",
      titleJa: "BLACK LAGOON"
    },
    {
      titleZh: "娜娜",
      titleEn: "NANA",
      titleJa: "NANA"
    },
    {
      titleZh: "樱兰高校男公关部",
      titleEn: "Ouran High School Host Club",
      titleJa: "桜蘭高校ホスト部"
    },
    {
      titleZh: "驱魔少年",
      titleEn: "D.Gray-man",
      titleJa: "D.Gray-man"
    },
    {
      titleZh: "传颂之物",
      titleEn: "Utawarerumono",
      titleJa: "うたわれるもの"
    },
    {
      titleZh: "彩云国物语",
      titleEn: "The Story of Saiunkoku",
      titleJa: "彩雲国物語"
    },
    {
      titleZh: "现视研",
      titleEn: "Genshiken",
      titleJa: "げんしけん"
    },
    {
      titleZh: "零之使魔",
      titleEn: "The Familiar of Zero",
      titleJa: "ゼロの使い魔"
    },
    {
      titleZh: "穿越时空的少女",
      titleEn: "The Girl Who Leapt Through Time",
      titleJa: "時をかける少女"
    },
    {
      titleZh: "天保异闻妖奇士",
      titleEn: "Ghost Slayers Ayashi",
      titleJa: "天保異聞 妖奇士"
    },
    {
      titleZh: "欢迎来到NHK",
      titleEn: "Welcome to N.H.K",
      titleJa: "NHKにようこそ"
    },
    {
      titleZh: "xxxHOLiC",
      titleEn: "xxxHOLiC",
      titleJa: "xxxHOLiC"
    },
    {
      titleZh: "家庭教师REBORN",
      titleEn: "Katekyo Hittoman Ribōn!",
      titleJa: "家庭教師ヒットマンREBORN"
    },
    {
      titleZh: "少年阴阳师",
      titleEn: "The Young Onmyoji",
      titleJa: "少年陰陽師"
    },
    {
      titleZh: "结界师",
      titleEn: "barrier master",
      titleJa: "結界師"
    }
  ],
  "2007": [
    //22
    {
      titleZh: "火影忍者疾风传",
      titleEn: "Naruto Shippuden",
      titleJa: "NARUTO -ナルト- 疾風伝"
    },
    {
      titleZh: "悠久之翼",
      titleEn: "ef: A Tale of Memories",
      titleJa: "ef - a tale of memories."
    },
    {
      titleZh: "天元突破 红莲螺岩",
      titleEn: "Tengen Toppa Gurren Lagann",
      titleJa: "天元突破グレンラガン"
    },
    {
      titleZh: "精灵守护人",
      titleEn: "Guardian of the Spirit",
      titleJa: "精霊の守り人"
    },
    {
      titleZh: "幸运星",
      titleEn: "Lucky Star",
      titleJa: "らき☆すた"
    },
    {
      titleZh: "SA优等生",
      titleEn: "Special A",
      titleJa: "S・A～スペシャル・エー"
    },
    {
      titleZh: "黑之契约者",
      titleEn: "Darker than Black",
      titleJa: "DARKER THAN BLACK -黒の契約者-"
    },
    {
      titleZh: "王牌投手振臂高呼",
      titleEn: "Big Windup",
      titleJa: "おおきく振りかぶって"
    },
    {
      titleZh: "濑户的花嫁",
      titleEn: "My Bride is a Mermaid",
      titleJa: "瀬戸の花嫁"
    },
    {
      titleZh: "南家三姐妹",
      titleEn: "Minami-ke",
      titleJa: "みなみけ"
    },
    {
      titleZh: "秒速五厘米",
      titleEn: "5 Centimeters per Second",
      titleJa: "秒速5センチメートル"
    },
    {
      titleZh: "地球防卫少年",
      titleEn: "Bokurano",
      titleJa: "ぼくらの"
    },
    {
      titleZh: "萌菌物语",
      titleEn: "Moyasimon: Tales of Agriculture",
      titleJa: "もやしもん"
    },
    {
      titleZh: "日在校园",
      titleEn: "School Days",
      titleJa: "スクールデイズ"
    },
    {
      titleZh: "交响情人梦",
      titleEn: "Nodame Cantabile",
      titleJa: "のだめカンタービレ"
    },
    {
      titleZh: "向阳素描",
      titleEn: "Hidamari Sketch",
      titleJa: "ひだまりスケッチ"
    },
    {
      titleZh: "海猫鸣泣之时",
      titleEn: "Umineko: When They Cry",
      titleJa: "うみねこのなく頃に"
    },
    {
      titleZh: "守护甜心",
      titleEn: "Shugo Chara!",
      titleJa: "しゅごキャラ!"
    },
    {
      titleZh: "空之境界",
      titleEn: "The Garden of sinners",
      titleJa: "空の境界"
    },
    {
      titleZh: "再见绝望先生",
      titleEn: "Goodbye, Mr.Despair",
      titleJa: "さよなら絶望先生"
    },
    {
      titleZh: "大剑",
      titleEn: "Claymore",
      titleJa: "Claymore"
    },
    {
      titleZh: "旋风管家",
      titleEn: "Hayatenogotoku",
      titleJa: "ハヤテのごとく!"
    }
  ],
  "2008": [
    //22
    {
      titleZh: "反叛的鲁鲁修R2",
      titleEn: "Code Geass: Leouch of the Rebellion R2",
      titleJa: "コードギアス 反逆のルルーシュR2"
    },
    {
      titleZh: "夏目友人帐",
      titleEn: "Natsume's Book of Friends",
      titleJa: "夏目友人帳"
    },
    {
      titleZh: "魍魉之匣",
      titleEn: "Mōryō no Hako",
      titleJa: "魍魎の匣"
    },
    {
      titleZh: "龙与虎",
      titleEn: "Toradora!",
      titleJa: "とらドラ！"
    },
    {
      titleZh: "魔法禁书目录",
      titleEn: "A Certain Magical Index",
      titleJa: "とある魔術の禁書目録"
    },
    {
      titleZh: "超时空要塞F",
      titleEn: "Macross Frontier",
      titleJa: "マクロスF"
    },
    {
      titleZh: "强袭魔女",
      titleEn: "Strike Witches",
      titleJa: "ストライクウィッチーズ"
    },
    {
      titleZh: "食灵-零",
      titleEn: "Ga-Rei: Zero",
      titleJa: "喰霊-零-"
    },
    {
      titleZh: "狼与香辛料",
      titleEn: "Spice and Wolf",
      titleJa: "狼と香辛料"
    },
    { titleZh: "神薙", 
      titleEn: "Kannagi", 
      titleJa: "かんなぎ" 
    },
    {
      titleZh: "噬魂师",
      titleEn: "Soul Eater",
      titleJa: "ソウルイーター"
    },
    { titleZh: "黑执事", 
      titleEn: "Black Butler", 
      titleJa: "黒執事"
    },
    { titleZh: "CLANNAD AF", 
      titleEn: "CLANNAD ～AFTER STORY～", 
      titleJa: "CLANNAD ～AFTER STORY～ "
    },
    {
      titleZh: "我的狐仙女友",
      titleEn: "Kanokon",
      titleJa: "かのこん"
    },
    {
      titleZh: "吸血鬼骑士",
      titleEn: "Vampire Knight",
      titleJa: "ヴァンパイア騎士"
    },
    {
      titleZh: "图书馆战争",
      titleEn: "Library Wars",
      titleJa: "図書館戦争"
    },
    {
      titleZh: "道子与哈金",
      titleEn: "Michiko & Hatchin",
      titleJa: "ミチコとハッチン"
    },
    {
      titleZh: "一吻定情",
      titleEn: "Itazura na Kiss",
      titleJa: "イタズラなKiss（アニメ）"
    },
    {
      titleZh: "深渊传说",
      titleEn: "TALES OF THE ABYSS",
      titleJa: "テイルズ オブ ジ アビス"
    },
    {
      titleZh: "华丽的挑战",
      titleEn: "Skip Beat!",
      titleJa: "スキップ・ビート!"
    },
    {
      titleZh: "纯情罗曼史",
      titleEn: "Junjo Romantica",
      titleJa: "純情ロマンチカ"
    },
    {
      titleZh: "亡念的扎姆德",
      titleEn: "Xam'd: Lost Memories ",
      titleJa: "亡念のザムド"
    } 
  ],
  "2009": [
    //22
    {
      titleZh: "钢之炼金术师FA",
      titleEn: "Fullmetal Alchemist: Brotherhood",
      titleJa: "鋼の錬金術師 FULLMETAL ALCHEMIST"
    },
    {
      titleZh: "化物语",
      titleEn: "Bakemonogatari",
      titleJa: "化物語"
    },
    {
      titleZh: "潘多拉之心",
      titleEn: "Pandora Hearts",
      titleJa: "Pandora Hearts"
    },
    {
      titleZh: "某科学的超电磁炮",
      titleEn: "A Certain Scientific Railgun",
      titleJa: "とある科学の超電磁砲"
    },
    { titleZh: "轻音少女", 
      titleEn: "K-ON!", 
      titleJa: "けいおん!"
    },
    {
      titleZh: "天降之物",
      titleEn: "Heaven's Lost Property",
      titleJa: "そらのおとしもの"
    },
    {
      titleZh: "东京地震8.0",
      titleEn: "Tokyo Magnitude 8.0",
      titleJa: "東京マグニチュード8.0"
    },
    {
      titleZh: "东之伊甸",
      titleEn: "Eden of the East",
      titleJa: "東のエデン"
    },
    {
      titleZh: "学生会的一己之见",
      titleEn: "Student Council's Discretion",
      titleJa: "生徒会の一存"
    },
    {
      titleZh: "好想告诉你",
      titleEn: "Kimi ni Todoke",
      titleJa: "君に届け"
    },
    {
      titleZh: "幸运四叶草",
      titleEn: "cross game",
      titleJa: "クロスゲーム"
    },
    {
      titleZh: "天才麻将少女",
      titleEn: "Saki",
      titleJa: "咲-Saki-"
    },
    {
      titleZh: "黑塔利亚",
      titleEn: "Hetalia Axis Powers",
      titleJa: "ヘタリア Axis Powers（アニメ）"
    },
    {
      titleZh: "怪谈餐厅",
      titleEn: "Kaidan Restaurant",
      titleJa: "怪談レストラン"
    },
    {
      titleZh: "梦色蛋糕师",
      titleEn: "Yumeiro Patissiere",
      titleJa: "夢色パティシエール"
    },
    {
      titleZh: "我要上太空",
      titleEn: "Twin Spica",
      titleJa: "ふたつのスピカ"
    },
    {
      titleZh: "战国BASARA",
      titleEn: "Sengoku BASARA ",
      titleJa: "戦国BASARA"
    },
    {
      titleZh: "GA 艺术科美术设计班",
      titleEn: "GA: Geijutsuka Art Design Class",
      titleJa: "GA 芸術科アートデザインクラス",
    },
    {
      titleZh: "信蜂",
      titleEn: "Letter Bee",
      titleJa: "テガミバチ ",
    },    
    {
      titleZh: "小鸠",
      titleEn: "Kobato",
      titleJa: "こばと ",
    }, 
    {
      titleZh: "迦南",
      titleEn: "CANAAN",
      titleJa: "CANAAN",
    },
    {
      titleZh: "妖精的尾巴",
      titleEn: "Fairy Tail",
      titleJa: "FAIRY TAIL",
    }
  ],
  "2010": [
    //21
    {
      titleZh: "Angel Beats!",
      titleEn: "Angel Beats!",
      titleJa: "Angel Beats!"
    },
    {
      titleZh: "缘之空",
      titleEn: "Yosuga no Sora",
      titleJa: "ヨスガノソラ"
    },
    {
      titleZh: "江户盗贼团五叶",
      titleEn: "Saraiya GoYo",
      titleJa: "さらい屋 五葉"
    },
    {
      titleZh: "我的妹妹哪有这么可爱！",
      titleEn: "Oreimo",
      titleJa: "俺の妹がこんなに可愛いわけがない"
    },
    {
      titleZh: "滑头鬼之孙",
      titleEn: "Nurarihyon's Grandson",
      titleJa: "ぬらりひょんの孫"
    },
    {
      titleZh: "亲吻姐姐",
      titleEn: "Kiss × Sis",
      titleJa: "kiss×sis"
    },
    {
      titleZh: "尸鬼",
      titleEn: "Shiki",
      titleJa: "屍鬼"
    },
    {
      titleZh: "爆漫王",
      titleEn: "Bakuman",
      titleJa: "バクマン"
    },
    {
      titleZh: "会长是女仆大人！",
      titleEn: "Maid Sama!",
      titleJa: "会長はメイド様！"
    },
    {
      titleZh: "四叠半神话大系",
      titleEn: "The Tatami Galaxy",
      titleJa: "四畳半神話大系"
    },
    {
      titleZh: "无头骑士异闻录",
      titleEn: "Durarara!!",
      titleJa: "デュラララ!!"
    },
    {
      titleZh: "女仆咖啡厅",
      titleEn: "And Yet the Town Moves",
      titleJa: "それでも町は廻っている"
    },
    {
      titleZh: "迷糊餐厅",
      titleEn: "Working!",
      titleJa: "WORKING!!"
    },
    {
      titleZh: "笨蛋，测验，召唤兽",
      titleEn: "Baka and Test",
      titleJa: "バカとテストと召喚獣"
    },
    {
      titleZh: "吊带袜天使",
      titleEn: "Panty & Stocking with Garterbelt",
      titleJa: "パンティ&ストッキングwithガーターベルト"
    },
    {
      titleZh: "只有神知道的世界",
      titleEn: "The World God Only Knows",
      titleJa: "神のみぞ知るセカイ（アニメ）"
    },
    {
      titleZh: "花丸幼稚园",
      titleEn: "Hanamaru Kindergarden",
      titleJa: "はなまる幼稚園"
    },
    {
      titleZh: "荒川爆笑团",
      titleEn: "Arakawa Under the Bridge",
      titleJa: "荒川アンダー ザ ブリッジ"
    },
    {
      titleZh: "学园默示录",
      titleEn: "HIGH SCHOOL OF THE DEAD",
      titleJa: "学園黙示録 HIGHSCHOOL OF THE DEAD"
    },
    {
      titleZh: "薄樱鬼",
      titleEn: "Hakuoki",
      titleJa: "薄桜鬼"
    },
    {
      titleZh: "咎狗之血",
      titleEn: "Togainu no Chi",
      titleJa: "咎狗の血",
    } 
  ],
  "2011": [
    //20
    {
      titleZh: "命运石之门",
      titleEn: "Steins;Gate",
      titleJa: "STEINS;GATE"
    },
    {
      titleZh: "花名未闻",
      titleEn: "AnoHana",
      titleJa: "あの日見た花の名前を僕達はまだ知らない。"
    },
    {
      titleZh: "魔法少女小圆",
      titleEn: "Puella Magi Madoka Magica",
      titleJa: "魔法少女まどか☆マギカ"
    },
    {
      titleZh: "Fate/Zero",
      titleEn: "Fate/Zero",
      titleJa: "Fate/Zero"
    },
    {
      titleZh: "全职猎人",
      titleEn: "Hunter x Hunter",
      titleJa: "HUNTER×HUNTER",
    },
    { titleZh: "日常", 
      titleEn: "Nichijou", 
      titleJa: "日常"
    },
    {
      titleZh: "罪恶王冠",
      titleEn: "Guilty Crown",
      titleJa: "ギルティクラウン"
    },
    {
      titleZh: "白兔糖",
      titleEn: "Bunny Drop",
      titleJa: "うさぎドロップ"
    },
    {
      titleZh: "花牌情缘",
      titleEn: "Chihayafuru",
      titleJa: "ちはやふる"
    },
    {
      titleZh: "赌博默示录",
      titleEn: "Kaiji: Against All Rules",
      titleJa: "逆境無頼カイジ 破戒録篇"
    },
    {
      titleZh: "未来日记",
      titleEn: "Future Diary",
      titleJa: "未来日記"
    },
    {
      titleZh: "花开伊吕波",
      titleEn: "Hanasaku Iroha",
      titleJa: "花咲くいろは"
    },
    {
      titleZh: "摇曳百合",
      titleEn: "YuruYuri",
      titleJa: "ゆるゆり"
    },
    {
      titleZh: "我的朋友很少",
      titleEn: "Haganai",
      titleJa: "僕は友達が少ない"
    },
    {
      titleZh: "TIGER & BUNNY",
      titleEn: "TIGER & BUNNY",
      titleJa: "TIGER & BUNNY"
    },
    {
      titleZh: "无限斯特拉托斯",
      titleEn: "Infinite Stratos",
      titleJa: "IS<インフィニット・ストラトス>"
    },
    {
      titleZh: "恶魔奶爸",
      titleEn: "Beelzebub",
      titleJa: "べるぜバブ"
    },
    {
      titleZh: "レベルE",
      titleEn: "レベルE",
      titleJa: "レベルE"
    },
    {
      titleZh: "绯弹的亚莉亚",
      titleEn: "Aria the Scarlet Ammo",
      titleJa: "緋弾のアリア "
    },
    {
      titleZh: "黑岩射手",
      titleEn: "Black Rock Shooter",
      titleJa: "ブラック★ロックシューター",
    }

  ],
  "2012": [
    //19
    {
      titleZh: "JOJO的奇妙冒险",
      titleEn: "JoJo's Bizarre Adventure",
      titleJa: "ジョジョの奇妙な冒険"
    },
    {
      titleZh: "心理测量者",
      titleEn: "Psycho-Pass",
      titleJa: "PSYCHO-PASS サイコパス"
    },
    {
      titleZh: "刀剑神域",
      titleEn: "Sword Art Online",
      titleJa: "ソードアート・オンライン"
    },
    { titleZh: "冰菓", 
      titleEn: "Hyouka", 
      titleJa: "氷菓"
    },
    { titleZh: "邻座的怪同学", 
      titleEn: "My Little Monster", 
      titleJa: "となりの怪物くん"
    },
    { titleZh: "绯色的欠片", 
      titleEn: "Hiiro no Kakera", 
      titleJa: "緋色の欠片"
    },
    { 
      titleZh: "猛烈宇宙海贼", 
      titleEn: "Bodacious Space Pirates", 
      titleJa: "モーレツ宇宙海賊"
    },
    { 
      titleZh: "宇宙兄弟", 
      titleEn: "Space Brothers", 
      titleJa: "宇宙兄弟"
    },
    { 
      titleZh: "军火女王", 
      titleEn: "Jormungand", 
      titleJa: "ヨルムンガンド"
    },
    {
      titleZh: "中二病也要谈恋爱！",
      titleEn: "Love, Chunibyo & Other Delusions!",
      titleJa: "中二病でも恋がしたい！"
    },
    {
      titleZh: "少女与战车",
      titleEn: "Girls und Panzer",
      titleJa: "ガールズ&パンツァー"
    },
    {
      titleZh: "男子高中生的日常",
      titleEn: "Daily Lives of High School Boys",
      titleJa: "男子高校生の日常"
    },
    {
      titleZh: "惊爆游戏",
      titleEn: "BTOOOM!",
      titleJa: "BTOOOM!"
    },
    {
      titleZh: "坂道上的阿波罗",
      titleEn: "Kids on the Slope",
      titleJa: "坂道のアポロン "
    },
    {
      titleZh: "来自新世界",
      titleEn: "From the New World",
      titleJa: "新世界より"
    },
    {
      titleZh: "Little Busters!",
      titleEn: "Little Busters!",
      titleJa: "リトルバスターズ！"
    },
    {
      titleZh: "TARI TARI",
      titleEn: "TARI TARI",
      titleJa: "TARI TARI"
    },
    {
      titleZh: "元气少女缘结神",
      titleEn: "Kamisama Kiss",
      titleJa: "神様はじめました"
    },
    {
      titleZh: "白熊咖啡厅",
      titleEn: "Polar Bear Cafe",
      titleJa: "しろくまカフェ"
    }
  ],
  "2013": [
    //17
    {
      titleZh: "进击的巨人",
      titleEn: "Attack on Titan",
      titleJa: "進撃の巨人"
    },
    {
      titleZh: "我的青春恋爱物语果然有问题",
      titleEn: "My Teen Romantic Comedy SNAFU",
      titleJa: "やはり俺の青春ラブコメはまちがっている。"
    },
    {
      titleZh: "来自风平浪静的明天",
      titleEn: "Nagi-Asu: A Lull in the Sea",
      titleJa: "凪のあすから"
    },
    {
      titleZh: "萌萌侵略者",
      titleEn: "Outbreak Company",
      titleJa: "アウトブレイク・カンパニー"
    },
    {
      titleZh: "打工吧！魔王大人！",
      titleEn: "The Devil Is a Part-Timer!",
      titleJa: "はたらく魔王さま！ "
    },
    {
      titleZh: "境界的彼方",
      titleEn: "Beyond the Boundary",
      titleJa: "境界の彼方"
    },
    {
      titleZh: "言叶之庭",
      titleEn: "The Garden of Words",
      titleJa: "言の葉の庭"
    },
    {
      titleZh: "噬血狂袭",
      titleEn: "Strike the Blood",
      titleJa: "ストライク・ザ・ブラッド "
    },
    {
      titleZh: "悠哉日常大王",
      titleEn: "Non Non Biyori",
      titleJa: "のんのんびより"
    },
    {
      titleZh: "钻石王牌",
      titleEn: "Ace of Diamond",
      titleJa: "ダイヤのA"
    },
    {
      titleZh: "Free!",
      titleEn: "Free!",
      titleJa: "Free!"
    },
    {
      titleZh: "银之匙",
      titleEn: "Sliver Spoon",
      titleJa: "銀の匙 Silver Spoon"
    },
    {
      titleZh: "玉子市场",
      titleEn: "Tamako Market",
      titleJa: "たまこまーけっと"
    },
    {
      titleZh: "刀语",
      titleEn: "Katanagatari ",
      titleJa: "刀語"
    },
    {
      titleZh: "Love Live!",
      titleEn: "Love Live!",
      titleJa: "ラブライブ！"
    },
    {
      titleZh: "斩服少女",
      titleEn: "Kill la Kill",
      titleJa: "キルラキル",
    },
    {
      titleZh: "约会大作战",
      titleEn: "Date A Live",
      titleJa: "デート・ア・ライブ"
    }
  ],
  "2014": [
    //17
    {
      titleZh: "排球少年！",
      titleEn: "HAIKYU!!",
      titleJa: "ハイキュー!!"
    },
    {
      titleZh: "东京残响",
      titleEn: "Terror in Resonance",
      titleJa: "残響のテロル"
    },
    {
      titleZh: "四月是你的谎言",
      titleEn: "Your Lie in April",
      titleJa: "四月は君の嘘"
    },
    {
      titleZh: "东京喰种",
      titleEn: "Tokyo Ghoul",
      titleJa: "東京喰種トーキョーグール"
    },
    {
      titleZh: "游戏人生",
      titleEn: "No Game No Life",
      titleJa: "ノーゲーム・ノーライフ"
    },
    {
      titleZh: "六畳間的侵略者!?",
      titleEn: "Invaders of the Rokujouma!?",
      titleJa: "六畳間の侵略者!?"
    },
    {
      titleZh: "魔法科高校的劣等生",
      titleEn: "The Irregular at Magic High School",
      titleJa: "魔法科高校の劣等生"
    },
    {
      titleZh: "天体的秩序",
      titleEn: "Celestial Method",
      titleJa: "天体のメソッド"
    },
    {
      titleZh: "野良神",
      titleEn: "Noragami: Stray God",
      titleJa: "ノラガミ"
    },
    {
      titleZh: "鬼灯的冷彻",
      titleEn: "Hozuki's Coolheadedness",
      titleJa: "鬼灯の冷徹"
    },
    {
      titleZh: "境界触发者",
      titleEn: "World Trigger",
      titleJa: "ワールドトリガー"
    },
    {
      titleZh: "魔弹之王与战姬",
      titleEn: "Lord Marksman and Vanadis",
      titleJa: "魔弾の王と戦姫"
    },
    {
      titleZh: "拂晓的尤娜",
      titleEn: "Yona of the Dawn",
      titleJa: "暁のヨナ"
    },
    {
      titleZh: "寄生兽 生命的准则",
      titleEn: "Parasyte -the maxim-",
      titleJa: "寄生獣 セイの格率"
    },
    { 
      titleZh: "白箱", 
      titleEn: "Shirobako", 
      titleJa: "SHIROBAKO"
    },
    {
      titleZh: "请问您今天要来点兔子吗？",
      titleEn: "Is the Order a Rabbit?",
      titleJa: "ご注文はうさぎですか？"
    },
    {
      titleZh: "七宗罪",
      titleEn: "The Seven Deadly Sins",
      titleJa: "七つの大罪"
    }
  ],
  "2015": [
    //16
    {
      titleZh: "暗杀教室",
      titleEn: "Assassination Classroom",
      titleJa: "暗殺教室"
    },
    {
      titleZh: "夏洛特",
      titleEn: "Charlotte",
      titleJa: "シャーロット"
    },
    {
      titleZh: "路人女主的养成方法",
      titleEn: "Saekano: How to Raise a Boring Girlfriend",
      titleJa: "冴えない彼女の育てかた"
    },
    {
      titleZh: "OVERLORD",
      titleEn: "Overlord",
      titleJa: "オーバーロード"
    },
    {
      titleZh: "吹响！悠风号",
      titleEn: "Sound! Euphonium",
      titleJa: "響け！ユーフォニアム"
    },
    {
      titleZh: "可塑性记忆",
      titleEn: "Plastic Memories",
      titleJa: "プラスティック・メモリーズ"
    },
    {
      titleZh: "我想吃掉你的胰脏",
      titleEn: "I want to eat your pancreas",
      titleJa: "君の膵臓をたべたい"
    },
    {
      titleZh: "在地下城寻求邂逅是否搞错了什么",
      titleEn: "Is it wrong to Try to Pick Up Girls in a Dungeon?",
      titleJa: "ダンジョンに出会いを求めるのは間違っているだろうか"
    },
    {
      titleZh: "终结的炽天使",
      titleEn: "Seraph of the End",
      titleJa: "終わりのセラフ "
    },
    {
      titleZh: "爱吃拉面的小泉同学",
      titleEn: "Ms. Koizumi Loves Ramen Noodles",
      titleJa: "ラーメン大好き小泉さん "
    },
    {
      titleZh: "干物妹！小埋",
      titleEn: "Himouto! Umaru-chan",
      titleJa: "干物妹！うまるちゃん"
    },
    {
      titleZh: "食戟之灵",
      titleEn: "Food Wars!: Shokugeki no Soma",
      titleJa: "食戟のソーマ"
    },
    {
      titleZh: "山田君与七人魔女",
      titleEn: "Yamada-kun and the Seven Witches",
      titleJa: "山田くんと7人の魔女"
    },
    {
      titleZh: "阿松",
      titleEn: "Osomatsu-san",
      titleJa: "おそ松さん"
    },
    {
      titleZh: "俺物语",
      titleEn: "MY LOVE STORY",
      titleJa: "俺物語!!"
    },
    {
      titleZh: "一拳超人",
      titleEn: "one punch man",
      titleJa: "ワンパンマン"
    }
  ],
  "2016": [
    //18
    {
      titleZh: "为美好的世界献上祝福！",
      titleEn: "Kono Suba",
      titleJa: "この素晴らしい世界に祝福を！"
    },
    {
      titleZh: "Re：从零开始的异世界生活",
      titleEn: "Re:Zero ",
      titleJa: "Re:ゼロから始める異世界生活"
    },
    {
      titleZh: "齐木楠雄的灾难",
      titleEn: "The Disastrous Life of Saiki K.",
      titleJa: "斉木楠雄のΨ難"
    },
    {
      titleZh: "只有我不存在的城市",
      titleEn: "Erased",
      titleJa: "僕だけがいない街"
    },
    {
      titleZh: "文豪野犬",
      titleEn: "Bungo Stray Dogs",
      titleJa: "文豪ストレイドッグス"
    },
    {
      titleZh: "灰与幻想的格林姆迦尔",
      titleEn: "Grimgar of Fantasy and Ash",
      titleJa: "灰と幻想のグリムガル"
    },
    {
      titleZh: "维度战记",
      titleEn: "Dimension W",
      titleJa: "Dimension W"
    },
    {
      titleZh: "甲铁城的卡巴内利",
      titleEn: "Kabaneri of the Iron Fortress",
      titleJa: "甲鉄城のカバネリ"
    },
    {
      titleZh: "Joker Game",
      titleEn: "Joker Game",
      titleJa: "ジョーカー・ゲーム"
    },
    { 
      titleZh: "你的名字", 
      titleEn: "Your Name", 
      titleJa: "君の名は"
    },
    {
      titleZh: "3月的狮子",
      titleEn: "March Comes in Like a Lion",
      titleJa: "3月のライオン"
    },
    {
      titleZh: "冰上的尤里",
      titleEn: "Yuri on ICE",
      titleJa: "ユーリ!!! on ICE"
    },
    {
      titleZh: "在下坂本，有何贵干？",
      titleEn: "Haven't You Heard? I'm Sakamoto",
      titleJa: "坂本ですが？"
    },
    {
      titleZh: "机动战士高达独角兽",
      titleEn: "MOBILE SUIT GUNDAM UNICORN RE:0096",
      titleJa: "機動戦士ガンダムユニコーン RE:0096"
    },
    {
      titleZh: "昭和元禄落语心中",
      titleEn: "Descending Stories: Showa Genroku Rakugo Shinju",
      titleJa: "昭和元禄落語心中"
    },
    {
      titleZh: "亚人",
      titleEn: "Ajin: Demi-Human",
      titleJa: "亜人"
    },
    {
      titleZh: "编舟记",
      titleEn: "The Great Passage",
      titleJa: "舟を編む"
    },
    {
      titleZh: "剑风传奇",
      titleEn: "Berserk",
      titleJa: "ベルセルク"
    },
  ],
  "2017": [
    //12
    {
      titleZh: "来自深渊",
      titleEn: "Made in Abyss",
      titleJa: "メイドインアビス"
    },
    {
      titleZh: "幼女战记",
      titleEn: "Saga of Tanya the Evil",
      titleJa: "幼女戦記"
    },
    {
      titleZh: "欢迎来到实力至上的教室",
      titleEn: "Classroom of the Elite",
      titleJa: "ようこそ実力至上主義の教室へ"
    },
    {
      titleZh: "One Room",
      titleEn: "One Room",
      titleJa: "One Room"
    },
    {
      titleZh: "天使的3P",
      titleEn: "Tenshi no 3P!",
      titleJa: "天使の3P！"
    },
    {
      titleZh: "埃罗芒阿老师",
      titleEn: "Eromanga Sensei",
      titleJa: "エロマンガ先生"
    },
    {
      titleZh: "狂赌之渊",
      titleEn: "Kakegurui",
      titleJa: "賭ケグルイ"
    },
    {
      titleZh: "小林家的龙女仆",
      titleEn: "Miss Kobayashi's Dragon Maid",
      titleJa: "小林さんちのメイドラゴン"
    },
    {
      titleZh: "魔法使的新娘",
      titleEn: "The Ancient Magus' Bride",
      titleJa: "魔法使いの嫁"
    },
    {
      titleZh: "动物朋友",
      titleEn: "Kemono Friends",
      titleJa: "けものフレンズ "
    }, 
    {
      titleZh: "宝石之国",
      titleEn: "LAND OF THE LUSTROUS",
      titleJa: "宝石の国 "
    },  
    {
      titleZh: "人渣的本愿",
      titleEn: "Scum's Wish",
      titleJa: "クズの本懐"
    }, 
  ],
  "2018": [
    //15
    {
      titleZh: "紫罗兰永恒花园",
      titleEn: "Violet Evergarden",
      titleJa: "ヴァイオレット・エヴァーガーデン"
    },
    {
      titleZh: "青春笨蛋少年不做兔女郎学姐的梦",
      titleEn: "Rascal Does Not Dream of Bunny Girl Senpai",
      titleJa: "青春ブタ野郎はバニーガール先輩の夢を見ない"
    },
    {
      titleZh: "关于我转生变成史莱姆这档事",
      titleEn: "That Time I Got Reincarnated as a Slime",
      titleJa: "転生したらスライムだった件"
    },
    {
      titleZh: "比宇宙更远的地方",
      titleEn: "A Place Further Than the Universe",
      titleJa: "宇宙よりも遠い場所"
    },
    {
      titleZh: "黄金神威",
      titleEn: "Golden Kamuy",
      titleJa: "ゴールデンカムイ"
    },
    {
      titleZh: "战栗杀机",
      titleEn: "Banana FIsh",
      titleJa: "Banana FIsh"
    },
    {
      titleZh: "摇曳露营△",
      titleEn: "Yuru Camp△",
      titleJa: "ゆるキャン△"
    },
    {
      titleZh: "赛马娘 Pretty Derby",
      titleEn: "Umamusume Pretty Derby",
      titleJa: "ウマ娘 プリティーダービー"
    },
    {
      titleZh: "三颗星彩色冒险",
      titleEn: "Mitsuboshi Colors",
      titleJa: "三ツ星カラーズ"
    },
    {
      titleZh: "擅长捉弄的高木同学",
      titleEn: "Teasing Master Takagi-san",
      titleJa: "からかい上手の高木さん"
    },
    {
      titleZh: "强风吹拂",
      titleEn: "Run with the Wind",
      titleJa: "風が強く吹いている"
    },
    {
      titleZh: "工作细胞",
      titleEn: "Cells at work",
      titleJa: "はたらく細胞"
    },
    {
      titleZh: "恋如雨止",
      titleEn: "After the Rain",
      titleJa: "恋は雨上がりのように"
    },
    {
      titleZh: "宅男宅女恋爱难",
      titleEn: "Wotakoi: Love Is Hard for Otaku",
      titleJa: "ヲタクに恋は難しい"
    },
    {
      titleZh: "弦音",
      titleEn: "Tsurune: Kazemai High School Kyudo Club",
      titleJa: "ツルネ－風舞高校弓道部－"
    },
  ],
  "2019": [
    //10
    {
      titleZh: "辉夜大小姐想让我告白",
      titleEn: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunōsen",
      titleJa: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～"
    },
    {
      titleZh: "五等分的新娘",
      titleEn: "The Quintessential Quintuplets",
      titleJa: "五等分の花嫁"
    },
    {
      titleZh: "石纪元",
      titleEn: "Dr. Stone",
      titleJa: "Dr.STONE"
    },
    {
      titleZh: "约定的梦幻岛",
      titleEn: "Yakusoku no Neverland",
      titleJa: "約束のネバーランド"
    },
    {
      titleZh: "炎炎消防队",
      titleEn: "Fire Force",
      titleJa: "炎炎ノ消防隊"
    },
    {
      titleZh: "重来吧！魔王大人！",
      titleEn: "Demon Lord, Retry!",
      titleJa: "魔王様、リトライ！"
    },
    {
      titleZh: "Re Stage! Dream Days♪",
      titleEn: "Re Stage! Dream Days♪",
      titleJa: "Re:ステージ! ドリームデイズ♪"
    },
    {
      titleZh: "盾之勇者成名录",
      titleEn: "The Rising of the Shield Hero",
      titleJa: "盾の勇者の成り上がり "
    },
    {
      titleZh: "鬼灭之刃",
      titleEn: "Demon Slayer",
      titleJa: "鬼滅の刃"
    },
    {
      titleZh: "天气之子",
      titleEn: "Weathering With You",
      titleJa: "天気の子"
    }
  ],
  "2020": [
    //11
    {
      titleZh: "魔女之旅",
      titleEn: "Wandering Witch: The Journey of Elaina",
      titleJa: "魔女の旅々"
    },
    {
      titleZh: "达尔文游戏",
      titleEn: "Darwin's Game",
      titleJa: "ダーウィンズゲーム"
    },
    {
      titleZh: "因为怕痛所以全点了防御",
      titleEn: "BOFURI: I Don\'t Want to Get Hurt, so I\'ll Max Out My Defense",
      titleJa: "痛いのは嫌なので防御力に極振りしたいと思います。"
    },
    {
      titleZh: "在魔王城说晚安",
      titleEn: "Sleepy Princess in the Demon Castle",
      titleJa: "魔王城でおやすみ"
    },
    {
      titleZh: "隐瞒之事",
      titleEn: "Kakushigoto",
      titleJa: "かくしごと"
    },
    {
      titleZh: "转生成为了只有乙女游戏破灭Flag的邪恶大小姐",
      titleEn: "My Next Life as a Villainess: All Routes Lead to Doom!",
      titleJa: "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…"
    },
    {
      titleZh: "咒术回战",
      titleEn: "Jujutsu Kaisen",
      titleJa: "呪術廻戦"
    },
    {
      titleZh: "忧国的莫里亚蒂",
      titleEn: "Moriarty the Patriot",
      titleJa: "憂国のモリアーティ"
    },
    {
      titleZh: "别对映像研出手！",
      titleEn: "Keep Your Hands Off Eizouken!",
      titleJa: "映像研には手を出すな！"
    },
    {
      titleZh: "出租女友",
      titleEn: "Rent-A-Girlfriend",
      titleJa: "彼女、お借りします"
    },
    {
      titleZh: "地縛少年花子君",
      titleEn: "Toilet-Bound Hanako-kun",
      titleJa: "地縛少年花子くん"
    }
  ],
  "2021": [
    //9
    {
      titleZh: "佐贺偶像是传奇",
      titleEn: "ZOMBIE LAND SAGA REVENGE",
      titleJa: "ゾンビランドサガ リベンジ"
    },
    {
      titleZh: "Vivy -Fluorite Eyeʼs Song-",
      titleEn: "Vivy -Fluorite Eyeʼs Song-",
      titleJa: "Vivy -Fluorite Eyeʼs Song-"
    },
    {
      titleZh: "无职转生Ⅱ～到了异世界就拿出真本事～",
      titleEn: "Mushoku Tensei: Jobless Reincarnation Season 2, Part 2",
      titleJa: "無職転生 ～異世界行ったら本気だす～ 第2クール"
    },
    {
      titleZh: "东京复仇者",
      titleEn: "Tokyo Revengers",
      titleJa: "東京リベンジャーズ"
    },
    {
      titleZh: "国王排名",
      titleEn: "Ranking of Kings",
      titleJa: "王様ランキング"
    },
    {
      titleZh: "堀与宫村",
      titleEn: "Horimiya",
      titleJa: "ホリミヤ"
    },
    {
      titleZh: "歌剧少女",
      titleEn: "Kageki Shojo!!",
      titleJa: "かげきしょうじょ!!"
    },
    {
      titleZh: "Kingdom3",
      titleEn: "Kingdom3",
      titleJa: "キングダム 第3シリーズ"
    },
    {
      titleZh: "歌之王子殿下",
      titleEn: "Uta no Prince-sama",
      titleJa: "うたの☆プリンスさまっ♪ マジLOVE1000％ "
    }
  ],
  "2022": [
    //12
    {
      titleZh: "间谍过家家",
      titleEn: "SPY×FAMILY",
      titleJa: "SPY×FAMILY"
    },
    {
      titleZh: "孤独摇滚！",
      titleEn: "Bocchi the Rock!",
      titleJa: "ぼっち・ざ・ろっく！"
    },
    {
      titleZh: "更衣人偶坠入爱河",
      titleEn: "My Dress-Up Darling",
      titleJa: "その着せ替え人形は恋をする"
    },
    {
      titleZh: "莉可莉丝",
      titleEn: "Lycoris Recoil",
      titleJa: "リコリス・リコイル"
    },
    {
      titleZh: "铃芽之旅",
      titleEn: "Suzume",
      titleJa: "すずめの戸締まり"
    },
    {
      titleZh: "来自深渊 烈日的黄金乡",
      titleEn: "Made in Abyss: The Golden City of the Scorching Sun",
      titleJa: "メイドインアビス 烈日の黄金郷"
    },
    {
      titleZh: "夏日重现",
      titleEn: "Summer Time Rendering",
      titleJa: "サマータイムレンダ"
    },
    {
      titleZh: "蓝色监狱",
      titleEn: "Blue Lock",
      titleJa: "ブルーロック "
    },
    {
      titleZh: "电锯人",
      titleEn: "chainsaw man",
      titleJa: "チェンソーマン"
    },
    {
      titleZh: "BLEACH千年血战",
      titleEn: "Bleach: Thousand-Year Blood War",
      titleJa: "BLEACH 千年血戦篇"
    },
    {
      titleZh: "机动战士高达 水星的魔女",
      titleEn: "Mobile Suit Gundam: The Witch from Mercury",
      titleJa: "機動戦士ガンダム 水星の魔女"
    },
    {
      titleZh: "派对咖孔明",
      titleEn: "Partygod Kongming",
      titleJa: "パリピ孔明"
    }
  ],
  "2023": [
    //10
    {
      titleZh: "我推的孩子",
      titleEn: "Oshi no Ko",
      titleJa: "【推しの子】"
    },
    {
      titleZh: "葬送的芙莉莲",
      titleEn: "Frieren: Beyond Journey's End",
      titleJa: "葬送のフリーレン"
    },
    {
      titleZh: "药屋少女的呢喃",
      titleEn: "The Apothecary Diaries",
      titleJa: "薬屋のひとりごと"
    },
    {
      titleZh: "跃动青春",
      titleEn: "Skip and Loafer",
      titleJa: "スキップとローファー"
    },
    {
      titleZh: "我心里危险的东西",
      titleEn: "The Dangers in My Heart",
      titleJa: "僕の心のヤバイやつ"
    },
    {
      titleZh: "天国大魔境",
      titleEn: "Heavenly Delusion",
      titleJa: "天国大魔境"
    },
    {
      titleZh: "拥有超常技能的异世界流浪美食家",
      titleEn: "Campfire Cooking in Another World with My Absurd Skill",
      titleJa: "とんでもスキルで異世界放浪メシ"
    },
    {
      titleZh: "别当欧尼酱了！",
      titleEn: "Onimai: I'm Now Your Sister!",
      titleJa: "お兄ちゃんはおしまい！"
    },
    {
      titleZh: "我的幸福婚约",
      titleEn: "My Happy Marriage",
      titleJa: "わたしの幸せな結婚"
    },
    {
      titleZh: "地狱乐",
      titleEn: "Hell's Paradise: Jigokuraku",
      titleJa: "地獄楽"
    },
  ],
  "2024": [
    //8
    {
      titleZh: "擅长逃跑的殿下",
      titleEn: "The Young Master Who Was Good at Escape",
      titleJa: "逃げ上手の若君"
    },
    {
      titleZh: "败犬女主太多了！",
      titleEn: "Too Many Losing Heroines!",
      titleJa: "負けヒロインが多すぎる！"
    },
    {
      titleZh: "反派千金等級99～我是隐藏头目但不是魔王～",
      titleEn: "Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord",
      titleJa: "悪役令嬢レベル99～私は裏ボスですが魔王ではありません～"
    },
    {
      titleZh: "乱马1/2 2024",
      titleEn: "Ranma 1/2 2024",
      titleJa: "らんま1/2"
    },
    {
      titleZh: "梦想成为魔法少女",
      titleEn: "Longing to be a magical girl",
      titleJa: "魔法少女にあこがれて"
    },
    {
      titleZh: "失忆投捕",
      titleEn: "Oblivion Battery",
      titleJa: "忘却バッテリー"
    },
    {
      titleZh: "转生为第七王子，随心所欲的魔法学习之路",
      titleEn: "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability",
      titleJa: "転生したら第七王子だったので、気ままに魔術を極めます"
    },
    {
      titleZh: "迷宫饭",
      titleEn: "Delicious in Dungeon",
      titleJa: "ダンジョン飯"
    }
  ]
}

// 添加一个辅助函数来根据语言获取动画标题
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  return anime[
    ("title" +
      language.charAt(0).toUpperCase() +
      language.slice(1)) as keyof AnimeItem
  ] as string
}

export default data
