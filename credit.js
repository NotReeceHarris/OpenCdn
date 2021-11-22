function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {


    await sleep(200000);
    console.log('Developed by Reece Harris (https://github.com/NotReeceHarris)');

}

demo();
