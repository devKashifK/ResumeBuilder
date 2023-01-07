import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Form",
  initialState: {
    links : false,
    family : true,
    profilePic : true,
    hobbies : true,
    projects : false,
    keyAchieveMents : false,
    experince : false,
    technicalSkills : false
  },
  reducers: {
    changeLink: (state, action) => {
      state.links = true;
    },
    changeFamily: (state, action) => {
      state.family = false;
    },
    changeProfile: (state, action) => {
      state.profilePic = false;
    },
    changeHobbies: (state, action) => {
      state.hobbies = false;
    },
    changeProjects: (state, action) => {
      state.projects = true;
    },
     changeAchievements: (state, action) => {
     
      state.keyAchieveMents = true;
      
    },
     changeExperince: (state, action) => {
      state.experince = true;
    },
    changeTechnicalSKills: (state, action) => {
      state.technicalSkills = true;
    },
  },
});

export default userSlice;

export const userActions = userSlice.actions;
