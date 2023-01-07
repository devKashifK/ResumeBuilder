import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styles from "./resume02.module.css";

 const Resume02 =  forwardRef((props , ref) =>  {
  const color = useSelector((state) => state.colors.color);
  const data = useSelector((state) => state.form.data);
  const image = useSelector((state) => state.form.image);
  const userAdditionalData = useSelector((state) => state.user);
  return (
      <div className={styles.resume}  ref={ref}>
        <div className={styles.aboutU} style={{ backgroundColor: `${color}` }}>
          <div className={styles.aboutUBox}>
            <div className={styles.namePhoto}>
              {userAdditionalData.profilePic ? (
                <div className={styles.profilePhoto}>
                  <img src={image ? image : "./images/img.jpg"} alt="" />
                </div>
              ) : (
                ""
              )}
              <div className={styles.name}>
                {props.data?.name ? data[0]?.name : "Chris Candidate"}
              </div>
            </div>
            <div className={styles.personalInfo}>
              {userAdditionalData.family ? (
                <>
                  <div className={styles.detail}>
                    <span>
                      {data[0]?.fName ? data[0]?.fName : "Chris Father"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {data[0]?.mName ? data[0]?.mName : "Chris Mother"}
                    </span>
                  </div>
             
                </>
              ) : (
                ""
              )}
                   <div className={styles.detail}>
                    <span>
                      {data[0]?.number ? data[0]?.number : "(469) 385-2948"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {data[0]?.email ? data[0]?.email : "email@youremail.com"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {data[0]?.address
                        ? data[0]?.address
                        : "4759 Sunny Dale Lane Plano, TX, 75071"}
                    </span>
                  </div>
            </div>
          </div>
          <div className={styles.objective}>
            <h2
              style={{ borderBottom: `2px solid ${color}`, color: `${color}` }}
            >
              Objective
            </h2>
            <p className={styles.objectiveText}>
              {data[0]?.objective
                ? data[0]?.objective
                : "To work and develop in the field of Corporate Finance, Management and Accounts, enabling me to add to organizational goals while offering a prospect for growth and progression in terms of knowledge gaining and career development.To work and develop in the field of Corporate Finance, Management and Accounts, enabling me to add to organizational goals while offering a prospect for growth and progression in terms of knowledge gaining and career development."}
            </p>
          </div>
   
      

          <div className={styles.links}>
             {userAdditionalData.links ? (
              <div className={styles.linkBoxCont}>
                {data[0]?.label0 ? (
                  <div className={styles.linksBox}>
                    <p>
                      {data[0]?.label0 ? data[0]?.label0 : "Instagram"}:
                    </p>
                    <span  style={{
                  borderBottom: `2px solid ${color}`,
                  
                }}>
                      {data[0]?.link0
                        ? data[0]?.link0
                        : "https/www.instagram.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {data[0]?.label1 ? (
                  <div className={styles.linksBox}>
                    <p>
                      {data[0]?.label1 ? data[0]?.label1 : "Linkedin"}:
                    </p>
                    <span  style={{
                  borderBottom: `2px solid ${color}`,
                  
                }}>
                      {data[0]?.link1
                        ? data[0]?.link1
                        : "https/www.linkedin.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                </div>
              
            ) : (
              ""
            )} 
         <div className={styles.languages}>
            <p>Languages Known :</p>
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
       
          {/*  */}
        </div>
        <div className={styles.professionalInfo}>
        {userAdditionalData.experince ? (
            <div >
              <h2
              className={styles.heading}
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
              >
                Experience
              </h2>
              <ul className={styles.ul}>
                <li >
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
                  <li >
                    {data[0]?.experince2
                      ? data[0]?.experince2
                      : "Also have a vital knowledge about PMS."}
                  </li>
                ) : (
                  ""
                )}

                {data[0]?.experince3 ? (
                  <li >
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
            {userAdditionalData.technicalSkills ? (
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                Skill Set
              </h2>
              <ul className={styles.ul}>
                <li >
                  {data[0]?.tc0 ? data[0]?.tc0 : "JavaScript"}
                </li>
                {data[0]?.tc1 ? (
                  <li >
                    {data[0]?.tc1 ? data[0]?.tc1 : "Html & Css"}
                  </li>
                ) : (
                  ""
                )}

                {data[0]?.tc2 ? (
                  <li className={styles.exper3}>
                    {data[0]?.tc2 ? data[0]?.tc2 : "Redux."}
                  </li>
                ) : (
                  ""
                )}

                {data[0]?.tc3 ? (
                  <li >
                    {data[0]?.tc3
                      ? data[0]?.tc3
                      : "MS Office : Word, Powerpoint"}
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
              style={{ borderBottom: `2px solid ${color}`, color: `${color}` }}  className={styles.heading}
            >
              Education
            </h2>
            <ul className={styles.ul}>
              <li>
                {data[0]?.education0
                  ? data[0]?.education0
                  : "2008-Now  IIT Delhi B. Tech (IT) CGPA 8.3 upto 5th semester"}
              </li>
              <li >
                {data[0]?.education1
                  ? data[0]?.education1
                  : "2006-2008 Central Board of Secondary Education XII 83.3%"}
              </li>
              <li >
                {data[0]?.education2
                  ? data[0]?.education2
                  : "2004-2006 Central Board of Secondary Education X 88%"}
              </li>
              {data[0]?.education3 ? (
                <li >
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
          <div >
            <h2
              style={{ borderBottom: `2px solid ${color}`, color: `${color}`}} className={styles.heading}
            >
              Personal Traits
            </h2>
            <div>
              <ul className={styles.ul}>
                <li >
                  {data[0]?.skill0 ? data[0]?.skill0 : "Detail oriented"}
                </li>
                <li >
                  {data[0]?.skill1
                    ? data[0]?.skill1
                    : "Well-versed in Texas employment law"}
                </li>
                <li >
                  {data[0]?.skill2
                    ? data[0]?.skill2
                    : "Excellent written and oral communication skills"}
                </li>
                <li >
                  {data[0]?.skill3
                    ? data[0]?.skill3
                    : "Develops positive workplace relationships"}
                </li>
              </ul>
                {data[0]?.skill4 ? (
                  <li >
                    {data[0]?.skill4
                      ? data[0]?.skill4
                      : "Develops positive workplace relationships"}
                  </li>
                ) : (
                  ""
                )}
            </div>
          </div>
          {userAdditionalData.keyAchieveMents ? (
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                  
                }}
                className={styles.heading}
              >
                KEY ACHIEVEMENTS
              </h2>
              <ul className={styles.ul}>
                <li className={styles.keyachiev1}>
                  {data[0]?.achievement0
                    ? data[0]?.achievement0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {data[0]?.achievement1 ? (
                  <li className={styles.keyachiev2}>
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
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                Projects
              </h2>
              <ul className={styles.ul}>
                <li >
                  {data[0]?.projects0
                    ? data[0]?.projects0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {data[0]?.projects1 ? (
                  <li >
                    {data[0]?.projects1
                      ? data[0]?.projects1
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}

                {data[0]?.projects2 ? (
                  <li >
                    {data[0]?.projects2
                      ? data[0]?.projects2
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}
                  {data[0]?.projects3 ? (
                  <li >
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
          {userAdditionalData.hobbies ? (
            <div>
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                HOBBIES AND INTERSTS
              </h2>
              <div >
                <ul className={styles.ul}>
                  <li >
                    {data[0]?.hobby0 ? data[0]?.hobby0 : "Baking"}
                  </li>
                  <li >
                    {data[0]?.hobby1 ? data[0]?.hobby1 : "Photography"}
                  </li>
                  <li >
                    {data[0]?.hobby3 ? data[0]?.hobby3 : "Yoga"}
                  </li>
                  <li >
                    {data[0]?.hobby4 ? data[0]?.hobby4 : "Reading"}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
         
        </div>
     
     </div>
  
  );
})


export const Resume02Live =  (props) =>  {
  const color = useSelector((state) => state.colors.color);
  const userAdditionalData = useSelector((state) => state.user);
  return (
      <div className={styles.resumeLive}>
        <div className={styles.aboutU} style={{ backgroundColor: `${color}` }}>
          <div className={styles.aboutUBox}>
            <div className={styles.namePhoto}>
              {userAdditionalData.profilePic ? (
                <div className={styles.profilePhoto}>
                  <img src={props?.img ? props?.img : "./images/img.jpg"} alt="" />
                </div>
              ) : (
                ""
              )}
              <div className={styles.name}>
                {props.data?.name ? props.data?.name : "Chris Candidate"}
              </div>
            </div>
            <div className={styles.personalInfo}>
              {userAdditionalData.family ? (
                <>
                  <div className={styles.detail}>
                    <span>
                      {props.data?.fName ? props.data?.fName : "Chris Father"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {props.data?.mName ? props.data?.mName : "Chris Mother"}
                    </span>
                  </div>
             
                </>
              ) : (
                ""
              )}
                   <div className={styles.detail}>
                    <span>
                      {props.data?.number ? props.data?.number : "(469) 385-2948"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {props.data?.email ? props.data?.email : "email@youremail.com"}
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span>
                      {props.data?.address
                        ? props.data?.address
                        : "4759 Sunny Dale Lane Plano, TX, 75071"}
                    </span>
                  </div>
            </div>
          </div>
          <div className={styles.objective}>
            <p className={styles.objectiveText}>
              {props.data?.objective
                ? props.data?.objective
                : "To work and develop in the field of Corporate Finance, Management and Accounts, enabling me to add to organizational goals while offering a prospect for growth and progression in terms of knowledge gaining and career development.To work and develop in the field of Corporate Finance, Management and Accounts, enabling me to add to organizational goals while offering a prospect for growth and progression in terms of knowledge gaining and career development."}
            </p>
          </div>
   
      

          <div className={styles.links}>
             {userAdditionalData.links ? (
              <div className={styles.linkBoxCont}>
                {props.data?.label0 ? (
                  <div className={styles.linksBox}>
                    <p>
                      {props.data?.label0 ? props.data?.label0 : "Instagram"}:
                    </p>
                    <span  style={{
                  borderBottom: `2px solid ${color}`,
                  
                }}>
                      {props.data?.link0
                        ? props.data?.link0
                        : "https/www.instagram.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {props.data?.label1 ? (
                  <div className={styles.linksBox}>
                    <p>
                      {props.data?.label1 ? props.data?.label1 : "Linkedin"}:
                    </p>
                    <span  style={{
                  borderBottom: `2px solid ${color}`,
                  
                }}>
                      {props.data?.link1
                        ? props.data?.link1
                        : "https/www.linkedin.com"}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                </div>
              
            ) : (
              ""
            )} 
         <div className={styles.languages}>
            <p>Languages Known :</p>
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
       
          {/*  */}
        </div>
        <div className={styles.professionalInfo}>
        {userAdditionalData.experince ? (
            <div >
              <h2
              className={styles.heading}
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
              >
                Experience
              </h2>
              <ul className={styles.ul}>
                <li >
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
                  <li >
                    {props.data?.experince2
                      ? props.data?.experince2
                      : "Also have a vital knowledge about PMS."}
                  </li>
                ) : (
                  ""
                )}

                {props.data?.experince3 ? (
                  <li >
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
            {userAdditionalData.technicalSkills ? (
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                Skill Set
              </h2>
              <ul className={styles.ul}>
                <li >
                  {props.data?.tc0 ? props.data?.tc0 : "JavaScript"}
                </li>
                {props.data?.tc1 ? (
                  <li >
                    {props.data?.tc1 ? props.data?.tc1 : "Html & Css"}
                  </li>
                ) : (
                  ""
                )}

                {props.data?.tc2 ? (
                  <li className={styles.exper3}>
                    {props.data?.tc2 ? props.data?.tc2 : "Redux."}
                  </li>
                ) : (
                  ""
                )}

                {props.data?.tc3 ? (
                  <li >
                    {props.data?.tc3
                      ? props.data?.tc3
                      : "MS Office : Word, Powerpoint"}
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
              style={{ borderBottom: `2px solid ${color}`, color: `${color}` }}  className={styles.heading}
            >
              Education
            </h2>
            <ul className={styles.ul}>
              <li>
                {props.data?.education0
                  ? props.data?.education0
                  : "2008-Now  IIT Delhi B. Tech (IT) CGPA 8.3 upto 5th semester"}
              </li>
              <li >
                {props.data?.education1
                  ? props.data?.education1
                  : "2006-2008 Central Board of Secondary Education XII 83.3%"}
              </li>
              <li >
                {props.data?.education2
                  ? props.data?.education2
                  : "2004-2006 Central Board of Secondary Education X 88%"}
              </li>
              {props.data?.education3 ? (
                <li >
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
          <div >
            <h2
              style={{ borderBottom: `2px solid ${color}`, color: `${color}`}} className={styles.heading}
            >
              Personal Traits
            </h2>
            <div>
              <ul className={styles.ul}>
                <li >
                  {props.data?.skill0 ? props.data?.skill0 : "Detail oriented"}
                </li>
                <li >
                  {props.data?.skill1
                    ? props.data?.skill1
                    : "Well-versed in Texas employment law"}
                </li>
                <li >
                  {props.data?.skill2
                    ? props.data?.skill2
                    : "Excellent written and oral communication skills"}
                </li>
                <li >
                  {props.data?.skill3
                    ? props.data?.skill3
                    : "Develops positive workplace relationships"}
                </li>
              </ul>
                {props.data?.skill4 ? (
                  <li >
                    {props.data?.skill4
                      ? props.data?.skill4
                      : "Develops positive workplace relationships"}
                  </li>
                ) : (
                  ""
                )}
            </div>
          </div>
          {userAdditionalData.keyAchieveMents ? (
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                  
                }}
                className={styles.heading}
              >
                KEY ACHIEVEMENTS
              </h2>
              <ul className={styles.ul}>
                <li className={styles.keyachiev1}>
                  {props.data?.achievement0
                    ? props.data?.achievement0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {props.data?.achievement1 ? (
                  <li className={styles.keyachiev2}>
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
            <div >
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                Projects
              </h2>
              <ul className={styles.ul}>
                <li >
                  {props.data?.projects0
                    ? props.data?.projects0
                    : "Developed a new employee orientation program that 100% of the company locations adopted."}
                </li>
                {props.data?.projects1 ? (
                  <li >
                    {props.data?.projects1
                      ? props.data?.projects1
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}

                {props.data?.projects2 ? (
                  <li >
                    {props.data?.projects2
                      ? props.data?.projects2
                      : "Responded to over 85 customer calls daily and solved 90% of their concerns."}
                  </li>
                ) : (
                  ""
                )}
                  {props.data?.projects3 ? (
                  <li >
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
          {userAdditionalData.hobbies ? (
            <div>
              <h2
                style={{
                  borderBottom: `2px solid ${color}`,
                  color: `${color}`,
                }}
                className={styles.heading}
              >
                HOBBIES AND INTERSTS
              </h2>
              <div >
                <ul className={styles.ul}>
                  <li >
                    {props.data?.hobby0 ? props.data?.hobby0 : "Baking"}
                  </li>
                  <li >
                    {props.data?.hobby1 ? props.data?.hobby1 : "Photography"}
                  </li>
                  <li >
                    {props.data?.hobby3 ? props.data?.hobby3 : "Yoga"}
                  </li>
                  <li >
                    {props.data?.hobby4 ? props.data?.hobby4 : "Reading"}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
         
        </div>
     
     </div>
  
  );
}
export default Resume02;