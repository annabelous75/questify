// userSelectors.js
const getQuest = (state) => state.userData.tasks;
const userName = (state) => (state.userData.user ? state.userData.user.nickname : 'user undefined');
const userId = (state) => (state.userData && state.userData.user ? state.userData.user._id : 'user undefined');

const getTodayList = (state) => state.userData && state.userData.today ? state.userData.today : [];
const getTomorrowList = (state) => state.userData && state.userData.tomorrow ? state.userData.tomorrow : [];
const getAllTheRestList = (state) => state.userData && state.userData.allTheRest ? state.userData.allTheRest : [];
const getDoneList = (state) => state.userData && state.userData.done ? state.userData.done : [];
const getAddMode = (state) => state.userData && state.userData.addMode ? state.userData.addMode : [];
const getExit = (state) => state.userData && state.userData.exit ? state.userData.exit : null;
export default {
  getQuest,
  userName,
  userId,
  getTodayList,
  getTomorrowList,
  getAllTheRestList,
  getDoneList,
  getAddMode,
  getExit
};
