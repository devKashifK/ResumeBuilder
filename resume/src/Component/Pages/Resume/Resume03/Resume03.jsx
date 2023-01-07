import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styles from "./Resume03.module.css";

 const Resume03 = forwardRef((props, ref) => {
  const userAdditionalData = useSelector((state) => state.user);
  const color = useSelector((state) => state.colors.color);
  const data = useSelector((state) => state.form.data);
  const image = useSelector((state) => state.form.image);
  return (
    <div className={styles.resume} ref={ref}>
      <div className={styles.aboutU} style={{ backgroundColor: `${color}` }}>
        {userAdditionalData.profilePic ? (
          <div className={styles.profilePhoto}>
            <img src={image ? image : "./images/img.jpg"} alt="" />
          </div>
        ) : (
          ""
        )}

        <div className={styles.personalInfo}>
          <h2>Personal Info</h2>
          <div className={styles.information}>
            {userAdditionalData.family ? (
              <>
                <div className={styles.detail}>
                  <span className={styles.lineName}>Father's Name:</span>
                  <span className={styles.lineName2}>
                    {data[0]?.fName ? data[0]?.fName : "Chris Father"}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.lineName}>Mother's Name:</span>
                  <span className={styles.lineName2}>
                    {" "}
                    {data[0]?.mName ? data[0]?.mName : "Chris Mother"}
                  </span>
                </div>{" "}
              </>
            ) : (
              ""
            )}

            <div className={styles.detail}>
              <span className={styles.lineName}>Phone:</span>
              <span className={styles.lineName2}>
                {" "}
                {data[0]?.number ? data[0]?.number : "(469) 385-2948"}
              </span>
            </div>
            <div className={styles.detail}>
              <span className={styles.lineName}>E-mail:</span>
              <span className={styles.lineName2}>
                {data[0]?.email ? data[0]?.email : "email@youremail.com"}
              </span>
            </div>
            {userAdditionalData.links ? (
              <>
                {data[0]?.label0 ? (
                  <div className={styles.detail}>
                    <span className={styles.lineName}>
                      {data[0]?.label0 ? data[0]?.label0 : "Instagram"}:
                    </span>
                    <span className={styles.lineName2}>
                      {data[0]?.link0
                        ? data[0]?.link0
                        : "https/www.instagram.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {data[0]?.label1 ? (
                  <div className={styles.detail}>
                    <span className={styles.lineName}>
                      {data[0]?.label1 ? data[0]?.label1 : "Linkedin"}:
                    </span>
                    <span className={styles.lineName2}>
                      {data[0]?.link1
                        ? data[0]?.link1
                        : "https/www.linkedin.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
            <div className={styles.detail}>
              <span className={styles.lineName}>Address:</span>
              <span className={styles.lineName2}>
                {data[0]?.address
                  ? data[0]?.address
                  : "4759 Sunny Dale Lane Plano, TX, 75071"}
              </span>
            </div>
          </div>
          <div>
            <h2>Personal Traits</h2>
            <ul className={styles.ul0}>
              <li className={styles.skill1}>
                {data[0]?.skill0 ? data[0]?.skill0 : "Detail oriented"}
              </li>
              <li className={styles.skill2}>
                {data[0]?.skill1
                  ? data[0]?.skill1
                  : "Well-versed in Texas employment law"}
              </li>
              <li className={styles.skill4}>
                {data[0]?.skill2
                  ? data[0]?.skill2
                  : "Excellent written and oral communication skills"}
              </li>
              <li className={styles.skill5}>
                {data[0]?.skill3
                  ? data[0]?.skill3
                  : "Develops positive workplace relationships"}
              </li>
              {data[0]?.skill4 ? (
                <li className={styles.skill5}>
                  {data[0]?.skill4
                    ? data[0]?.skill4
                    : "Develops positive workplace relationships"}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          {userAdditionalData.hobbies ? (
            <div>
              <h2>INTERSTS</h2>

              <ul className={styles.ul0}>
                <li className={styles.hobby1}>
                  {data[0]?.hobby0 ? data[0]?.hobby0 : "Baking"}
                </li>
                <li className={styles.hobby2}>
                  {data[0]?.hobby1 ? data[0]?.hobby1 : "Photography"}
                </li>

                <li className={styles.hobby4}>
                  {data[0]?.hobby3 ? data[0]?.hobby3 : "Yoga"}
                </li>
                <li className={styles.hobby5}>
                  {data[0]?.hobby4 ? data[0]?.hobby4 : "Reading"}
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className={`${styles.languages} ${styles.flexColumn}`}>
            <h2>Language</h2>
            <ul className={styles.ul0}>
              <li className={styles.langauge1}>
                {data[0]?.language0 ? data[0]?.language0 : "English"}
              </li>
              <li className={styles.langauge2}>
                {data[0]?.language1 ? data[0]?.language1 : "Hindi"}
              </li>
              {data[0]?.language2 ? (
                <li className={styles.langauge2}>
                  {data[0]?.language2 ? data[0]?.language2 : "NEW"}
                </li>
              ) : (
                ""
              )}
              {data[0]?.language3 ? (
                <li className={styles.langauge2}>
                  {data[0]?.language3 ? data[0]?.language3 : "NEW"}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.name} style={{ color: `${color}` }}>
          <h2> {data[0]?.name ? data[0]?.name : "Chris Candidate"}</h2>
          <p className={styles.objectiveText}>
            {data[0]?.objective
              ? data[0]?.objective
              : "To work and develop in the field of Corporate Finance, Management and Accounts, enabling me to add to organizational goals while offering a prospect for growth and progression in terms of knowledge gaining and career development."}
          </p>
        </div>

        {userAdditionalData.technicalSkills ? (
          <div>
            <h2
              style={{
                borderBottom: `2px solid ${color}`,
                color: `${color}`,
                paddingBottom: "05px",
              }}
            >
              Skill Set
            </h2>
            <ul className={styles.ul}>
              <li className={styles.exper1}>
                {data[0]?.tc0 ? data[0]?.tc0 : "JavaScript"}
              </li>
              {data[0]?.tc1 ? (
                <li>{data[0]?.tc1 ? data[0]?.tc1 : "Html & Css"}</li>
              ) : (
                ""
              )}

              {data[0]?.tc2 ? (
                <li>{data[0]?.tc2 ? data[0]?.tc2 : "Redux."}</li>
              ) : (
                ""
              )}

              {data[0]?.tc3 ? (
                <li>
                  {data[0]?.tc3 ? data[0]?.tc3 : "MS Office : Word, Powerpoint"}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
        {userAdditionalData.experince ? (
          <div>
            <h2
              style={{
                borderBottom: `2px solid ${color}`,
                color: `${color}`,
                paddingBottom: "05px",
              }}
            >
              Experience
            </h2>
            <ul className={styles.ul}>
              <li className={styles.exper1}>
                {data[0]?.experince0
                  ? data[0]?.experince0
                  : "Done My Industrial Training Intern from Westin Sohna Resort and Spa, 18 weeks training (1 AUG 2021- 20 NOV 2021) And Got an Appreciation Letter From F&B Department."}
              </li>
              {data[0]?.experince1 ? (
                <li>
                  {data[0]?.experince1
                    ? data[0]?.experince1
                    : "Has done a very appreciating work in front office during industrial training"}
                </li>
              ) : (
                ""
              )}

              {data[0]?.experince2 ? (
                <li>
                  {data[0]?.experince2
                    ? data[0]?.experince2
                    : "Also have a vital knowledge about PMS."}
                </li>
              ) : (
                ""
              )}

              {data[0]?.experince3 ? (
                <li>
                  {data[0]?.experince3
                    ? data[0]?.experince3
                    : "Also have a vital knowledge about PMS."}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div>
          <h2
            style={{
              borderBottom: `2px solid ${color}`,
              color: `${color}`,
              paddingBottom: "05px",
            }}
          >
            Education
          </h2>
          <ul className={styles.ul}>
            <li>
              {data[0]?.education0
                ? data[0]?.education0
                : "2008-Now  IIT Delhi B. Tech (IT) CGPA 8.3 upto 5th semester"}
            </li>
            <li>
              {data[0]?.education1
                ? data[0]?.education1
                : "2006-2008 Central Board of Secondary Education XII 83.3%"}
            </li>
            <li>
              {data[0]?.education2
                ? data[0]?.education2
                : "2004-2006 Central Board of Secondary Education X 88%"}
            </li>
            {data[0]?.education3 ? (
              <li>
                {data[0]?.education3
                  ? data[0]?.education3
                  : "Add Extra Education"}
              </li>
            ) : (
              ""
            )}
            {data[0]?.education4 ? (
              <li>
                {data[0]?.education4
                  ? data[0]?.education4
                  : "Add Extra Education"}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        {userAdditionalData.keyAchieveMents ? (
          <div>
            <h2
              style={{
                borderBottom: `2px solid ${color}`,
                color: `${color}`,
                paddingBottom: "05px",
              }}
            >
              KEY ACHIEVEMENTS
            </h2>
            <ul className={styles.ul}>
              <li>
                {data[0]?.achievement0
                  ? data[0]?.achievement0
                  : "Developed a new employee orientation program that 100% of the company locations adopted."}
              </li>
              {data[0]?.achievement1 ? (
                <li>
                  {data[0]?.achievement1
                    ? data[0]?.achievement1
                    : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                </li>
              ) : (
                ""
              )}
              {data[0]?.achievement2 ? (
                <li>
                  {data[0]?.achievement2
                    ? data[0]?.achievement2
                    : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
        {userAdditionalData.projects ? (
          <div>
            <h2
              style={{
                borderBottom: `2px solid ${color}`,
                color: `${color}`,
                paddingBottom: "05px",
              }}
            >
              Projects
            </h2>
            <ul className={styles.ul}>
              <li>
                {data[0]?.projects0
                  ? data[0]?.projects0
                  : "Developed a new employee orientation program that 100% of the company locations adopted."}
              </li>
              {data[0]?.projects1 ? (
                <li>
                  {data[0]?.projects1
                    ? data[0]?.projects1
                    : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                </li>
              ) : (
                ""
              )}

              {data[0]?.projects2 ? (
                <li>
                  {data[0]?.projects2
                    ? data[0]?.projects2
                    : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                </li>
              ) : (
                ""
              )}
                {data[0]?.projects3 ? (
                <li>
                  {data[0]?.projects3
                    ? data[0]?.projects3
                    : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
export default Resume03;



