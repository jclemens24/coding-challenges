function commonCharCount(s1: string, s2: string): number {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!');
  }
  return s2.replace(/[^!]/g, '').length;
}

commonCharCount('axyc', 'axyziec');
