const distance = (a, b) => {
	if ((typeof(a)=='String'||typeof(a)=='string')&&(typeof(b)=='String'||typeof(b)=='string')){
		if(a.length!=0&&b.length!=0){
			if (!a.length) return b.length;
            if (!b.length) return a.length;
            const arr = [];
            for (let i = 0; i <= a.length; i++) {
             arr[i] = [i];
             for (let j = 1; j <= b.length; j++) {
               arr[i][j] =  i === 0 ? j
                  : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (b[j - 1] === a[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[a.length][b.length];
        }else
		  return 0;
	}else
	throw new TypeError('InvalidType')
}
module.exports.distance = distance