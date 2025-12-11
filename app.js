// 1
function lowerName(n){ return n.toLowerCase(); }
console.log(1, lowerName("HELLO"));

// 2
function shout(s){ return s.toUpperCase(); }
console.log(2, shout("hello"));

// 3
function countChars(s){ return s.length; }
console.log(3, countChars("hello"));

// 4
function firstChar(s){ return s.charAt(0); }
console.log(4, firstChar("Hello"));

// 5
function lastChar(s){ return s.charAt(s.length - 1); }
console.log(5, lastChar("Hello"));

// 6
function findApple(s){ return s.indexOf("apple"); }
console.log(6, findApple("I like apple juice"));

// 7
function firstWord(s){
    let i = s.indexOf(" ");
    return s.slice(0, i);
}
console.log(7, firstWord("Hello world"));

// 8
function replaceBad(s){ return s.replace("bad", "good"); }
console.log(8, replaceBad("This is bad"));

// 9
function replaceVowels(s){ return s.replaceAll(/[aeiou]/gi, "*"); }
console.log(9, replaceVowels("hello"));

// 10
function splitWords(s){ return s.split(" "); }
console.log(10, splitWords("Hello world here"));

// 11
function capFirst(w){ return w[0].toUpperCase() + w.slice(1); }
console.log(11, capFirst("hello"));

// 12
function secondWord(s){ return s.split(" ")[1]; }
console.log(12, secondWord("Hello world again"));

// 13
function censor(s){ return s.replaceAll("dumb", "****"); }
console.log(13, censor("you dumb boy"));

// 14
function countWords(s){ return s.split(" ").length; }
console.log(14, countWords("this is a test"));

// 15
function hasWord(s, w){ return s.indexOf(w) !== -1; }
console.log(15, hasWord("I have a cat", "cat"));

// 16
function getDomain(e){ return e.split("@")[1]; }
console.log(16, getDomain("john@mail.com"));

// 17
function reverseWords(s){ return s.split(" ").reverse().join(" "); }
console.log(17, reverseWords("I love coding"));

// 18
function isPalindrome(w){
    let r = w.toLowerCase().split("").reverse().join("");
    return r === w.toLowerCase();
}
console.log(18, isPalindrome("Level"));

// 19
function countVowels(s){
    let c = 0;
    let v = "aeiou";
    for(let i=0; i<s.length; i++){
        if(v.includes(s[i].toLowerCase())) c++;
    }
    return c;
}
console.log(19, countVowels("hello"));

// 20
function altCase(s){
    let out = "";
    for(let i=0;i<s.length;i++){
        out += i%2===0 ? s[i].toUpperCase() : s[i].toLowerCase();
    }
    return out;
}
console.log(20, altCase("hello"));

// 21
function titleCase(s){
    return s.split(" ").map(w=>capFirst(w)).join(" ");
}
console.log(21, titleCase("hello world"));

// 22
function removeDup(s){
    return [...new Set(s.toLowerCase().split(" "))].join(" ");
}
console.log(22, removeDup("hello Hello world world"));

// 23
function maskEmail(e){
    let parts = e.split("@");
    return parts[0][0] + "***@" + parts[1];
}
console.log(23, maskEmail("john.doe@gmail.com"));

// 24
function mostFrequent(s){
    let w = s.toLowerCase().split(" ");
    let counts = {};
    let max = "";
    let maxCount = 0;
    
    w.forEach(x=>{
        counts[x] = (counts[x]||0) + 1;
        if(counts[x] > maxCount){
            maxCount = counts[x];
            max = x;
        }
    });
    return max;
}
console.log(24, mostFrequent("apple banana apple orange apple"));

// 25
function abbrev(n){
    return n.split(" ").map(x=>x[0].toUpperCase() + ".").join("");
}
console.log(25, abbrev("John Ronald Reuel Tolkien"));

// 26
function anagram(a,b){
    return a.toLowerCase().split("").sort().join("") === 
           b.toLowerCase().split("").sort().join("");
}
console.log(26, anagram("listen","silent"));

// 27
function allPos(text, word){
    let res = [];
    let t = text.toLowerCase();
    let w = word.toLowerCase();
    let p = t.indexOf(w);

    while(p !== -1){
        res.push(p);
        p = t.indexOf(w, p+1);
    }
    return res;
}
console.log(27, allPos("cat dog cat tiger cat", "cat"));

// 28
function reverseEach(s){
    return s.split(" ").map(w=>w.split("").reverse().join("")).join(" ");
}
console.log(28, reverseEach("hello world"));

// 29
function wrap(s, limit){
    let words = s.split(" ");
    let line = "";
    let out = [];
    
    for(let w of words){
        if((line + w).length > limit){
            out.push(line.trim());
            line = "";
        }
        line += w + " ";
    }
    if(line) out.push(line.trim());
    return out;
}
console.log(29, wrap("this is a long sentence", 10));

// 30
function longest(s){
    let w = s.split(" ");
    return w.reduce((a,b)=> b.length > a.length ? b : a);
}
console.log(30, longest("I love programming in javascript"));

// 31
function censorList(text, list){
    list.forEach(w=>{
        text = text.replaceAll(w, "***");
    });
    return text;
}
console.log(31, censorList("you dumb stupid kid", ["dumb","stupid"]));

// 32
function repeatChars(s){
    let map = {}, out = [];
    for(let c of s){ map[c] = (map[c]||0)+1; }
    for(let k in map){ if(map[k] > 1) out.push(k); }
    return out;
}
console.log(32, repeatChars("aaabbccd"));

// 33
function compress(s){
    let out="", count=1;
    for(let i=0;i<s.length;i++){
        if(s[i] === s[i+1]) count++;
        else{
            out += s[i] + count;
            count = 1;
        }
    }
    return out;
}
console.log(33, compress("aaabbbcc"));

// 34
function passStrong(p){
    return p.length>=8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p);
}
console.log(34, passStrong("Abc12345"));

// 35
function hashtags(t){
    return t.split(" ").filter(w=>w.startsWith("#"));
}
console.log(35, hashtags("hello #love #coding world"));

// 36
function camel(s){
    let w = s.split(" ");
    return w[0].toLowerCase() + w.slice(1).map(x=>capFirst(x)).join("");
}
console.log(36, camel("make this camel case"));

// 37
function csv(s){ return s.split(","); }
console.log(37, csv("name,age,email"));

// 38
function customSplit(s){
    let out=[], word="";
    for(let c of s){
        if(c===" "){ out.push(word); word=""; }
        else word+=c;
    }
    if(word) out.push(word);
    return out;
}
console.log(38, customSplit("hello world again"));

// 39
function phone(n){
    return `(${n.slice(0,3)}) ${n.slice(3,6)}-${n.slice(6)}`;
}
console.log(39, phone("1234567890"));

// 40
function palWords(s){
    return s.split(" ").filter(w=>isPalindrome(w));
}
console.log(40, palWords("madam is at civic center"));
