import React, { createRef } from "react";
import styles from "./Form.module.css";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../Store/form-slice";
import options from "./data";
import { ResumeLive01 } from "../Pages/Resume/Resume01";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../Store/user-info";
import { Resume02Live } from "../Pages/Resume/Resume02";
import Resume03Live from "../Pages/Resume/Resume03/Resume03Live";





export default function Form() {
  const userAdditionalData = useSelector((state) => state.user);
  const resume = useSelector((state) => state.selected.resume);

  const [formNo, setFormNo] = useState(0);
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState();

  const [skills, setSkills] = useState([{ skills: "" }, { skills: "" }]);
  const [education, setEducation] = useState([
    { education: "" },
    { education: "" },
  ]);
  const [socialLinks, setSocialLinks] = useState([{ link: "" }]);
  const [experince, setExperince] = useState([
    { experince: "" },
    { experince: "" },
  ]);
  const [projects, setProjects] = useState([
    { projects: "" },
    { projects: "" },
  ]);
  const [achievement, setAchievement] = useState([
    { experince: "" },
    { experince: "" },
  ]);
  const [hobby, setHobby] = useState([{ hobby: "" }, { hobby: "" }]);
  const [language, setLanguage] = useState([
    { language: "" },
    { language: "" },
  ]);
  const [skillSet, setSkillSet] = useState([
    { skillSet: "" },
    { skillSet: "" },
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const upload = createRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSkillSetAdd = () => {
    setSkillSet([...skillSet, { skillSet: "" }]);
  };
  const handleSkillSet = (index) => {
    const list = [...skillSet];
    list.splice(index, 1);
    setSkillSet(list);
  };
  const handleExperinceAdd = () => {
    setExperince([...experince, { experince: "" }]);
  };
  const handleExperince = (index) => {
    const list = [...experince];
    list.splice(index, 1);
    setExperince(list);
  };
  const handleAchievementAdd = () => {
    setAchievement([...achievement, { achievement: "" }]);
  };
  const handleAchievement = (index) => {
    const list = [...achievement];
    list.splice(index, 1);
    setAchievement(list);
  };
  const handleProjectsAdd = () => {
    setProjects([...projects, { projects: "" }]);
  };
  const handleProjects = (index) => {
    const list = [...projects];
    list.splice(index, 1);
    setProjects(list);
  };

  const handleAdd = () => {
    setSkills([...skills, { skills: "" }]);
  };
  const handleRemove = (index) => {
    const list = [...skills];
    list.splice(index, 1);
    setSkills(list);
  };
  const handleHobbyAdd = () => {
    setHobby([...hobby, { hobby: "" }]);
  };
  const handleSocialAdd = () => {
    setSocialLinks([...socialLinks, { link: "" }]);
  };
  const handleLanguageAdd = () => {
    setLanguage([...language, { language: "" }]);
  };
  const handleHobbyRemove = (index) => {
    const list = [...hobby];
    list.splice(index, 1);
    setHobby(list);
  };
  const handleLanguageRemove = (index) => {
    const list = [...language];
    list.splice(index, 1);
    setLanguage(list);
  };
  const handleEduAdd = () => {
    setEducation([...education, { education: "" }]);
  };

  const handleEduRemove = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(formActions.userData(formData));
    navigate("/download");
  };
  const uploadNewPhoto = (e) => {
    upload.current.click();
    URL.createObjectURL(e.target.files[0]);
  };
  const uploadClick = (e) => {
    if (e.target.files[0].size > 1048576) {
      alert("upload failed, file is too big");
      return;
    }
    const img = URL.createObjectURL(e.target.files[0]);
    setImg(img);
    dispatch(formActions.userImage(img));
  };

  return (
    <div className={styles.preview}>
      <div className={styles.resumePreview}>
        {resume === 1 ? <ResumeLive01 data={formData} img={img} /> : ""}
        {resume === 0 ? <Resume02Live data={formData} img={img} /> : ""}
        {resume === 2 ? <Resume03Live data = {formData} img ={img}/> : ""}
        
      
      </div>
      <div className={styles.makeResume}>
        <div className={styles.accordation}>
          <div
            className={`${styles.accordationPersonalInfo} ${styles.accordationBox}`}
            onClick={() => setFormNo(0)}
          >
            Info
          </div>
          <div
            className={`${styles.accordationContact} ${styles.accordationBox}`}
            onClick={() => setFormNo(1)}
          >
            Traits
          </div>
          <div
            className={`${styles.accordationProjects} ${styles.accordationBox}`}
            onClick={() => setFormNo(2)}
          >
            Education
          </div>
          <div
            className={`${styles.accordationEducation} ${styles.accordationBox}`}
            onClick={() => setFormNo(3)}
          >
            Projects
          </div>
        </div>
        <div
          className={`${styles.resumeForm1} ${formNo === 0 ? styles.show : ""}`}
        >
          <div className={styles.inputBox}>
            <input
              type="text"
              required="required"
              name="name"
              onChange={handleChange}
            />
            <span>Your Name</span>
          </div>
          {userAdditionalData.family ? (
            <>
              <div className={styles.addMoreSocialLinks}>
                <span>Parents Details</span>
                <div className={styles.btnGroup}>
                  <span
                    className={styles.MoreSocialLinks}
                    onClick={() => dispatch(userActions.changeFamily())}
                  >
                    No{" "}
                  </span>
                </div>
              </div>
              <div className={styles.colGroup}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    required="required"
                    name="fName"
                    onChange={handleChange}
                  />
                  <span>Your Father's Name</span>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    required="required"
                    name="mName"
                    onChange={handleChange}
                  />
                  <span>Your Mother's Name</span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          <div className={styles.inputBox}>
            <input
              type="text"
              required="required"
              name="address"
              onChange={handleChange}
            />
            <span>Your Address</span>
          </div>
          <div className={styles.colGroup}>
            <div className={styles.inputBox}>
              <input
                type="text"
                required="required"
                name="number"
                onChange={handleChange}
              />
              <span>Your Number</span>
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                required="required"
                name="email"
                onChange={handleChange}
              />
              <span>Your E-mail</span>
            </div>
          </div>
          <div className={styles.inputBox}>
            <textarea
              type="text"
              required="required"
              name="objective"
              onChange={handleChange}
            />
            <span>Carrer Objective</span>
          </div>
          <div className={styles.Skills}>
            {userAdditionalData.links === false ? (
              <div className={styles.addMoreSocialLinks}>
                <span>Do You want To Add Social Links</span>
                <div className={styles.btnGroup}>
                  <span
                    className={styles.MoreSocialLinks}
                    onClick={() => dispatch(userActions.changeLink())}
                  >
                    Yes{" "}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}

            {userAdditionalData.links ? (
              <div className={styles.addMoreSocialLinks}>
                <span>Do You want To Add More Social Links</span>
                <div className={styles.btnGroup}>
                  {" "}
                  <span
                    className={styles.MoreSocialLinks}
                    onClick={handleSocialAdd}
                  >
                    Yes{" "}
                  </span>
                  <span
                    className={styles.MoreSocialLinks}
                    onClick={() => dispatch(userActions.changeLink())}
                  >
                    No{" "}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {socialLinks.map((item, index) => {
              return (
                <div className={styles.colGroup}>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      required="required"
                      name={`link${index}`}
                      onChange={handleChange}
                    />
                    <span>Link</span>
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      required="required"
                      name={`label${index}`}
                      onChange={handleChange}
                    />
                    <span>Label</span>
                  </div>
                </div>
              );
            })}
          </div>
          {userAdditionalData.profilePic ? (
            <div className={styles.addMoreSocialLinks}>
              <span>Profile Picture</span>
              <div className={styles.btnGroup}>
                <div className={styles.img}>
                  <div className="imgInput">
                    <span
                      className={styles.MoreSocialLinks}
                      onClick={() => uploadNewPhoto("UploadNewPhoto")}
                    >
                      Upload
                    </span>
                    <input
                      type="file"
                      id="uploadFile"
                      ref={upload}
                      onChange={(e) => uploadClick(e)}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeProfile())}
                >
                  No{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles.resumeForm2} ${formNo === 1 ? styles.show : ""}`}
        >
          <div className={styles.Skills}>
            <div className={styles.textContainer}>
              <h4>Your Skills</h4>
            </div>
            {skills.map((item, index) => {
              return (
                <div
                  className={`${styles.inputBox} ${styles.addOption}`}
                  key={index}
                >
                  <input
                    type="text"
                    required="required"
                    name={`skill${index}`}
                    onChange={handleChange}
                  />
                  <span>Add Your Skills</span>
                  {skills.length - 1 === index && skills.length < 6 ? (
                    <div className={styles.addIcon} onClick={handleAdd}>
                      <MdOutlineAdd />{" "}
                    </div>
                  ) : (
                    <div
                      className={styles.addIcon}
                      onClick={() => handleRemove(index)}
                    >
                      <MdOutlineRemove />{" "}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {userAdditionalData.hobbies ? (
            <div className={styles.addMoreSocialLinks}>
              <span>Do You want To Add Hobby</span>
              <div className={styles.btnGroup}>
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeHobbies())}
                >
                  No{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className={styles.Skills}>
            {userAdditionalData.hobbies
              ? hobby.map((item, index) => {
                  return (
                    <div
                      className={`${styles.inputBox} ${styles.addOption}`}
                      key={index}
                    >
                      <input
                        name={`hobby${index}`}
                        type="text"
                        required="required"
                        id="Hobby1"
                        list="hobby1"
                        onChange={handleChange}
                      />
                      <span>Add Hobby</span>
                      {hobby.length - 1 === index && hobby.length < 6 ? (
                        <div
                          className={styles.addIcon}
                          onClick={handleHobbyAdd}
                        >
                          <MdOutlineAdd />{" "}
                        </div>
                      ) : (
                        <div
                          className={styles.addIcon}
                          onClick={() => handleHobbyRemove(index)}
                        >
                          <MdOutlineRemove />{" "}
                        </div>
                      )}
                    </div>
                  );
                })
              : ""}

            <div className={styles.Skills}>
              <div className={styles.textContainer}>
                <h4>Languages You Know</h4>
              </div>
              {language.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <input
                      name={`language${index}`}
                      onChange={handleChange}
                      type="text"
                      required="required"
                      id="langauge1"
                      list="langauge"
                    />
                    <span>Add Language</span>
                    {language.length - 1 === index && language.length < 6 ? (
                      <div
                        className={styles.addIcon}
                        onClick={handleLanguageAdd}
                      >
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleLanguageRemove(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
              <datalist id="langauge">
                <option value="English"></option>
                <option value=" Hindi"></option>
                <option value=" Bengali"></option>
                <option value="Marathi"></option>
                <option value="Telugu"></option>
                <option value="Tamil"></option>
                <option value="Urdu"></option>
                <option value="Gujarati"></option>
                <option value="Kannada"></option>
                <option value="Malayalam"></option>
                <option value="Odia"></option>
                <option value="Punjabi"></option>
                <option value="Assames"></option>
                <option value="Maithili"></option>
              </datalist>
            </div>

            <datalist id="hobby1">
              {options.map((item) => {
                return <option value={item.name} key={item.id}></option>;
              })}
            </datalist>
          </div>
        </div>
        <div
          className={`${styles.resumeForm3} ${formNo === 2 ? styles.show : ""}`}
        >
          <div className="edu">
            <h3 className={styles.middle}>Education Qualification</h3>

            <div className={styles.Skills}>
              {education.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <textarea
                      type="text"
                      id="edu1"
                      required="required"
                      name={`education${index}`}
                      onChange={handleChange}
                    />
                    <span>Add Your Education</span>
                    {education.length - 1 === index && education.length < 6 ? (
                      <div className={styles.addIcon} onClick={handleEduAdd}>
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleEduRemove(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {userAdditionalData.technicalSkills === false ? (
            <div className={styles.addMoreSocialLinks}>
              <span>Add Technical SKills</span>
              <div className={styles.btnGroup}>
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeTechnicalSKills())}
                >
                  Yes{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          {userAdditionalData.technicalSkills ? (
            <div className={styles.Skills}>
              <h3 className={styles.middle}>Technical Skills</h3>
              {skillSet.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <textarea
                      type="text"
                      id="edu1"
                      required="required"
                      name={`tc${index}`}
                      onChange={handleChange}
                    />
                    <span>Skill</span>
                    {skillSet.length - 1 === index && skillSet.length < 6 ? (
                      <div
                        className={styles.addIcon}
                        onClick={handleSkillSetAdd}
                      >
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleSkillSet(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {userAdditionalData.experince === false ? (
            <div className={styles.addMoreSocialLinks}>
              <span>Do You want To Add Experince</span>
              <div className={styles.btnGroup}>
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeExperince())}
                >
                  Yes{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          {userAdditionalData.experince ? (
            <div className={styles.Skills}>
              <h3 className={styles.middle}>Experince</h3>
              {experince.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <textarea
                      type="text"
                      id="edu1"
                      required="required"
                      name={`experince${index}`}
                      onChange={handleChange}
                    />
                    <span>Add Your Experince</span>
                    {experince.length - 1 === index && experince.length < 6 ? (
                      <div
                        className={styles.addIcon}
                        onClick={handleExperinceAdd}
                      >
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleExperince(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles.resumeForm4} ${formNo === 3 ? styles.show : ""}`}
        >
          <div className={styles.addMoreSocialLinks}>
            <span>Add</span>
            <div className={styles.btnGroup}>
              {userAdditionalData.keyAchieveMents ? (
                ""
              ) : (
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeProjects())}
                >
                  Projects{" "}
                </span>
              )}
              {userAdditionalData.projects ? (
                ""
              ) : (
                <span
                  className={styles.MoreSocialLinks}
                  onClick={() => dispatch(userActions.changeAchievements())}
                >
                  Achievements{" "}
                </span>
              )}
            </div>
          </div>
          {userAdditionalData.keyAchieveMents ? (
            <div className={styles.Skills}>
              <h3 className={styles.middle}>Achievement</h3>
              {achievement.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <textarea
                      type="text"
                      id="edu1"
                      required="required"
                      name={`achievement${index}`}
                      onChange={handleChange}
                    />
                    <span>Add Your achievement</span>
                    {achievement.length - 1 === index &&
                    achievement.length < 6 ? (
                      <div
                        className={styles.addIcon}
                        onClick={handleAchievementAdd}
                      >
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleAchievement(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {userAdditionalData.projects ? (
            <div className={styles.Skills}>
              <h3 className={styles.middle}>Projects</h3>
              {projects.map((item, index) => {
                return (
                  <div
                    className={`${styles.inputBox} ${styles.addOption}`}
                    key={index}
                  >
                    <textarea
                      type="text"
                      id="edu1"
                      required="required"
                      name={`projects${index}`}
                      onChange={handleChange}
                    />
                    <span>Add Your projects</span>
                    {projects.length - 1 === index && projects.length < 6 ? (
                      <div
                        className={styles.addIcon}
                        onClick={handleProjectsAdd}
                      >
                        <MdOutlineAdd />{" "}
                      </div>
                    ) : (
                      <div
                        className={styles.addIcon}
                        onClick={() => handleProjects(index)}
                      >
                        <MdOutlineRemove />{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.buttonsGrp}>
          <button className={styles.next} onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
