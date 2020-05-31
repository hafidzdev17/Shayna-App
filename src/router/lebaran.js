const lebaran = {
    Selamat: 'Taqoballahu',
    Idul: 'Minna',
    Fitri: 'Wa Minkum',
};

const mudik = ['Mohon', 'Maaf', 'Lahir', 'Dan', 'Batin'].join(' ');

const KeyLebaran = Object.keys(lebaran).reduce((acc, curr) => {
    return `${acc} ${curr}`
});

const IsiLebaran = Object.values(lebaran).reduce((acc, curr) => {
    return `${acc} ${curr}`
});

const LontongKetupat = `${KeyLebaran} 1441 Hijriah. ${IsiLebaran}. ${mudik}.`;

console.log(LontongKetupat);

// Selamat Idul Fitri 1441 Hijriah, Taqobballahu Minna Wa Minkum. Mohon Maaf Lahir Batin