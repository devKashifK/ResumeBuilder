import { useSelector } from "react-redux";
import styles from "./Resume03.module.css"

const Resume03Live = (props) => {
    const userAdditionalData = useSelector((state) => state.user);
    const color = useSelector((state) => state.colors.color);

    return (
      <div className={styles.resumeLive} >
        <div className={styles.aboutU} style={{ backgroundColor: `${color}` }}>
          {userAdditionalData.profilePic ? (
            <div className={styles.profilePhoto}>
              <img src={props?.img ? props?.img : "./images/img.jpg"} alt="" />
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
                      {props.data?.fName ? props.data?.fName : "Chris Father"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.lineName}>Mother's Name:</span>
                    <span className={styles.lineName2}>
                      {" "}
                      {props.data?.mName ? props.data?.mName : "Chris Mother"}
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
                  {props.data?.number ? props.data?.number : "(469) 385-2948"}
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.lineName}>E-mail:</span>
                <span className={styles.lineName2}>
                  {props.data?.email ? props.data?.email : "email@youremail.com"}
                </span>
              </div>
              {userAdditionalData.links ? (
                <>
                  {props.data?.label0 ? (
                    <div className={styles.detail}>
                      <span className={styles.lineName}>
                        {props.data?.label0 ? props.data?.label0 : "Instagram"}:
                      </span>
                      <span className={styles.lineName2}>
                        {props.data?.link0
                          ? props.data?.link0
                          : "https/www.instagram.com"}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {props.data?.label1 ? (
                    <div className={styles.detail}>
                      <span className={styles.lineName}>
                        {props.data?.label1 ? props.data?.label1 : "Linkedin"}:
                      </span>
                      <span className={styles.lineName2}>
                        {props.data?.link1
                          ? props.data?.link1
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
                  {props.data?.address
                    ? props.data?.address
                    : "4759 Sunny Dale Lane Plano, TX, 75071"}
                </span>
              </div>
            </div>
            <div>
              <h2>Personal Traits</h2>
              <ul className={styles.ul0}>
                <li className={styles.skill1}>
                  {props.data?.skill0 ? props.data?.skill0 : "Detail oriented"}
                </li>
                <li className={styles.skill2}>
                  {props.data?.skill1
                    ? props.data?.skill1
                    : "Well-versed in Texas employment law"}
                </li>
                <li className={styles.skill4}>
                  {props.data?.skill2
                    ? props.data?.skill2
                    : "Excellent written and oral communication skills"}
                </li>
                <li className={styles.skill5}>
                  {props.data?.skill3
                    ? props.data?.skill3
                    : "Develops positive workplace relationships"}
                </li>
                {props.data?.skill4 ? (
                  <li className={styles.skill5}>
                    {props.data?.skill4
                      ? props.data?.skill4
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
                    {props.data?.hobby0 ? props.data?.hobby0 : "Baking"}
                  </li>
                  <li className={styles.hobby2}>
                    {props.data?.hobby1 ? props.data?.hobby1 : "Photography"}
                  </li>
  
                  <li className={styles.hobby4}>
                    {props.data?.hobby3 ? props.data?.hobby3 : "Yoga"}
                  </li>
                  <li className={styles.hobby5}>
                    {props.data?.hobby4 ? props.data?.hobby4 : "Reading"}
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
                  {props.data?.language0 ? props.data?.language0 : "English"}
                </li>
                <li className={styles.langauge2}>
                  {props.data?.language1 ? props.data?.language1 : "Hindi"}
                </li>
                {props.data?.language2 ? (
                  <li className={styles.langauge2}>
                    {props.data?.language2 ? props.data?.language2 : "NEW"}
                  </li>
                ) : (
                  ""
                )}
                {props.data?.language3 ? (
                  <li className={styles.langauge2}>
                    {props.data?.language3 ? props.data?.language3 : "NEW"}
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
            <h2> {props.data?.name ? props.data?.name : "Chris Candidate"}</h2>
            <p className={styles.objectiveText}>
              {props.data?.objective
                ? props.data?.objective
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
                <li >
                  {props.data?.tc0 ? props.data?.tc0 : "JavaScript"}
                </li>
                {props.data?.tc1 ? (
                  <li>{props.data?.tc1 ? props.data?.tc1 : "Html & Css"}</li>
                ) : (
                  ""
                )}
  
                {props.data?.tc2 ? (
                  <li>{props.data?.tc2 ? props.data?.tc2 : "Redux."}</li>
                ) : (
                  ""
                )}
  
                {props.data?.tc3 ? (
                  <li>
                    {props.data?.tc3 ? props.data?.tc3 : "MS Office : Word, Powerpoint"}
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
                  {props.data?.experince0
                    ? props.data?.experince0
                    : "Done My Industrial Training Intern from Westin Sohna Resort and Spa, 18 weeks training (1 AUG 2021- 20 NOV 2021) And Got an Appreciation Letter From F&B Department."}
                </li>
                {props.data?.experince1 ? (
                  <li>
                    {props.data?.experince1
                      ? props.data?.experince1
                      : "Has done a very appreciating work in front office during industrial training"}
                  </li>
                ) : (
                  ""
                )}
  
                {props.data?.experince2 ? (
                  <li>
                    {props.data?.experince2
                      ? props.data?.experince2
                      : "Also have a vital knowledge about PMS."}
                  </li>
                ) : (
                  ""
                )}
  
                {props.data?.experince3 ? (
                  <li>
                    {props.data?.experince3
                      ? props.data?.experince3
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
                {props.data?.education0
                  ? props.data?.education0
                  : "2008-Now  IIT Delhi B. Tech (IT) CGPA 8.3 upto 5th semester"}
              </li>
              <li>
                {props.data?.education1
                  ? props.data?.education1
                  : "2006-2008 Central Board of Secondary Education XII 83.3%"}
              </li>
              <li>
                {props.data?.education2
                  ? props.data?.education2
                  : "2004-2006 Central Board of Secondary Education X 88%"}
              </li>
              {props.data?.education3 ? (
                <li>
                  {props.data?.education3
                    ? props.data?.education3
                    : "Add Extra Education"}
                </li>
              ) : (
                ""
              )}
              {props.data?.education4 ? (
                <li>
                  {props.data?.education4
                    ? props.data?.education4
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
                  {props.data?.achievement0
                    ? props.data?.achievement0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {props.data?.achievement1 ? (
                  <li>
                    {props.data?.achievement1
                      ? props.data?.achievement1
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}
                {props.data?.achievement2 ? (
                  <li>
                    {props.data?.achievement2
                      ? props.data?.achievement2
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
                  {props.data?.projects0
                    ? props.data?.projects0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {props.data?.projects1 ? (
                  <li>
                    {props.data?.projects1
                      ? props.data?.projects1
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}
  
                {props.data?.projects2 ? (
                  <li>
                    {props.data?.projects2
                      ? props.data?.projects2
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}
                  {props.data?.projects3 ? (
                  <li>
                    {props.data?.projects3
                      ? props.data?.projects3
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
  }

  export default Resume03Live;