const sumar = (a, b) => {
    return new Promise((resolve, reject) =>{
        if(a > 0 && b > 0){
            resolve(a + b);
        }else{
            reject('No se puede sumar');
        }
    })
}

let numberRes = 0;

const resultado = sumar(20, 20).then(async (res) => {
    await document.write(res);
    })
    .catch((err) => {return err});


const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  document.write(JSON.stringify(a));
};

