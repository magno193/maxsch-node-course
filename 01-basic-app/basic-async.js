const loadTimer = (time) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('--Completo--')
    }, time || 1000);
  });
  return promise;
};

loadTimer(2000).then((c) =>
  console.log('Assincrono', c)
);
