function repeatedString(s, n) {
    const stringSize = s.length;
    const a = Array.from(s).filter((a) => a == 'a').length;
    const repeat = Math.floor(n / stringSize);
    const left = n - (repeat * stringSize);
    const rest = Array.from(s).filter((a, i) => a == 'a' && i < left).length;
    const result = repeat * a + rest;
    
    return result;
}