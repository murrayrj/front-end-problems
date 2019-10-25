const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = file =>
  new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) reject(new Error('Could not find file'));
      resolve(data);
    });
  });

const writeFilePromise = (file, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(new Error('Could not write file'));
      resolve('Success!');
    });
  });

const getDogPicture = async () => {
  try {
    const breed = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed ${breed}`);

    const dogImageOne = superagent.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const dogImageTwo = superagent.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const dogImageThree = superagent.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const allDogImages = await Promise.all([
      dogImageOne,
      dogImageTwo,
      dogImageThree,
    ]);
    const dogImages = allDogImages.map(el => el.body.message);
    
    await writeFilePromise(`${breed}-img.txt`, dogImages.join('\n'));
    console.log('Random dog image saved to file');
  } catch (error) {
    console.log(error);
    throw error;
  }
  return '2: Getting 🐶';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const gettingDogPics = await getDogPicture();
    console.log(gettingDogPics);
    console.log('3: Done getting dog pics!');
  } catch (error) {
    console.log(`💥💥💥 ${error} 💥💥💥`);
  }
})();

/*
console.log('1: Will get dog pics!');
getDogPicture()
  .then(gettingDogPics => {
    console.log(gettingDogPics);
    console.log('3: Done getting dog pics!');
  })
  .catch(error => {
    console.log(`💥💥💥 ${error} 💥💥💥`);
  });
*/

/*
readFilePromise(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(result => {
    console.log(result.body.message);
    return writeFilePromise('dog-img.txt', result.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file');
  })
  .catch(error => {
    console.log(error);
  });
*/
