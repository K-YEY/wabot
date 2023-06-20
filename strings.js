const en = `https://youtube.com/@omarabdelrahimofficial
اول واحد عمر عبد الرحيم دا ياسيدي هتعرف الصح وتخليه جواك هيقولك ع كلمات نطقها الصح وشويه تركات كدا 
________________
https://youtube.com/@ZAmericanEnglish
دا هيعلمك الانجليزي من الصفر وفيه مراحل كمان بس امريكي مشهورة طبعا القناه 
_______________
https://www.duolingo.com/
الموقع دا بيعلمك اي لغه انت عاوزه منها الانجليزي واسباني وصيني وليله كبيره ساعتك`;

const alxContent = `السلام عليكم يارب تكونوا بخير
بترتيب
ده محتوي اول شهر في منحة ALX
 البوست ده لدفعة فبراير وما بعدها 
للناس اللي عايزة تجهز عشان تعرف تعدي 80 %
في أول شهر
حاولت ادور عل مصادر ناطقة العربية 
- <<<<<Linux>>>>>
https://youtube.com/playlist?list=PLs97GbUOC82mPezSNRYO-7zzk66_sAZHU

https://youtu.be/ROjZy1WbCIA

https://youtu.be/pYdB2uG9pnE

https://youtu.be/ZtqBQ68cfJc

https://youtube.com/playlist?list=PLT98CRl2KxKHKd_tH3ssq0HPrThx2hESW

- <<<<shell navigation >>>

https://youtube.com/playlist?list=PLhz-PUTwNBovCmClrL_hucO31WCTWxg_k

 - <<<<Vim>>>>

https://youtu.be/uWgBfnwAJcs

https://youtu.be/RZ4p-saaQkc

- <<<<Emacs>>>>
https://youtube.com/playlist?list=PLjM1KU23LQxlEP9rRHdOK3ZpoD5H1ywWn

- <<<<<Git and GitHub >>>>>
- المهندس أسامة الزيرو 
https://youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF

https://youtu.be/fDkR0TDR9dI

https://youtu.be/RGOj5yH7evk

- (((C programming language))))
لغاية ال pointers

-  المهندس يوسف شوقي

https://youtube.com/playlist?list=PLVp0hvzMSQHTlz2CNlbhq-E6WYYujm7b8
- Malan مقدم كورس CS50 in Harconstd university 
https://youtu.be/ix5jPkxsr7M
- قناة المهندس عمار محمد

https://youtube.com/@amarmohamed7399
------
لو انت حلو ف الانجليزي ممكن تاخد كورس c ف ٤ ساعات 
https://youtu.be/KJgsSFOSQv0
-----------
https://almdrasa.com/tracks/programming-foundations/courses/git-github/
موقع مدرسة فيه كورسات كويسه ابقو بصو بصه ♥
-----------
كتب المنحه
https://drive.google.com/drive/folders/1s8SzOifKu8cq9Jk2BlPzMDVJAlRGM-u8

------
بلاي ليست فيها VIM GIT SHELL C (ALX-23) شبه كامله
https://youtube.com/playlist?list=PL2c_bq7IOfz53mYl5bTfAo0es4mEPWa9s
------------------

*ALX-Resources*
https://alx-feb-resources.notion.site/ALX-Resources-1660799bece74b2f9afb1bcc24dff313

دمتم موفقين 🤍`;

const alxCo18 = `أصدقائي المؤاجلين برجاء الدخول الى هذا الجروب https://chat.whatsapp.com/LK54CJZHDIk7hNY0JZhbCo
والخروج من هنا `;

const notion = `https://alxco17.notion.site/75f43668a4254c88a3a856fc8f75defe?v=cfa592b3dd4544a7a3727d764c4e2516`;

const alxLink = `https://chat.whatsapp.com/J3dKAPQIJpfHdHfyVJiQiH`;

const alxTeam = `https://youtu.be/IeRf03LnoEE`;
const alxhelp = `EN => كورسات انجليش
ALX_CONTENT =>محتويات ALX
CO18 => لينك جروب COHORT 18 اسكندرية
#group => لينك جروب اسكندرية 17
team=> ازي تدخل تيمك ف slack
notion => بنزل عليها حاجات مهمه
#time<space> time GMT => لحساب فرق التوقيت بين مصر و غرينتش `;

const hi = `اكتب ساعدني و`;
const botName = ["فتحي", "نايت", "Night", "Leo", "ALX", "بوت", "حنفي", "ليو"];
//end
const cache = new Map();

cache.set("posts:1", { id: "EN", content: en });

cache.set("posts:2", { id: "ALX_CONTENT", content: alxContent });
cache.set("posts:3", { id: "content", content: alxContent });
cache.set("posts:4", { id: "دراسة", content: alxContent });

cache.set("posts:5", { id: "CO18", content: alxCo18 });
cache.set("posts:6", { id: "#group", content: alxLink });
cache.set("posts:7", { id: "لينك الجروب", content: alxLink });
cache.set("posts:8", { id: "team", content: alxTeam });
cache.set("posts:9", { id: "notion", content: notion });

//help
cache.set("posts:10", { id: "#alxhelp", content: alxhelp });
cache.set("posts:11", { id: "help", content: alxhelp });
cache.set("posts:12", { id: "ساعدني", content: alxhelp });
const everyone = ["نادي عليهم", "!everyone", "ليو نادي"];
const num = ["201159261532@c.us"];
const thx = ["شكرا ليو", "شكرا فتحي", "شكرا حنفي", "شكرا نايت", "شكرا يا ليو"];

//Game
const nextGame = ["next-game", "skip-game"];
const game = [
  { name: "النوم في العسل", emoji: "🍯❌😴" },
  { name: "الأرض", emoji: "🌍🌱👨‍🌾" },
  { name: "السلم والثعبان", emoji: "🕊️🐍" },
  { name: "البحث عن حرامي الساعات", emoji: "🔍🕵️‍♂️💼⌚" },
  { name: "المصير", emoji: "⚖️👥💔" },
  { name: "العالمي", emoji: "🇪🇬 ⚽🏆" },
  { name: "الجزيرة", emoji: "🏝️" },
  { name: "الخطابة", emoji: "📜🗣️💍" },
  { name: "الجوكر", emoji: "🤡🃏" },
  { name: "السفارة في العمارة", emoji: "🏢❌🎌" },
  { name: "الكيف", emoji: "🌿🌬️💊" },
  { name: "الفلوس", emoji: "💸💼" },
  { name: "الممر", emoji: "🪖⚔️⛵" },
  { name: "الممر", emoji: "🪖⚔️⛵" },
  { name: "عيار ناري", emoji: "🔫🔥" },
  { name: "البعض لا يذهب للمأذون مرتين", emoji: "👰🤵❌❌" },
  { name: "الفيل الأزرق", emoji: "🐘🔵😱" },
  { name: "بتوقيت القاهرة", emoji: "⌚🗺️🇪🇬" },
  { name: "الديزل", emoji: "🚗⛽🛣️" },
  { name: "بنك الحظ", emoji: "💰🏦🎲" },
  { name: "تراب الماس", emoji: "💎🧹" },
  { name: "لص بغداد", emoji: "👳‍♂️🕌💰" },
  { name: "up", emoji: "👴👦🐶🗺️🏡🎈" },
  { name: "lion king", emoji: "🦁👑" },
  { name: "cars", emoji: "🏁🚥🚗🏎️🚓" },
  { name: "النوم في العسل", emoji: "🍯❌😴" },

];

const stopGame = ["stop-game", "sgame"];

module.exports = {
  hi,
  botName,
  cache,
  everyone,
  num,
  thx,
  nextGame,
  game,
  stopGame,
};
