function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
    	let randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 500);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await getRandomNumber();
  console.log(result);
  
}

asyncCall();
