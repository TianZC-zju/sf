type  aa = 'aa' | 'bb';
type  cc = 'cc' | 'bb';

type kk<T,U> = T extends U ? T : never
type pp<T,U> = T extends U ? never : T

const a: kk<aa, cc>= 'bb'
const c: pp<aa, cc>= 'aa'
