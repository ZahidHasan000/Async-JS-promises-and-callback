/*  const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result);   */

/*  const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log('Timer Done!');
  }, 0);
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);   */


/*  const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);   */


/*   const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {

      }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);   */


/*   const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {
        reject(error);
      }, opts);
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch(err => {
      console.log(err);
      return 'On we go...';
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);    */


/*  const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {
        reject(error);
      }, opts);
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData); 
 
}

button.addEventListener('click', trackUserHandler);   */


/*   const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {
        reject(error);
      }, opts);
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);

}

button.addEventListener('click', trackUserHandler);  */


/*   const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {
        reject(error);
      }, opts);
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);   */


const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    },
      error => {
        reject(error);
      }, opts);
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');  //parameter takes an object/array/number
    }, duration);
  });
  return promise;
};
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);

  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});