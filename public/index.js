const timeframeButtons = Array.from(document.querySelectorAll('.time-frame-btn'));
const optionsButtons = Array.from(document.querySelectorAll('.options-btn'));
//elements that will be modified with the data from the json file: the previous data & the actual hrs
const hoursWork = document.querySelector('#hrs-work');
const hoursPlay = document.querySelector('#hrs-play');
const hoursStudy = document.querySelector('#hrs-study');
const hoursExercise = document.querySelector('#hrs-exercise');
const hoursSocial = document.querySelector('#hrs-social');
const hoursSelfCare = document.querySelector('#hrs-selfcare');
const prevWork = document.querySelector('#prev-work');
const prevPlay = document.querySelector('#prev-play');
const prevStudy = document.querySelector('#prev-study');
const prevExercise = document.querySelector('#prev-exercise');
const prevSocial = document.querySelector('#prev-social');
const prevSelfCare = document.querySelector('#prev-selfcare');
/* yep, I realized later that the title was also given by the json...  */

//AUXILIARY VARIABLES

let selectedTimeframe;
let previous; /* depends on time frame given by button.value*/


async function loadData() {
  return (await fetch('./data.json')).json();
}

//FUNCTIONS

const updateData = async (timeFrame) => {
  let data = [];
  try {
    data = await loadData();
    hoursWork.innerHTML = data[0].timeframes[timeFrame].current + 'hrs';
    prevWork.innerHTML = previous + ' - ' + data[0].timeframes[timeFrame].previous + 'hrs';
    hoursPlay.innerHTML = data[1].timeframes[timeFrame].current + 'hrs';
    prevPlay.innerHTML = previous + ' - ' + data[1].timeframes[timeFrame].previous + 'hrs';
    hoursStudy.innerHTML = data[2].timeframes[timeFrame].current + 'hrs';
    prevStudy.innerHTML = previous + ' - ' + data[2].timeframes[timeFrame].previous + 'hrs';
    hoursExercise.innerHTML = data[3].timeframes[timeFrame].current + 'hrs';
    prevExercise.innerHTML = previous + ' - ' + data[3].timeframes[timeFrame].previous + 'hrs';
    hoursSocial.innerHTML = data[4].timeframes[timeFrame].current + 'hrs';
    prevSocial.innerHTML = previous + ' - ' + data[4].timeframes[timeFrame].previous + 'hrs';
    hoursSelfCare.innerHTML = data[5].timeframes[timeFrame].current + 'hrs';
    prevSelfCare.innerHTML = previous + ' - ' + data[5].timeframes[timeFrame].previous + 'hrs';
  } catch (e) {
    console.log('Error while fetching the data from the json file');
    console.log(e);
  }
  
}

const resetSelected = () => {
  timeframeButtons.forEach(element => {
    element.classList.remove('btn-selected');
  });
};

const setPreviousText = (timeFrame) => {
  if (timeFrame === 'daily') { previous = 'Yesterday' };
  if (timeFrame === 'weekly') { previous = 'Last Week' };
  if (timeFrame === 'monthly') { previous = 'Last Month' };
}

const timeFrameSelected = (button) => {
  resetSelected();
  button.target.classList.add('btn-selected');
  setPreviousText(button.target.value);
  updateData(button.target.value);
};

const addCardStyle = (button) => {
  button.target.closest('.card-activity').classList.add('background');
};

const delCardStyle = (button) => {
  button.target.closest('.card-activity').classList.remove('background');
};

//EVENT LISTENERS

timeframeButtons.map((button) => {
  button.addEventListener('click', timeFrameSelected);
});

/* when you hover the ... the card loses its hover highlight */
optionsButtons.map((button) => {
  button.addEventListener('mouseover', addCardStyle);
  button.addEventListener('mouseout', delCardStyle);
});


setPreviousText('weekly');
updateData('weekly');