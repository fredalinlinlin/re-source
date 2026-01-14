import { ScenesData, CharactersData, GameScores } from './types';

export const scenes: ScenesData = {
    "start": {
        text: "【Q1. 邊界的視角】\n你來到伺服器邊界。這裡重力失衡，空中漂浮著巨大的 3D 漢堡與半截羅馬柱。",
        question: "面對這片混亂，你的第一個動作是？",
        options: [
            { text: "A. [分析] 觀察材質細節，分析潛在危險。", next: "q2", type: "J" },
            { text: "B. [感知] 被荒謬感吸引，拍照當作靈感。", next: "q2", type: "P" }
        ]
    },
    "q2": {
        text: "【Q2. 入口的選擇】\n眼前有兩個模糊的入口。左邊發出刺耳雜訊，右邊安靜如黑洞。",
        question: "你決定從哪裡進入？",
        options: [
            { text: "A. [喧鬧側] 充滿雜訊的崩壞大門", next: "q3_1", type: "E" },
            { text: "B. [靜謐側] 隱藏在暗處的程式漏洞", next: "q3_2", type: "I" }
        ]
    },
    "q3_1": {
        text: "【喧鬧的遺跡】\n遇到一個全身呈現「紫色方格」的迷途 NPC，正對著空氣撞牆。",
        question: "你會怎麼處理它？",
        options: [
            { text: "A. [理性] 輸入修復指令，解決路徑錯誤。", next: "q4_1", type: "T" },
            { text: "B. [情感] 牽起它的手，帶它去安全草地。", next: "q4_2", type: "F" }
        ]
    },
    "q3_2": {
        text: "【靜謐的深淵】\n大廳供奉著「世界名作」，走近一看只是一張畫質極差的貓咪迷因圖。",
        question: "你的第一反應是？",
        options: [
            { text: "A. [批判] 「就這？」只是普通的低畫質 JPG。", next: "q4_3", type: "T" },
            { text: "B. [讚嘆] 這是那個時代的「集體潛意識」。", next: "q4_4", type: "F" }
        ]
    },
    // Q4 Nodes
    "q4_1": {
        text: "【Q4. 損壞的秘密】\n發現發光的「損壞資料夾」，裡面有幾則被刪除的貼文。",
        question: "你會怎麼做？",
        options: [
            { text: "A. [探究] 修復文字，想知道原本的故事。", next: "q5_1", type: "Ladder" },
            { text: "B. [謹慎] 可能是病毒，直接走開。", next: "q5_2", type: "Core" }
        ]
    },
    "q4_2": {
        text: "【Q4. 斷裂的裂谷】\n前方出現數據裂谷。周圍有橡皮鴨、輪胎等廢棄物。",
        question: "你會如何通過？",
        options: [
            { text: "A. [規劃] 繪製藍圖，搭建穩定橋樑。", next: "q5_1", type: "Ladder" },
            { text: "B. [直覺] 即興拼湊，黏在一起試試。", next: "q5_2", type: "Core" }
        ]
    },
    "q4_3": {
        text: "【Q4. 隱藏的檔案室】\n發現隱藏的檔案室，堆滿了開發日誌與廢案。",
        question: "你會？",
        options: [
            { text: "A. [分析] 掃描關鍵字，過濾垃圾資訊。", next: "q5_1", type: "Ladder" },
            { text: "B. [閱讀] 隨機拿起閱讀，拼湊開發者意圖。", next: "q5_2", type: "Core" }
        ]
    },
    "q4_4": {
        text: "【Q4. 凝結的房間】\n發現一個被完整保留的「玩家房間」，充滿 20 年前的生活感。",
        question: "你會？",
        options: [
            { text: "A. [搜索] 翻找櫃子，尋找隱藏道具。", next: "q5_1", type: "Ladder" },
            { text: "B. [體驗] 坐在電腦椅上，看著窗外風景。", next: "q5_2", type: "Core" }
        ]
    },
    // Q5 Final Nodes
    "q5_1": {
        text: "【終極二選一：梯子與境界】\n你理解了通往原創之路是由無數碎片堆疊而成，像是一把梯子。",
        question: "你會怎麼做？",
        options: [
            { text: "A. 意識到尋找無意義，拋棄梯子。", next: "end", type: "Deconstruct" },
            { text: "B. 決定沿著碎片攀爬，建構唯一解答。", next: "end", type: "Construct" }
        ]
    },
    "q5_2": {
        text: "【終極二選一：核心與世界】\n你找到了世界的核心電池。取走它，世界就會崩塌。",
        question: "你會？",
        options: [
            { text: "A. 拔出它。為了真實，毀滅夢境。", next: "end", type: "Destroy" },
            { text: "B. 放開手。為了回憶，保存現狀。", next: "end", type: "Preserve" }
        ]
    }
};

export const characters: CharactersData = {
    "ARCHAEOLOGIST": { name: "廢話考古學家", title: "The Nonsense Archaeologist", rarity: "★★★ 極稀有", item: "備份硬碟", desc: "嚴謹的紀錄者。你把過去的廢文當作史詩研究，守護著舊時代的記憶。" },
    "JANITOR": { name: "快取清潔工", title: "The Cache Janitor", rarity: "★★☆ 稀有", item: "強制刪除按鈕", desc: "秩序的維護者。你無法容忍混亂，在廢墟中建立新的規則。" },
    "COLLECTIVE": { name: "預設集合體", title: "The Default Collective", rarity: "★☆☆ 普及", item: "新手禮包", desc: "群體的連結者。你是所有初始角色的混合體，重視大家的和諧。" },
    "SURFER": { name: "超連結衝浪手", title: "The Hyperlink Surfer", rarity: "★★★ 極稀有", item: "藍色底線", desc: "創意的冒險家。你在隨機與混亂中尋找新的可能性。" },
    "WATCHER": { name: "虛空凝視者", title: "The Void Watcher", rarity: "★★★ 極稀有", item: "系統日誌", desc: "冷靜的觀察者。你漂浮在深淵，試圖看透程式碼背後的終極邏輯。" },
    "POET": { name: "亂碼詩人", title: "The Mojibake Poet", rarity: "★★★ 極稀有", item: "翻譯蒟蒻", desc: "深邃的解讀者。你能將無意義的亂碼轉化為動人的詩篇。" },
    "SPEEDRUNNER": { name: "速通跑者", title: "The Speedrunner", rarity: "★★★ 極稀有", item: "計時器", desc: "刺激的追求者。你只想用最快速度衝到終點，利用 Bug 來抄捷徑。" },
    "PUNKR": { name: "數位龐克樂手", title: "The Cyber PunkR", rarity: "★★★ 極稀有", item: "破音效果器", desc: "舞台的巨星。你把世界末日變成一場狂歡派對。" },
    "MODDER": { name: "模組改裝師", title: "The Modder", rarity: "★★★ 極稀有", item: "萬能扳手", desc: "實用的改造者。你只在乎如何把手邊的廢棄物改裝成超酷的道具。" },
    "WEAVER": { name: "碎片編織者", title: "The Fragment Weaver", rarity: "★★★ 極稀有", item: "數位膠水", desc: "感性的藝術家。你能欣賞崩壞之美，將不相關的碎片拼成全新的藝術。" },
    "DRIFTER": { name: "邊界漂流者", title: "The Hitbox Drifter", rarity: "★★★ 極稀有", item: "穿牆指令", desc: "邏輯的叛逆者。你不走尋常路，探索地圖邊界外的未知虛空。" },
    "MISSING": { name: "紫黑缺失者", title: "The Missing Texture", rarity: "★★☆ 稀有", item: "損壞的鏡子", desc: "迷惘的夢想家。失去了外表貼圖，卻擁有一顆敏感而細膩的心。" }
};

export function calculateCharacterID(scores: GameScores): string {
    const { Q2, Q3, Q4, Final } = scores;

    // Route A: E-T
    if (Q2 === "E" && Q3 === "T") {
        if (Q4 === "Ladder" && Final === "Deconstruct") return "JANITOR";
        if (Q4 === "Ladder" && Final === "Construct") return "SPEEDRUNNER";
        if (Q4 === "Core" && Final === "Destroy") return "JANITOR";
        if (Q4 === "Core" && Final === "Preserve") return "COLLECTIVE";
    }
    // Route B: E-F
    if (Q2 === "E" && Q3 === "F") {
        if (Q4 === "Ladder" && Final === "Deconstruct") return "SURFER";
        if (Q4 === "Ladder" && Final === "Construct") return "PUNKR";
        if (Q4 === "Core" && Final === "Destroy") return "MISSING";
        if (Q4 === "Core" && Final === "Preserve") return "COLLECTIVE";
    }
    // Route C: I-T
    if (Q2 === "I" && Q3 === "T") {
        if (Q4 === "Ladder" && Final === "Deconstruct") return "WATCHER";
        if (Q4 === "Ladder" && Final === "Construct") return "MODDER";
        if (Q4 === "Core" && Final === "Destroy") return "DRIFTER";
        if (Q4 === "Core" && Final === "Preserve") return "ARCHAEOLOGIST";
    }
    // Route D: I-F
    if (Q2 === "I" && Q3 === "F") {
        if (Q4 === "Ladder" && Final === "Deconstruct") return "MISSING";
        if (Q4 === "Ladder" && Final === "Construct") return "POET";
        if (Q4 === "Core" && Final === "Destroy") return "WEAVER";
        if (Q4 === "Core" && Final === "Preserve") return "COLLECTIVE";
    }
    return "COLLECTIVE"; // Fallback
}
