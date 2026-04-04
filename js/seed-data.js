// seed-data.js — Run this once from an admin page to populate Supabase
const QUESTIONS_DATA = [
  {
    "series_number": 1,
    "title": "NCLEX RN Practice Series 1",
    "question_count": 34,
    "questions": [
      {
        "number": 1,
        "question": "Which classification of drugs is contraindicated for the client with hypertrophic cardiomyopathy?",
        "option_a": "Positive inotropes",
        "option_b": "Vasodilators",
        "option_c": "Diuretics",
        "option_d": "Antidysrhythmics",
        "correct_answer": "A"
      },
      {
        "number": 2,
        "question": "Signs and symptoms of an allergy attack include which of the following?",
        "option_a": "Wheezing on inspiration",
        "option_b": "Increased respiratory rate",
        "option_c": "Circumoral cyanosis",
        "option_d": "Prolonged expiration",
        "correct_answer": "D"
      },
      {
        "number": 3,
        "question": "A client confides to the nurse that he tasted poison in his evening meal. This would be an example of what type of hallucination?",
        "option_a": "Auditory",
        "option_b": "Gustatory",
        "option_c": "Olfactory",
        "option_d": "Visceral",
        "correct_answer": "B"
      },
      {
        "number": 4,
        "question": "Which of the following findings would be abnormal in a postpartal woman?",
        "option_a": "Chills shortly after delivery",
        "option_b": "Pulse rate of 60 bpm in morning on first postdelivery day",
        "option_c": "Urinary output of 3000 mL on the second day after delivery",
        "option_d": "An oral temperature of 101F (38.3C) on the third day after delivery",
        "correct_answer": "D"
      },
      {
        "number": 5,
        "question": "A six-month-old infant has been admitted to the emergency room with febrile seizures. In the teaching of the parents, the nurse states that:",
        "option_a": "Sustained temperature elevation over 103F is generally related to febrile seizures",
        "option_b": "Febrile seizures do not usually recur",
        "option_c": "There is little risk of neurological deficit and mental retardation as sequelae to febrile seizures",
        "option_d": "Febrile seizures are associated with diseases of the central nervous system",
        "correct_answer": "C"
      },
      {
        "number": 6,
        "question": "A client diagnosed with bipolar disorder continues to be hyperactive and to lose weight. Which of the following nutritional interventions would be most therapeutic for him at this time?",
        "option_a": "Small, frequent feedings of foods that can be carried",
        "option_b": "Tube feedings with nutritional supplements",
        "option_c": "Allowing him to eat when and what he wants",
        "option_d": "Giving him a quiet place where he can sit down to eat meals",
        "correct_answer": "A"
      },
      {
        "number": 7,
        "question": "A client with bipolar disorder taking lithium tells the nurse that he has ringing in his ears, blurred vision, and diarrhe",
        "option_a": "The nurse notices a slight tremor in his left hand and a slurring pattern to his speech. Which of the following actions by the nurse is appropriate? A. Administer a stat dose of lithium as necessary.",
        "option_b": "Recognize this as an expected response to lithium.",
        "option_c": "Request an order for a stat blood lithium level.",
        "option_d": "Give an oral dose of lithium antidote.",
        "correct_answer": "C"
      },
      {
        "number": 8,
        "question": "A diagnosis of hepatitis C is confirmed by a male client\u2018s physician. The nurse should be knowledgeable of the differences between hepatitis A, B, and C. Which of the following are characteristics of hepatitis C?",
        "option_a": "The potential for chronic liver disease is minimal.",
        "option_b": "The onset of symptoms is abrupt.",
        "option_c": "The incubation period is 2\u201326 weeks.",
        "option_d": "There is an effective vaccine for hepatitis B, but not for hepatitis C.",
        "correct_answer": "C"
      },
      {
        "number": 9,
        "question": "Hypoxia is the primary problem related to near-drowning victims. The first organ that sustains irreversible damage after submersion in water is the:",
        "option_a": "Kidney (urinary system)",
        "option_b": "Brain (nervous system)",
        "option_c": "Heart (circulatory system)",
        "option_d": "Lungs (respiratory system)",
        "correct_answer": "B"
      },
      {
        "number": 10,
        "question": "Which of the following activities would be most appropriate during occupational therapy for a client with bipolar disorder?",
        "option_a": "Playing cards with other clients",
        "option_b": "Working crossword puzzles",
        "option_c": "Playing tennis with a staff member",
        "option_d": "Sewing beads on a leather belt",
        "correct_answer": "C"
      },
      {
        "number": 11,
        "question": "A 30-year-old male client is admitted to the psychiatric unit with a diagnosis of bipolar disorder. For the last 2 months, his family describes him as being \u2015on the move,\u2016 sleeping 3\u20134 hours nightly, spending lots of money, and losing approximately 10 lb. During the initial assessment with the client, the nurse would expect him to exhibit which of the following?",
        "option_a": "Short, polite responses to interview questions",
        "option_b": "Introspection related to his present situation",
        "option_c": "Exaggerated self-importance",
        "option_d": "Feelings of helplessness and hopelessness",
        "correct_answer": "C"
      },
      {
        "number": 12,
        "question": "Diabetes during pregnancy requires tight metabolic control of glucose levels to prevent perinatal mortality. When evaluating the pregnant client, the nurse knows the recommended serum glucose range during pregnancy is:",
        "option_a": "70 mg/dL and 120 mg/dL",
        "option_b": "100 mg/dL and 200 mg/dL",
        "option_c": "40 mg/dL and 130 mg/dL",
        "option_d": "90 mg/dL and 200 mg/dL",
        "correct_answer": "A"
      },
      {
        "number": 13,
        "question": "When evaluating a client with symptoms of shock, it is important for the nurse to differentiate between neurogenic and hypovolemic shock. The symptoms of neurogenic shock differ from hypovolemic shock in that:",
        "option_a": "In neurogenic shock, the skin is warm and dry",
        "option_b": "In hypovolemic shock, there is a bradycardia",
        "option_c": "In hypovolemic shock, capillary refill is less than 2 seconds",
        "option_d": "In neurogenic shock, there is delayed capillary refill",
        "correct_answer": "A"
      },
      {
        "number": 14,
        "question": "A 55-year-old man is admitted to the hospital with complaints of fatigue, jaundice, anorexia, and clay-colored stools. His admitting diagnosis is \u2015rule out hepatitis.\u2016 Laboratory studies reveal elevated liver enzymes and bilirubin. In obtaining his health history, the nurse should assess his potential for exposure to hepatitis. Which of the following represents a high-risk group for contracting this disease?",
        "option_a": "Heterosexual males",
        "option_b": "Oncology nurses",
        "option_c": "American Indians",
        "option_d": "Jehovah\u2018s Witnesses",
        "correct_answer": "B"
      },
      {
        "number": 15,
        "question": "A schizophrenic client has made sexual overtures toward her physician on numerous occasions. During lunch, the client tells the nurse, \u2015My doctor is in love with me and wants to marry me.\u2016 This client is using which of the following defense mechanisms?",
        "option_a": "Displacement",
        "option_b": "Projection",
        "option_c": "Reaction formation",
        "option_d": "Suppression",
        "correct_answer": "B"
      },
      {
        "number": 16,
        "question": "When teaching a sex education class, the nurse identifies the most common STDs in the United States as:",
        "option_a": "Chlamydia",
        "option_b": "Herpes genitalis",
        "option_c": "Syphilis",
        "option_d": "Gonorrhea",
        "correct_answer": "A"
      },
      {
        "number": 17,
        "question": "The nurse assists a client with advanced emphysema to the bathroom. The client becomes extremely short of breath while returning to bed. The nurse should:",
        "option_a": "Increase his nasal O2 to 6 L/min",
        "option_b": "Place him in a lateral Sims\u2018 position",
        "option_c": "Encourage pursed-lip breathing",
        "option_d": "Have him breathe into a paper bag",
        "correct_answer": "C"
      },
      {
        "number": 18,
        "question": "In a client with chest trauma, the nurse needs to evaluate mediastinal position. This can best be done by:",
        "option_a": "Auscultating bilateral breath sounds",
        "option_b": "Palpating for presence of crepitus",
        "option_c": "Palpating for trachial deviation",
        "option_d": "Auscultating heart sounds",
        "correct_answer": "C"
      },
      {
        "number": 19,
        "question": "Clinical manifestations seen in left-sided rather than in right-sided heart failure are:",
        "option_a": "Elevated central venous pressure and peripheral edema",
        "option_b": "Dyspnea and jaundice",
        "option_c": "Hypotension and hepatomegaly",
        "option_d": "Decreased peripheral perfusion and rales",
        "correct_answer": "D"
      },
      {
        "number": 20,
        "question": "In assessing cardiovascular clients with progression of aortic stenosis, the nurse should be aware that there is typically:",
        "option_a": "Decreased pulmonary blood flow and cyanosis",
        "option_b": "Increased pressure in the pulmonary veins and pulmonary edema",
        "option_c": "Systemic venous engorgement",
        "option_d": "Increased left ventricular systolic pressures and hypertrophy",
        "correct_answer": "D"
      },
      {
        "number": 21,
        "question": "An 8-year-old child comes to the physician\u2018s office complaining of swelling and pain in the knees. His mother says, \u2015The swelling occurred for no reason, and it keeps getting worse.\u2016 The initial diagnosis is Lyme disease. When talking to the mother and child, questions related to which of the following would be important to include in the initial history?",
        "option_a": "A decreased urinary output and flank pain",
        "option_b": "A fever of over 103F occurring over the last 2\u20133 weeks",
        "option_c": "Rashes covering the palms of the hands and the soles of the feet",
        "option_d": "Headaches, malaise, or sore throat",
        "correct_answer": "D"
      },
      {
        "number": 22,
        "question": "When administering phenytoin (Dilantin) to a child, the nurse should be aware that a toxic effect of phenytoin therapy is:",
        "option_a": "Stephens-Johnson syndrome",
        "option_b": "Folate deficiency",
        "option_c": "Leukopenic aplastic anemia",
        "option_d": "Granulocytosis and nephrosis",
        "correct_answer": "A"
      },
      {
        "number": 23,
        "question": "The nurse should know that according to current thinking, the most important prognostic factor for a client with breast cancer is:",
        "option_a": "Tumor size",
        "option_b": "Axillary node status",
        "option_c": "Client\u2018s previous history of disease",
        "option_d": "Client\u2018s level of estrogen-progesterone receptor assays",
        "correct_answer": "B"
      },
      {
        "number": 24,
        "question": "Three weeks following discharge, a male client is readmitted to the psychiatric unit for depression. His wife stated that he had threatened to kill himself with a handgun. As the nurse admits him to the unit, he says, \u2015I wish I were dead because I am worthless to everyone; I guess I am just no good.\u2016 Which response by the nurse is most appropriate at this time?",
        "option_a": "\u2015I don\u2018t think you are worthless. I\u2018m glad to see you, and we will help you.\u2016",
        "option_b": "\u2015Don\u2018t you think this is a sign of your illness?\u2016",
        "option_c": "\u2015I know with your wife and new baby that you do have a lot to live for.\u2016",
        "option_d": "\u2015You\u2018ve been feeling sad and alone for some time now?\u2016",
        "correct_answer": "D"
      },
      {
        "number": 25,
        "question": "Which of the following should be included in discharge teaching for a client with hepatitis C?",
        "option_a": "He should take aspirin as needed for muscle and joint pain.",
        "option_b": "He may become a blood donor when his liver enzymes return to normal.",
        "option_c": "He should avoid alcoholic beverages during his recovery period.",
        "option_d": "He should use disposable dishes for eating and drinking.",
        "correct_answer": "C"
      },
      {
        "number": 26,
        "question": "The initial treatment for a client with a liquid chemical burn injury is to:",
        "option_a": "Irrigate the area with neutralizing solutions",
        "option_b": "Flush the exposed area with large amounts of water",
        "option_c": "Inject calcium chloride into the burned area",
        "option_d": "Apply lanolin ointment to the area",
        "correct_answer": "B"
      },
      {
        "number": 27,
        "question": "Dietary planning is an essential part of the diabetic client\u2018s regimen. The American Diabetes Association recommends which of the following caloric guidelines for daily meal planning?",
        "option_a": "50% complex carbohydrate, 20%\u201325% protein, 20%\u201325% fat",
        "option_b": "45% complex carbohydrate, 25%\u201330% protein, 30%\u201335% fat",
        "option_c": "70% complex carbohydrate, 20%\u201330% protein, 10%\u201320% fat",
        "option_d": "60% complex carbohydrate, 12%\u201315% protein, 20%\u201325% fat",
        "correct_answer": "D"
      },
      {
        "number": 28,
        "question": "The primary reason for sending a burn client home with a pressure garment, such as a Jobst garment, is that the garment:",
        "option_a": "Decreases hypertrophic scar formation",
        "option_b": "Assists with ambulation",
        "option_c": "Covers burn scars and decreases the psychological impact during recovery",
        "option_d": "Increases venous return and cardiac output by normalizing fluid status",
        "correct_answer": "A"
      },
      {
        "number": 29,
        "question": "The nurse would expect to include which of the following when planning the management of the client with Lyme disease?",
        "option_a": "Complete bed rest for 6\u20138 weeks",
        "option_b": "Tetracycline treatment",
        "option_c": "IV amphotericin B",
        "option_d": "High-protein diet with limited fluids",
        "correct_answer": "B"
      },
      {
        "number": 30,
        "question": "The physician recommends immediate hospital admission for a client with PIH. She says to the nurse, \u2015It\u2018s not so easy for me to just go right to the hospital like that.\u2016 After acknowledging her feelings, which of these approaches by the nurse would probably be best?",
        "option_a": "Stress to the client that her husband would want her to do what is best for her health.",
        "option_b": "Explore with the client her perceptions of why she is unable to go to the hospital.",
        "option_c": "Repeat the physician\u2018s reasons for advising immediate hospitalization.",
        "option_d": "Explain to the client that she is ultimately responsible for her own welfare and that of her baby.",
        "correct_answer": "B"
      },
      {
        "number": 31,
        "question": "The child with iron poisoning is given IV deforoxamine mesylate (Desferal). Following administration, the child suffers hypotension, facial flushing, and urticari",
        "option_a": "The initial nursing intervention would be to: A. Discontinue the IV",
        "option_b": "Stop the medication, and begin a normal saline infusion",
        "option_c": "Take all vital signs, and report to the physician",
        "option_d": "Assess urinary output, and if it is 30 mL an hour, maintain current treatment",
        "correct_answer": "B"
      },
      {
        "number": 32,
        "question": "Provide the 1-minute Apgar score for an infant born with the following findings: Heart rate: Above 100 Respiratory effort: Slow, irregular Muscle tone: Some flexion of extremities Reflex irritability: Vigorous cry Color: Body pink, blue extremities",
        "option_a": "7",
        "option_b": "10",
        "option_c": "8",
        "option_d": "9",
        "correct_answer": "A"
      },
      {
        "number": 33,
        "question": "A client has been diagnosed as being preeclamptic. The physician orders magnesium sulfate. Magnesium sulfate (MgSO4) is used in the management of preeclampsia for:",
        "option_a": "Prevention of seizures",
        "option_b": "Prevention of uterine contractions",
        "option_c": "Sedation",
        "option_d": "Fetal lung protection",
        "correct_answer": "A"
      },
      {
        "number": 34,
        "question": "In the client with a diagnosis of coronary artery disease, the nurse would anticipate the complication of bradycardia with occlusion of which coronary artery?",
        "option_a": "Right coronary artery",
        "option_b": "Left main coronary artery",
        "option_c": "Circumflex coronary artery",
        "option_d": "Left anterior descending coronary artery",
        "correct_answer": "A"
      }
    ]
  },
  {
    "series_number": 2,
    "title": "NCLEX RN Practice Series 2",
    "question_count": 34,
    "questions": [
      {
        "number": 35,
        "question": "When the nurse is evaluating lab data for a client 18\u201324 hours after a major thermal burn, the expected physiological changes would include which of the following?",
        "option_a": "Elevated serum sodium",
        "option_b": "Elevated serum calcium",
        "option_c": "Elevated serum protein",
        "option_d": "Elevated hematocrit",
        "correct_answer": "D"
      },
      {
        "number": 36,
        "question": "What is the most effective method to identify early breast cancer lumps?",
        "option_a": "Mammograms every 3 years",
        "option_b": "Yearly checkups performed by physician",
        "option_c": "Ultrasounds every 3 years",
        "option_d": "Monthly breast self-examination",
        "correct_answer": "D"
      },
      {
        "number": 37,
        "question": "A client with a C-3\u20134 fracture has just arrived in the emergency room. The primary nursing intervention is:",
        "option_a": "Stabilization of the cervical spine",
        "option_b": "Airway assessment and stabilization",
        "option_c": "Confirmation of spinal cord injury",
        "option_d": "Normalization of intravascular volume",
        "correct_answer": "B"
      },
      {
        "number": 38,
        "question": "To ensure proper client education, the nurse should teach the client taking SL nitroglycerin to expect which of the following responses with administration?",
        "option_a": "Stinging, burning when placed under the tongue",
        "option_b": "Temporary blurring of vision",
        "option_c": "Generalized urticaria with prolonged use",
        "option_d": "Urinary frequency",
        "correct_answer": "A"
      },
      {
        "number": 39,
        "question": "Nursing care for the substance abuse client experiencing alcohol withdrawal delirium includes:",
        "option_a": "Maintaining seizure precautions",
        "option_b": "Restricting fluid intake",
        "option_c": "Increasing sensory stimuli",
        "option_d": "Applying ankle and wrist restraints",
        "correct_answer": "A"
      },
      {
        "number": 40,
        "question": "The day following his admission, the nurse sits down by a male client on the sofa in the dayroom. He was admitted for depression and thoughts of suicide. He looks at the nurse and says, \u2015My life is so bad no one can do anything to help me.\u2016 The most helpful initial response by the nurse would be:",
        "option_a": "\u2015It concerns me that you feel so badly when you have so many positive things in your life.\u2016",
        "option_b": "\u2015It will take a few weeks for you to feel better, so you need to be patient.\u2016",
        "option_c": "\u2015You are telling me that you are feeling hopeless at this point?\u2016",
        "option_d": "\u2015Let\u2018s play cards with some of the other clients to get your mind off your problems for now.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 41,
        "question": "The usual treatment for diabetes insipidus is with IM or SC injection of vasopressin tannate in oil. Nursing care related to the client receiving IM vasopressin tannate would include:",
        "option_a": "Weigh once a week and report to the physician any weight gain of10 lb.",
        "option_b": "Limit fluid intake to 500 mL/day.",
        "option_c": "Store the medication in a refrigerator and allow to stand at room temperature for 30 minutes prior to administration.",
        "option_d": "Hold the vial under warm water for 10\u201315 minutes and shake vigorously before drawing medication into the syringe.",
        "correct_answer": "D"
      },
      {
        "number": 42,
        "question": "Proper positioning for the child who is in Bryant\u2018s traction is:",
        "option_a": "Both hips flexed at a 90-degree angle with the knees extended and the buttocks elevated off the bed",
        "option_b": "Both legs extended, and the hips are not flexed",
        "option_c": "The affected leg extended with slight hip flexion",
        "option_d": "Both hips and knees maintained at a 90-degree flexion angle, and the back flat on the bed",
        "correct_answer": "A"
      },
      {
        "number": 43,
        "question": "The predominant purpose of the first Apgar scoring of a newborn is to:",
        "option_a": "Determine gross abnormal motor function",
        "option_b": "Obtain a baseline for comparison with the infant\u2018s future adaptation to the environment",
        "option_c": "Evaluate the infant\u2018s vital functions",
        "option_d": "Determine the extent of congenital malformations",
        "correct_answer": "C"
      },
      {
        "number": 44,
        "question": "Hematotympanum and otorrhea are associated with which of the following head injuries?",
        "option_a": "Basilar skull fracture",
        "option_b": "Subdural hematoma",
        "option_c": "Epidural hematoma",
        "option_d": "Frontal lobe fracture",
        "correct_answer": "A"
      },
      {
        "number": 45,
        "question": "Which of the following risk factors associated with breast cancer would a nurse consider most significant in a client\u2018s history?",
        "option_a": "Menarche after age 13",
        "option_b": "Nulliparity",
        "option_c": "Maternal family history of breast cancer",
        "option_d": "Early menopause",
        "correct_answer": "C"
      },
      {
        "number": 46,
        "question": "A client returns for her 6-month prenatal checkup and has gained 10 lb in 2 months. The results of her physical",
        "option_a": "She is compliant with her diet as previously taught.",
        "option_b": "She needs further instruction and reinforcement.",
        "option_c": "She needs to increase her caloric intake.",
        "option_d": "She needs to be placed on a restrictive diet immediately.",
        "correct_answer": "B"
      },
      {
        "number": 47,
        "question": "The priority nursing goal when working with an autistic child is:",
        "option_a": "To establish trust with the child",
        "option_b": "To maintain communication with the family",
        "option_c": "To promote involvement in school activities",
        "option_d": "To maintain nutritional requirements",
        "correct_answer": "A"
      },
      {
        "number": 48,
        "question": "The nurse would need to monitor the serum glucose levels of a client receiving which of the following medications, owing to its effects on glycogenolysis and insulin release?",
        "option_a": "Norepinephrine (Levophed)",
        "option_b": "Dobutamine (Dobutrex)",
        "option_c": "Propranolol (Inderal)",
        "option_d": "Epinephrine (Adrenalin)",
        "correct_answer": "D"
      },
      {
        "number": 49,
        "question": "When a client questions the nurse as to the purpose of exercise electrocardiography (ECG) in the diagnosis of cardiovascular disorders, the nurse\u2018s response should be based on the fact that:",
        "option_a": "The test provides a baseline for further tests",
        "option_b": "The procedure simulates usual daily activity and myocardial performance",
        "option_c": "The client can be monitored while cardiac conditioning and heart toning are done",
        "option_d": "Ischemia can be diagnosed because exercise increases O2 consumption and demand",
        "correct_answer": "D"
      },
      {
        "number": 50,
        "question": "The following medications were noted on review of the client\u2018s home medication profile. Which of the medications would most likely potentiate or elevate serum digoxin levels?",
        "option_a": "KCl",
        "option_b": "Thyroid agents",
        "option_c": "Quinidine",
        "option_d": "Theophylline",
        "correct_answer": "C"
      },
      {
        "number": 51,
        "question": "Which of the following statements relevant to a suicidal client is correct?",
        "option_a": "The more specific a client\u2018s plan, the more likely he or she is to attempt suicide.",
        "option_b": "A client who is unsuccessful at a first suicide attempt is not likely to make future attempts.",
        "option_c": "A client who threatens suicide is just seeking attention and is not likely to attempt suicide.",
        "option_d": "Nurses who care for a client who has attempted suicide should not make any reference to the word \u2015suicide\u2016 in order to protect the client\u2018s ego.",
        "correct_answer": "A"
      },
      {
        "number": 52,
        "question": "When assessing a child with diabetes insipidus, the nurse should be aware of the cardinal signs of:",
        "option_a": "Anemia and vomiting",
        "option_b": "Polyuria and polydipsia",
        "option_c": "Irritability relieved by feeding formula",
        "option_d": "Hypothermia and azotemia",
        "correct_answer": "B"
      },
      {
        "number": 53,
        "question": "The physician orders fluoxetine (Prozac) for a depressed client. Which of the following should the nurse remember about fluoxetine?",
        "option_a": "Because fluoxetine is a tricyclic antidepressant, it may precipitate a hypertensive crisis.",
        "option_b": "The therapeutic effect of the drug occurs 2\u20134 weeks after treatment is begun.",
        "option_c": "Foods such as aged cheese, yogurt, soy sauce, and bananas should not be eaten with this drug.",
        "option_d": "Fluoxetine may be administered safely in combination with monoamine oxidase (MAO) inhibitors.",
        "correct_answer": "B"
      },
      {
        "number": 54,
        "question": "A child sustains a supracondylar fracture of the femur. When assessing for vascular injury, the nurse should be alert for the signs of ischemia, which include:",
        "option_a": "Bleeding, bruising, and hemorrhage",
        "option_b": "Increase in serum levels of creatinine, alkaline phosphatase, and aspartate transaminase",
        "option_c": "Pain, pallor, pulselessness, paresthesia, and paralysis",
        "option_d": "Generalized swelling, pain, and diminished functional use with muscle rigidity and crepitus",
        "correct_answer": "C"
      },
      {
        "number": 55,
        "question": "A client with a diagnosis of C-4 injury has been stabilized and is ready for discharge. Because this client is at risk for autonomic dysreflexia, he and his family should be instructed to assess for and report:",
        "option_a": "Dizziness and tachypnea",
        "option_b": "Circumoral pallor and lightheadedness",
        "option_c": "Headache and facial flushing",
        "option_d": "Pallor and itching of the face and neck",
        "correct_answer": "C"
      },
      {
        "number": 56,
        "question": "A client with emphysema is placed on diuretics. In order to avoid potassium depletion as a side effect of the drug therapy, which of the following foods should be included in his diet?",
        "option_a": "Celery",
        "option_b": "Potatoes",
        "option_c": "Tomatoes",
        "option_d": "Liver",
        "correct_answer": "B"
      },
      {
        "number": 57,
        "question": "Which of the following signs and symptoms indicates a tension pneumothorax as compared to an open pneumothorax?",
        "option_a": "Ventilation-perfusion (V./Q.) mismatch",
        "option_b": "Hypoxemia and respiratory acidosis",
        "option_c": "Mediastinal tissue and organ shifting",
        "option_d": "Decreased tidal volume and tachypnea",
        "correct_answer": "C"
      },
      {
        "number": 58,
        "question": "A 38-year-old pregnant woman visits her nurse practitioner for her regular prenatal checkup. She is 30 weeks\u2018 gestation. The nurse should be alert to which condition related to her age?",
        "option_a": "Iron-deficiency anemia",
        "option_b": "Sexually transmitted disease (STD)",
        "option_c": "Intrauterine growth retardation",
        "option_d": "Pregnancy-induced hypertension (PIH)",
        "correct_answer": "D"
      },
      {
        "number": 59,
        "question": "A type I diabetic client is diagnosed with cellulitis in his right lower extremity. The nurse would expect which of the following to be present in relation to his blood sugar level?",
        "option_a": "A normal blood sugar level",
        "option_b": "A decreased blood sugar level",
        "option_c": "An increased blood sugar level",
        "option_d": "Fluctuating levels with a predawn increase",
        "correct_answer": "C"
      },
      {
        "number": 60,
        "question": "A laboratory technique specific for diagnosing Lyme disease is:",
        "option_a": "Polymerase chain reaction",
        "option_b": "Heterophil antibody test",
        "option_c": "Decreased serum calcium level",
        "option_d": "Increased serum potassium level",
        "correct_answer": "A"
      },
      {
        "number": 61,
        "question": "The cardiac client who exhibits the symptoms of disorientation, lethargy, and seizures may be exhibiting a toxic reaction to:",
        "option_a": "Digoxin (Lanoxin)",
        "option_b": "Lidocaine (Xylocaine)",
        "option_c": "Quinidine gluconate or sulfate (Quinaglute, Quinidex)",
        "option_d": "Nitroglycerin IV (Tridil)",
        "correct_answer": "B"
      },
      {
        "number": 62,
        "question": "A 27-year-old man was diagnosed with type I diabetes 3 months ago. Two weeks ago he complained of pain, redness, and tenderness in his right lower leg. He is admitted to the hospital with a slight elevation of temperature and vague complaints of \u2015not feeling well.\u2016 At 4:30 PM on the day of his admission, his blood glucose level is 50 mg; dinner will be served at 5:00 PM. The best nursing action would be to:",
        "option_a": "Give him 3 tbsp of sugar dissolved in 4 oz of grape juice to drink",
        "option_b": "Ask him to dissolve three pieces of hard candy in his mouth",
        "option_c": "Have him drink 4 oz of orange juice",
        "option_d": "Monitor him closely until dinner arrives",
        "correct_answer": "C"
      },
      {
        "number": 63,
        "question": "After 3 weeks of treatment, a severely depressed client suddenly begins to feel better and starts interacting appropriately with other clients and staff. The nurse knows that this client has an increased risk for:",
        "option_a": "Suicide",
        "option_b": "Exacerbation of depressive symptoms",
        "option_c": "Violence toward others",
        "option_d": "Psychotic behavior",
        "correct_answer": "A"
      },
      {
        "number": 64,
        "question": "Discharge teaching was effective if the parents of a child with atopic dermatitis could state the importance of:",
        "option_a": "Maintaining a high-humidified environment",
        "option_b": "Furry, soft stuffed animals for play",
        "option_c": "Showering 3\u20134 times a day",
        "option_d": "Wrapping hands in soft cotton gloves",
        "correct_answer": "D"
      },
      {
        "number": 65,
        "question": "Which of the following would differentiate acute from chronic respiratory acidosis in the assessment of the trauma client?",
        "option_a": "Increased PaCO2",
        "option_b": "Decreased PaO2",
        "option_c": "Increased HCO3",
        "option_d": "Decreased base excess",
        "correct_answer": "C"
      },
      {
        "number": 66,
        "question": "When a client is receiving vasoactive therapy IV, such as dopamine (Intropin), and extravasation occurs, the nurse should be prepared to administer which of the following medications directly into the site?",
        "option_a": "Phentolamine (Regitine)",
        "option_b": "Epinephrine",
        "option_c": "Phenylephrine (Neo-Synephrine)",
        "option_d": "Sodium bicarbonate",
        "correct_answer": "A"
      },
      {
        "number": 67,
        "question": "A male client receives 10 U of regular human insulin SC at 9:00 AM. The nurse would expect peak action from this injection to occur at:",
        "option_a": "9:30 AM",
        "option_b": "10:30 AM",
        "option_c": "12 noon",
        "option_d": "4:00 PM",
        "correct_answer": "C"
      },
      {
        "number": 68,
        "question": "As the nurse assesses a male adolescent with chlamydia, the nurse determines that a sign of chlamydia is:",
        "option_a": "Enlarged penis",
        "option_b": "Secondary lymphadenitis",
        "option_c": "Epididymitis",
        "option_d": "Hepatomegaly",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 3,
    "title": "NCLEX RN Practice Series 3",
    "question_count": 34,
    "questions": [
      {
        "number": 69,
        "question": "One of the most dramatic and serious complications associated with bacterial meningitis is WaterhouseFriderichsen syndrome, which is:",
        "option_a": "Peripheral circulatory collapse",
        "option_b": "Syndrome of inappropriate antiduretic hormone",
        "option_c": "Cerebral edema resulting in hydrocephalus",
        "option_d": "Auditory nerve damage resulting in permanent hearing loss",
        "correct_answer": "A"
      },
      {
        "number": 70,
        "question": "Priapism may be a sign of:",
        "option_a": "Altered neurological function",
        "option_b": "Imminent death",
        "option_c": "Urinary incontinence",
        "option_d": "Reproductive dysfunction",
        "correct_answer": "A"
      },
      {
        "number": 71,
        "question": "When assessing fetal heart rate status during labor, the monitor displays late decelerations with tachycardia and decreasing variability. What action should the nurse take?",
        "option_a": "Continue monitoring because this is a normal occurrence.",
        "option_b": "Turn client on right side.",
        "option_c": "Decrease IV fluids.",
        "option_d": "Report to physician or midwife.",
        "correct_answer": "D"
      },
      {
        "number": 72,
        "question": "The most commonly known vectors of Lyme disease are:",
        "option_a": "Mites",
        "option_b": "Fleas",
        "option_c": "Ticks",
        "option_d": "Mosquitoes",
        "correct_answer": "C"
      },
      {
        "number": 73,
        "question": "A child is admitted to the emergency room with her mother. Her mother states that she has been exposed to chickenpox. During the assessment, the nurse would note a characteristic rash:",
        "option_a": "That is covered with vesicular scabs all in the macular stage",
        "option_b": "That appears profusely on the trunk and sparsely on the extremities",
        "option_c": "That first appears on the neck and spreads downward",
        "option_d": "That appears especially on the cheeks, which gives a \u2015slapped-cheek\u2016 appearance",
        "correct_answer": "B"
      },
      {
        "number": 74,
        "question": "A client is 6 weeks pregnant. During her first prenatal visit, she asks, \u2015How much alcohol is safe to drink during pregnancy?\u2016 The nurse\u2018s response is:",
        "option_a": "Up to 1 oz daily",
        "option_b": "Up to 2 oz daily",
        "option_c": "Up to 4 oz weekly",
        "option_d": "No alcohol",
        "correct_answer": "D"
      },
      {
        "number": 75,
        "question": "Which of the following would the nurse expect to find following respiratory assessment of a client with advanced emphysema?",
        "option_a": "Distant breath sounds",
        "option_b": "Increased heart sounds",
        "option_c": "Decreased anteroposterior chest diameter",
        "option_d": "Collapsed neck veins",
        "correct_answer": "A"
      },
      {
        "number": 76,
        "question": "Which of the following would have the physiological effect of decreasing intracranial pressure (ICP)?",
        "option_a": "Increased core body temperature",
        "option_b": "Decreased serum osmolality",
        "option_c": "Administration of hypo-osmolar fluids",
        "option_d": "Decreased PaCO2",
        "correct_answer": "D"
      },
      {
        "number": 77,
        "question": "When teaching a mother of a 4-month-old with diarrhea about the importance of preventing dehydration, the nurse would inform the mother about the importance of feeding her child:",
        "option_a": "Fruit juices",
        "option_b": "Diluted carbonated drinks",
        "option_c": "Soy-based, lactose-free formula",
        "option_d": "Regular formulas mixed with electrolyte solutions",
        "correct_answer": "C"
      },
      {
        "number": 78,
        "question": "The nurse is aware that nutrition is an important aspect of care for a client with hepatitis. Which of the following diets would be most therapeutic?",
        "option_a": "High protein and low carbohydrate",
        "option_b": "Low calorie and low protein",
        "option_c": "High carbohydrate and high calorie",
        "option_d": "Low carbohydrate and high calorie",
        "correct_answer": "C"
      },
      {
        "number": 79,
        "question": "A long-term goal for the nurse in planning care for a depressed, suicidal client would be to:",
        "option_a": "Provide him with a safe and structured environment.",
        "option_b": "Assist him to develop more effective coping mechanisms.",
        "option_c": "Have him sign a \u2015no-suicide\u2016 contract.",
        "option_d": "Isolate him from stressful situations that may precipitate a depressive episode.",
        "correct_answer": "B"
      },
      {
        "number": 80,
        "question": "The primary reason that an increase in heart rate (100 bpm) detrimental to the client with a myocardial infarction (MI) is that:",
        "option_a": "Stroke volume and blood pressure will drop proportionately",
        "option_b": "Systolic ejection time will decrease, thereby decreasing cardiac output",
        "option_c": "Decreased contractile strength will occur due to decreased filling time",
        "option_d": "Decreased coronary artery perfusion due to decreased diastolic filling time will occur, which will increase ischemic damage to the myocardium",
        "correct_answer": "D"
      },
      {
        "number": 81,
        "question": "Which of the following nursing orders should be included in the plan of care for a client with hepatitis C?",
        "option_a": "The nurse should use universal precautions when obtaining blood samples.",
        "option_b": "Total bed rest should be maintained until the client is asymptomatic.",
        "option_c": "The client should be instructed to maintain a low semi-Fowler position when eating meals.",
        "option_d": "The nurse should administer an alcohol backrub at bedtime.",
        "correct_answer": "A"
      },
      {
        "number": 82,
        "question": "When inspecting a cardiovascular client, the nurse notes that he needs to sit upright to breathe. This behavior is most indicative of:",
        "option_a": "Pericarditis",
        "option_b": "Anxiety",
        "option_c": "Congestive heart failure",
        "option_d": "Angina",
        "correct_answer": "C"
      },
      {
        "number": 83,
        "question": "The physician has ordered that a daily exercise program be instituted by a client with type I diabetes following his discharge from the hospital. Discharge instructions about exercise should include which of the following?",
        "option_a": "Exercise should be performed 30 minutes before meals.",
        "option_b": "A snack may be needed before and/or during exercise.",
        "option_c": "Hyperglycemia may occur 2\u20134 hours after exercise.",
        "option_d": "The blood glucose level should be 100 mg or below before exercise is begun.",
        "correct_answer": "B"
      },
      {
        "number": 84,
        "question": "The nurse notes hyperventilation in a client with a thermal injury. She recognizes that this may be a reaction to which of the following medications if applied in large amounts?",
        "option_a": "Neosporin sulfate",
        "option_b": "Mafenide acetate",
        "option_c": "Silver sulfadiazine",
        "option_d": "Povidone-iodine",
        "correct_answer": "B"
      },
      {
        "number": 85,
        "question": "The nurse practitioner determines that a client is approximately 9 weeks\u2018 gestation. During the visit, the practitioner informs the client about symptoms of physical changes that she will experience during her first trimester, such as:",
        "option_a": "Nausea and vomiting",
        "option_b": "Quickening",
        "option_c": "A 6\u20138 lb weight gain",
        "option_d": "Abdominal enlargement",
        "correct_answer": "A"
      },
      {
        "number": 86,
        "question": "Which of the following medications requires close observation for bronchospasm in the client with chronic obstructive pulmonary disease or asthma?",
        "option_a": "Verapamil (Isoptin)",
        "option_b": "Amrinone (Inocor)",
        "option_c": "Epinephrine (Adrenalin)",
        "option_d": "Propranolol (Inderal)",
        "correct_answer": "D"
      },
      {
        "number": 87,
        "question": "Which of the following procedures is necessary to establish a definitive diagnosis of breast cancer?",
        "option_a": "Diaphanography",
        "option_b": "Mammography",
        "option_c": "Thermography",
        "option_d": "Breast tissue biopsy",
        "correct_answer": "D"
      },
      {
        "number": 88,
        "question": "Pregnant women with diabetes often have problems related to the effectiveness of insulin in controlling their glucose levels during their second half of pregnancy. The nurse teaches the client that this is due to:",
        "option_a": "Decreased glomerular filtration and increased tubular absorption",
        "option_b": "Decreased estrogen levels",
        "option_c": "Decreased progesterone levels",
        "option_d": "Increased human placental lactogen levels",
        "correct_answer": "D"
      },
      {
        "number": 89,
        "question": "A pregnant woman at 36 weeks\u2018 gestation is followed for PIH and develops proteinuri",
        "option_a": "To increase protein in her diet, which of the following foods will provide the greatest amount of protein when added to her intake of 100 mL of milk? A. Fifty milliliters light cream and 2 tbsp corn syrup",
        "option_b": "Thirty grams powdered skim milk and 1 egg",
        "option_c": "One small scoop (90 g) vanilla ice cream and 1 tbsp chocolate syrup",
        "option_d": "One package vitamin-fortified gelatin drink",
        "correct_answer": "B"
      },
      {
        "number": 90,
        "question": "A 3-year-old child is hospitalized with burns covering her trunk and lower extremities. Which of the following would the nurse use to assess adequacy of fluid resuscitation in the burned child?",
        "option_a": "Blood pressure",
        "option_b": "Serum potassium level",
        "option_c": "Urine output",
        "option_d": "Pulse rate",
        "correct_answer": "C"
      },
      {
        "number": 91,
        "question": "The medication that best penetrates eschar is:",
        "option_a": "Mafenide acetate (Sulfamylon)",
        "option_b": "Silver sulfadiazine (Silvadene)",
        "option_c": "Neomycin sulfate (Neosporin)",
        "option_d": "Povidone-iodine (Betadine)",
        "correct_answer": "A"
      },
      {
        "number": 92,
        "question": "A 25-year-old client believes she may be pregnant with her first child. She schedules an obstetric examination with the nurse practitioner to determine the status of her possible pregnancy. Her last menstrual period began May 20, and her estimated date of confinement using N\u00e4gele\u2018s rule is:",
        "option_a": "March 27",
        "option_b": "February 1",
        "option_c": "February 27",
        "option_d": "January 3",
        "correct_answer": "C"
      },
      {
        "number": 93,
        "question": "The therapeutic blood-level range for lithium is:",
        "option_a": "0.25\u20131.0 mEq/L",
        "option_b": "0.5\u20131.5 mEq/L",
        "option_c": "1.0\u20132.0 mEq/L",
        "option_d": "2.0\u20132.5 mEq/L",
        "correct_answer": "B"
      },
      {
        "number": 94,
        "question": "Which of the following ECG changes would be seen as a positive myocardial stress test response?",
        "option_a": "Hyperacute T wave",
        "option_b": "Prolongation of the PR interval",
        "option_c": "ST-segment depression",
        "option_d": "Pathological Q wave",
        "correct_answer": "C"
      },
      {
        "number": 95,
        "question": "A psychotic client who believes that he is God and rules all the universe is experiencing which type of delusion?",
        "option_a": "Somatic",
        "option_b": "Grandiose",
        "option_c": "Persecutory",
        "option_d": "Nihilistic",
        "correct_answer": "B"
      },
      {
        "number": 96,
        "question": "During burn therapy, morphine is primarily administered IV for pain management because this route:",
        "option_a": "Delays absorption to provide continuous pain relief",
        "option_b": "Facilitates absorption because absorption from muscles is not dependable",
        "option_c": "Allows for discontinuance of the medication if respiratory depression develops",
        "option_d": "Avoids causing additional pain from IM injections",
        "correct_answer": "B"
      },
      {
        "number": 97,
        "question": "Assessment of the client with pericarditis may reveal which of the following?",
        "option_a": "Ventricular gallop and substernal chest pain",
        "option_b": "Narrowed pulse pressure and shortness of breath",
        "option_c": "Pericardial friction rub and pain on deep inspiration",
        "option_d": "Pericardial tamponade and widened pulse pressure",
        "correct_answer": "C"
      },
      {
        "number": 98,
        "question": "A client who has sustained a basilar skull fracture exhibits blood-tinged drainage from his nose. After establishing a clear airway, administering supplemental O2, and establishing IV access, the next nursing intervention would be to:",
        "option_a": "Pass a nasogastric tube through the left nostril",
        "option_b": "Place a 4 X 4 gauze in the nares to impede the flow",
        "option_c": "Gently suction the nasal drainage to protect the airway",
        "option_d": "Perform a halo test and glucose level on the drainage",
        "correct_answer": "D"
      },
      {
        "number": 99,
        "question": "To appropriately monitor therapy and client progress, the nurse should be aware that increased myocardial work and O2 demand will occur with which of the following?",
        "option_a": "Positive inotropic therapy",
        "option_b": "Negative chronotropic therapy",
        "option_c": "Increase in balance of myocardial O2 supply and demand",
        "option_d": "Afterload reduction therapy",
        "correct_answer": "A"
      },
      {
        "number": 100,
        "question": "The most important reason to closely assess circumferential burns at least every hour is that they may result in:",
        "option_a": "Hypovolemia",
        "option_b": "Renal damage",
        "option_c": "Ventricular arrhythmias",
        "option_d": "Loss of peripheral pulses",
        "correct_answer": "D"
      },
      {
        "number": 101,
        "question": "A pregnant client comes to the office for her first prenatal examination at 10 weeks. She has been pregnant twice before; the first delivery produced a viable baby girl at 39 weeks 3 years ago; the second pregnancy produced a viable baby boy at 36 weeks 2 years ago. Both children are living and well. Using the GTPAL system to record her obstetrical history, the nurse should record:",
        "option_a": "3-2-0-0-2",
        "option_b": "2-2-0-2-2",
        "option_c": "3-1-1-0-2",
        "option_d": "2-1-1-0-2",
        "correct_answer": "C"
      },
      {
        "number": 102,
        "question": "A 68-year-old woman is admitted to the hospital with chronic obstructive pulmonary disease (COPD). She is started on an aminophylline infusion. Three days later she is breathing easier. A serum theophylline level is drawn. Which of the following values represents a therapeutic level?",
        "option_a": "14 \u00b5 g/mL",
        "option_b": "25 \u00b5 g/mL",
        "option_c": "4 \u00b5 g/mL",
        "option_d": "30 \u00b5 g/mL",
        "correct_answer": "A"
      }
    ]
  },
  {
    "series_number": 4,
    "title": "NCLEX RN Practice Series 4",
    "question_count": 34,
    "questions": [
      {
        "number": 103,
        "question": "A nasogastric (NG) tube inserted preoperatively is attached to low, intermittent suctions. A client with an NG tube exhibits these symptoms: He is restless; serum electrolytes are Na 138, K 4.0, blood pH 7.53. This client is most likely experiencing:",
        "option_a": "Hyperkalemia",
        "option_b": "Hyponatremia",
        "option_c": "Metabolic acidosis",
        "option_d": "Metabolic alkalosis",
        "correct_answer": "D"
      },
      {
        "number": 104,
        "question": "A client is in early labor. Her fetus is in a left occipitoanterior (LOA) position; fetal heart sounds are best",
        "option_a": "Below the umbilicus toward left side of mother\u2018s abdomen",
        "option_b": "Below the umbilicus toward right side of mother\u2018s abdomen",
        "option_c": "At the umbilicus",
        "option_d": "Above the umbilicus to the left side of mother\u2018s abdomen",
        "correct_answer": "A"
      },
      {
        "number": 105,
        "question": "A mother came to the pediatric clinic with her 17- month-old child. The mother would like to begin toilet training. What should the nurse teach her about implementing toilet training?",
        "option_a": "Take two or three favorite toys with the child.",
        "option_b": "Have a child-sized toilet seat or training potty on hand.",
        "option_c": "Explain to the child she is going to \u2015void\u2016 and \u2015defecate.\u2016",
        "option_d": "Show disapproval if she does not void or defecate.",
        "correct_answer": "B"
      },
      {
        "number": 106,
        "question": "Which one of the following is considered a reliable indicator for assessing the adequacy of fluid resuscitation in a 3-year-old child who suffered partial- and fullthickness burns to 25% of her body?",
        "option_a": "Urine output",
        "option_b": "Edema",
        "option_c": "Hypertension",
        "option_d": "Bulging fontanelle",
        "correct_answer": "A"
      },
      {
        "number": 107,
        "question": "The nurse working in a prenatal clinic needs to be alert to the cardinal signs and symptoms of PIH because:",
        "option_a": "Immediate treatment of mild PIH includes the administration of a variety of medications",
        "option_b": "Psychological counseling is indicated to reduce the emotional stress causing the blood pressure elevation",
        "option_c": "Self-discipline is required to control caloric intake throughout the pregnancy",
        "option_d": "The client may not recognize the early symptoms of PIH",
        "correct_answer": "D"
      },
      {
        "number": 108,
        "question": "A client is admitted to the labor unit. On vaginal examination, the presenting part in a cephalic presentation was at station plus two. Station 12 means that the:",
        "option_a": "Presenting part is 2 cm above the level of the ischial spines",
        "option_b": "Biparietal diameter is at the level of the ischial spines",
        "option_c": "Presenting part is 2 cm below the level of the ischial spines",
        "option_d": "Biparietal diameter is 5 cm above the ischial spines",
        "correct_answer": "C"
      },
      {
        "number": 109,
        "question": "To prevent fungal infections of the mouth and throat, the nurse should teach clients on inhaled steroids to:",
        "option_a": "Rinse the plastic holder that aerosolizes the drug with hydrogen peroxide every other day",
        "option_b": "Rinse the mouth and gargle with warm water after each use of the inhaler",
        "option_c": "Take antacids immediately before inhalation to neutralize mucous membranes and prevent infection",
        "option_d": "Rinse the mouth before each use to eliminate colonization of bacteria",
        "correct_answer": "B"
      },
      {
        "number": 110,
        "question": "A 16-year-old client comes to the prenatal clinic for her monthly appointment. She has gained 14 lb from her 7th to 8th month; her face and hands indicate edem",
        "option_a": "She is diagnosed as having PIH and referred to the high-risk prenatal clinic. The client\u2018s weight increase is most likely due to: A. Overeating and subsequent obesity",
        "option_b": "Obesity prior to conception",
        "option_c": "Hypertension due to kidney lesions",
        "option_d": "Fluid retention",
        "correct_answer": "D"
      },
      {
        "number": 111,
        "question": "A 6-month-old infant has developmental delays. His weight falls below the 5th percentile when plotted on a growth chart. A diagnosis of failure to thrive is made. What behaviors might indicate the possibility of maternal deprivation?",
        "option_a": "Responsive to touch, wants to be held",
        "option_b": "Uncomforted by touch, refuses bottle",
        "option_c": "Maintains eye-to-eye contact",
        "option_d": "Finicky eater, easily pacified, cuddly",
        "correct_answer": "B"
      },
      {
        "number": 112,
        "question": "The nurse teaches a male client ways to reduce the risks associated with furosemide therapy. Which of the following indicates that he understands this teaching?",
        "option_a": "\u2015I\u2018ll be sure to rise slowly and sit for a few minutes after lying down.\u2016",
        "option_b": "\u2015I\u2018ll be sure to walk at least 2\u20133 blocks every day.\u2016",
        "option_c": "\u2015I\u2018ll be sure to restrict my fluid intake to four or five glasses a day.\u2016",
        "option_d": "\u2015I\u2018ll be sure not to take any more aspirin while I am",
        "correct_answer": "A"
      },
      {
        "number": 113,
        "question": "A client is admitted to the hospital for an induction of labor owing to a gestation of 42 weeks confirmed by dates and ultrasound. When she is dilated 3 cm, she has a contraction of 70 seconds. She is receiving oxytocin. The nurse\u2018s first intervention should be to:",
        "option_a": "Check FHT",
        "option_b": "Notify the attending physician",
        "option_c": "Turn off the IV oxytocin",
        "option_d": "Prepare for the delivery because the client is probably in transition",
        "correct_answer": "C"
      },
      {
        "number": 114,
        "question": "A male client is scheduled for a liver biopsy. In preparing him for this test, the nurse should:",
        "option_a": "Explain that he will be kept NPO for 24 hours before the exam",
        "option_b": "Practice with him so he will be able to hold his breath for 1 minute",
        "option_c": "Explain that he will be receiving a laxative to prevent a distended bowel from applying pressure on the liver",
        "option_d": "Explain that his vital signs will be checked frequently after the test",
        "correct_answer": "D"
      },
      {
        "number": 115,
        "question": "After a liver biopsy, the best position for the client is:",
        "option_a": "High Fowler",
        "option_b": "Prone",
        "option_c": "Supine",
        "option_d": "Right lateral",
        "correct_answer": "D"
      },
      {
        "number": 116,
        "question": "In assisting preconceptual clients, the nurse should teach that the corpus luteum secretes progesterone, which thickens the endometrial lining in which of the phases of the menstrual cycle?",
        "option_a": "Menstrual phase",
        "option_b": "Proliferative phase",
        "option_c": "Secretory phase",
        "option_d": "Ischemic phase",
        "correct_answer": "C"
      },
      {
        "number": 117,
        "question": "A 4-year-old child is being discharged from the hospital after being treated for severe croup. Which one of the following instructions should the nurse give to the child\u2018s mother for the home treatment of croup?",
        "option_a": "Take him in the bathroom, turn on the hot water, and close the door.",
        "option_b": "Give him a dose of antihistamine.",
        "option_c": "Give large amounts of clear liquids if drooling occurs.",
        "option_d": "Place him near a cool mist vaporizer and encourage crying.",
        "correct_answer": "A"
      },
      {
        "number": 118,
        "question": "A male client is started on IV anticoagulant therapy with heparin. Which of the following laboratory studies will be ordered to monitor the therapeutic effects of heparin?",
        "option_a": "Partial thromboplastin time",
        "option_b": "Hemoglobin",
        "option_c": "Red blood cell (RBC) count",
        "option_d": "Prothrombin time",
        "correct_answer": "A"
      },
      {
        "number": 119,
        "question": "A 16-year-old student has a long history of bronchial asthma and has experienced several severe asthmatic attacks during the school year. The school nurse is required to administer 0.2 mL of 1/1000 solution of epinephrine SC during an asthma attack. How does the school nurse evaluate the effectiveness of this intervention?",
        "option_a": "Increased pulse rate",
        "option_b": "Increased expectorate of secretions",
        "option_c": "Decreased inspiratory difficulty",
        "option_d": "Increased respiratory rate",
        "correct_answer": "C"
      },
      {
        "number": 120,
        "question": "Nursing interventions designed to decrease the risk of infection in a client with an indwelling catheter include:",
        "option_a": "Cleanse area around the meatus twice a day",
        "option_b": "Empty the catheter drainage bag at least daily",
        "option_c": "Change the catheter tubing and bag every 48 hours",
        "option_d": "Maintain fluid intake of 1200\u20131500 mL every day",
        "correct_answer": "A"
      },
      {
        "number": 121,
        "question": "A 23-year-old borderline client is admitted to an inpatient psychiatric unit following an impulsive act of selfmutilation. A few hours after admission, she requests special privileges, and when these are not granted, she stands up and angrily shouts that the people on the unit do not care, and she storms across the room. The nurse should respond to this behavior by:",
        "option_a": "Placing her in seclusion until the behavior is under control",
        "option_b": "Walking up to the client and touching her on the arm to get her attention",
        "option_c": "Communicating a desire to assist the client to regain control, offering a one-to-one session in a quiet area",
        "option_d": "Confronting the client, letting her know the consequences for getting angry and disrupting the unit",
        "correct_answer": "C"
      },
      {
        "number": 122,
        "question": "A client is being discharged with albuterol (Proventil) and beclomethasone dipropionate (Vanceril) to be administered via inhalation three times a day and at bedtime. Client teaching regarding the sequential order in which the drugs should be administered includes:",
        "option_a": "Glucocorticoid followed by the bronchodilator",
        "option_b": "Bronchodilator followed by the glucocorticoid",
        "option_c": "Alternate successive administrations",
        "option_d": "According to the client\u2018s preference",
        "correct_answer": "B"
      },
      {
        "number": 123,
        "question": "A gravida 2 para 1 client delivered a full-term newborn 12 hours ago. The nurse finds her uterus to be boggy, high, and deviated to the right. The most appropriate nursing action is to:",
        "option_a": "Notify the physician",
        "option_b": "Place the client on a pad count",
        "option_c": "Massage the uterus and re-evaluate in 30 minutes",
        "option_d": "Have the client void and then re-evaluate the fundus",
        "correct_answer": "D"
      },
      {
        "number": 124,
        "question": "During a client\u2018s first postpartum day, the nurse assessed that the fundus was located laterally to the umbilicus. This may be due to:",
        "option_a": "Endometritis",
        "option_b": "Fibroid tumor on the uterus",
        "option_c": "Displacement due to bowel distention",
        "option_d": "Urine retention or a distended bladder",
        "correct_answer": "D"
      },
      {
        "number": 125,
        "question": "The nurse instructs a pregnant client (G2P1) to rest in a side-lying position and avoid lying flat on her back. The nurse explains that this is to avoid \u2015vena caval syndrome,\u2016 a condition which:",
        "option_a": "Occurs when blood pressure increases sharply with changes in position",
        "option_b": "Results when blood flow from the extremities is blocked or slowed",
        "option_c": "Is seen mainly in first pregnancies",
        "option_d": "May require medication if positioning does not help",
        "correct_answer": "B"
      },
      {
        "number": 126,
        "question": "The nurse enters the playroom and finds an 8-year-old child having a grand mal seizure. Which one of the following actions should the nurse take?",
        "option_a": "Place a tongue blade in the child\u2018s mouth.",
        "option_b": "Restrain the child so he will not injure himself.",
        "option_c": "Go to the nurses station and call the physician.",
        "option_d": "Move furniture out of the way and place a blanket under his head.",
        "correct_answer": "D"
      },
      {
        "number": 127,
        "question": "A mother frantically calls the emergency room (ER) asking what to do about her 3-year-old girl who was found eating pills out of a bottle in the medicine cabinet. The ER nurse tells the mother to:",
        "option_a": "Give the child 15 mL of syrup of ipecac.",
        "option_b": "Give the child 10 mL of syrup of ipecac with a sip of water.",
        "option_c": "Give the child 1 cup of water to induce vomiting.",
        "option_d": "Bring the child to the ER immediately.",
        "correct_answer": "D"
      },
      {
        "number": 128,
        "question": "A mother continues to breast-feed her 3-month-old infant. She tells the nurse that over the past 3 days she has not been producing enough milk to satisfy the infant. The nurse advises the mother to do which of the following?",
        "option_a": "\u2015Start the child on solid food.\u2016",
        "option_b": "\u2015Nurse the child more frequently during this growth spurt.\u2016",
        "option_c": "\u2015Provide supplements for the child between breastfeeding so you will have enough milk.\u2016",
        "option_d": "\u2015Wait 4 hours between feedings so that your breasts will fill up.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 129,
        "question": "A client is being discharged and will continue enteral feedings at home. Which of the following statements by a family member indicates the need for further teaching?",
        "option_a": "\u2015If he develops diarrhea lasting for more than 2\u20133 days, I will contact the doctor or nurse.\u2016",
        "option_b": "\u2015I should anticipate that he will gain about 1 lb/day now that he is on continuous feedings.\u2016",
        "option_c": "\u2015It is important to keep the head of his bed elevated or sit him in the chair during feedings.\u2016",
        "option_d": "\u2015I should use prepared or open formula within 24 hours and store unused portions in the refrigerator.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 130,
        "question": "Which nursing implication is appropriate for a client undergoing a paracentesis?",
        "option_a": "Have the client void before the procedure.",
        "option_b": "Keep the client NPO.",
        "option_c": "Observe the client for hypertension following the procedure.",
        "option_d": "Place the client on the right side following the procedure.",
        "correct_answer": "A"
      },
      {
        "number": 131,
        "question": "One of the medications that is prescribed for a male client is furosemide (Lasix) 80 mg bid. To reduce his risk of falls, the nurse would teach him to take this medication:",
        "option_a": "On arising and no later than 6 PM",
        "option_b": "At evenly spaced intervals, such as 8 AM and 8 PM",
        "option_c": "With at least one glass of water per pill",
        "option_d": "With breakfast and at bedtime",
        "correct_answer": "A"
      },
      {
        "number": 132,
        "question": "The nurse observes that a client has difficulty chewing and swallowing her food. A nursing response designed to reduce this problem would include:",
        "option_a": "Ordering a full liquid diet for her",
        "option_b": "Ordering five small meals for her",
        "option_c": "Ordering a mechanical soft diet for her",
        "option_d": "Ordering a pur\u00e9ed diet for her",
        "correct_answer": "C"
      },
      {
        "number": 133,
        "question": "In performing the initial nursing assessment on a client at the prenatal clinic, the nurse will know that which of the following alterations is abnormal during pregnancy?",
        "option_a": "Striae gravidarum",
        "option_b": "Chloasma",
        "option_c": "Dysuria",
        "option_d": "Colostrum",
        "correct_answer": "C"
      },
      {
        "number": 134,
        "question": "Assessment of severe depression in a client reveals feelings of hopelessness, worthlessness; inability to feel pleasure; sleep, psychomotor, and nutritional alterations; delusional thinking; negative view of self; and feelings of abandonment. These clinical features of the client\u2018s depression alert the nurse to prioritize problems and care by addressing which of the following problems first:",
        "option_a": "Nutritional status",
        "option_b": "Impaired thinking",
        "option_c": "Possible harm to self",
        "option_d": "Rest and activity impairment",
        "correct_answer": "C"
      },
      {
        "number": 135,
        "question": "The nurse is teaching a mother care of her child\u2018s spica cast. The mother states that he complains of itching under the edge of the cast. One nonpharmacological technique the nurse might suggest would be:",
        "option_a": "\u2015Blowing air under the cast using a hair dryer on cool setting often relieves itching.\u2016",
        "option_b": "\u2015Slide a ruler under the cast and scratch the area.\u2016",
        "option_c": "\u2015Guide a towel under and through the cast and move it back and forth to relieve the itch.\u2016",
        "option_d": "\u2015Gently thump on cast to dislodge dried skin that causes the itching.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 136,
        "question": "A 56-year-old psychiatric inpatient has had recurring episodes of depression and chronic low self-esteem. She feels that her family does not want her around, experiences a sense of helplessness, and has a negative view of herself. To assist the client in focusing on her strengths and positive traits, a strategy used by the nurse would be to:",
        "option_a": "Tell the client to attend all structured activities on the unit",
        "option_b": "Encourage or direct client to attend activities that offer simple methods to attain success",
        "option_c": "Increase the client\u2018s self-esteem by asking that she make all decisions regarding attendance in group activities",
        "option_d": "Not allow any dependent behaviors by the client because she must learn independence and will have to ask for any assistance from staff",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 5,
    "title": "NCLEX RN Practice Series 5",
    "question_count": 34,
    "questions": [
      {
        "number": 137,
        "question": "Respiratory function is altered in a 16-year-old asthmatic. Which of the following is the cause of this alteration?",
        "option_a": "Altered surfactant production",
        "option_b": "Paradoxical movements of the chest wall",
        "option_c": "Increased airway resistance",
        "option_d": "Continuous changes in respiratory rate and depth",
        "correct_answer": "C"
      },
      {
        "number": 138,
        "question": "A 5-year-old child has suffered second-degree thermal burns over 30% of her body. Forty-eight hours after the burn injury, the nurse must begin to monitor the child for which one of the following complications?",
        "option_a": "Fluid volume deficit",
        "option_b": "Fluid volume excess",
        "option_c": "Decreased cardiac output",
        "option_d": "Severe hypotension",
        "correct_answer": "B"
      },
      {
        "number": 139,
        "question": "Prenatal clients are routinely monitored for early signs of pregnancy-induced hypertension (PIH). For the prenatal client, which of the following blood pressure changes from baseline would be most significant for the nurse to report as indicative of PIH?",
        "option_a": "136/88 to 144/93",
        "option_b": "132/78 to 124/76",
        "option_c": "114/70 to 140/88",
        "option_d": "140/90 to 148/98",
        "correct_answer": "C"
      },
      {
        "number": 140,
        "question": "An 83-year-old client has been hospitalized following a fall in his home. He has developed a possible fecal impaction. Which of the following assessment findings would be most indicative of a fecal impaction?",
        "option_a": "Boardlike, rigid abdomen",
        "option_b": "Loss of the urge to defecate",
        "option_c": "Liquid stool",
        "option_d": "Abdominal pain",
        "correct_answer": "C"
      },
      {
        "number": 141,
        "question": "A postpartum client complains of rectal pressure and severe pain in her perineum; this may be indicative of:",
        "option_a": "Afterbirth pains",
        "option_b": "Constipation",
        "option_c": "Cystitis",
        "option_d": "A hematoma of the vagina or vulva",
        "correct_answer": "D"
      },
      {
        "number": 142,
        "question": "Iron dextran (Imferon) is a parenteral iron preparation. The nurse should know that it:",
        "option_a": "Is also called intrinsic factor",
        "option_b": "Must be given in the abdomen",
        "option_c": "Requires use of the Z-track method",
        "option_d": "Should be given SC",
        "correct_answer": "C"
      },
      {
        "number": 143,
        "question": "The nurse would be sure to instruct a client on the signs and symptoms of an eye infection and hemorrhage. These signs and symptoms would include:",
        "option_a": "Blurred vision and dizziness",
        "option_b": "Eye pain and itching",
        "option_c": "Feeling of eye pressure and headache",
        "option_d": "Eye discharge and hemoptysis",
        "correct_answer": "B"
      },
      {
        "number": 144,
        "question": "The nurse is caring for a laboring client. Assessment data include cervical dilation 9 cm; contractions every 1\u20132 minutes; strong, large amount of \u2015bloody show.\u2016 The most appropriate nursing goal for this client would be:",
        "option_a": "Maintain client\u2018s privacy.",
        "option_b": "Assist with assessment procedures.",
        "option_c": "Provide strategies to maintain client control.",
        "option_d": "Enlist additional caregiver support to ensure client\u2018s safety.",
        "correct_answer": "C"
      },
      {
        "number": 145,
        "question": "A complication for which the nurse should be alert following a liver biopsy is:",
        "option_a": "Hepatic coma",
        "option_b": "Jaundice",
        "option_c": "Ascites",
        "option_d": "Shock",
        "correct_answer": "D"
      },
      {
        "number": 146,
        "question": "A 42-year-old client on an inpatient psychiatric unit comments that he was brought to the hospital by his wife because he had taken too many pills and states, \u2015I just couldn\u2018t take it anymore.\u2016 The nurse\u2018s best response to this disclosure would be:",
        "option_a": "\u2015You shouldn\u2018t do things like that, just tell someone you feel bad.\u2016",
        "option_b": "\u2015Tell me more about what you couldn\u2018t take anymore.\u2016",
        "option_c": "\u2015I\u2018m sure you probably didn\u2018t mean to kill yourself.\u2016",
        "option_d": "\u2015How long have you been in the hospital.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 147,
        "question": "After a 10-year-old child with insulin-dependent diabetes mellitus receives her dinner tray, she tells the nurse that she hates broccoli and wants some corn on the cob. The nurse\u2018s appropriate response is:",
        "option_a": "\u2015No vegetable exchanges are allowed.\u2016",
        "option_b": "\u2015Corn and other starchy vegetables are considered to be bread exchanges.\u2016",
        "option_c": "\u2015Yes, you may exchange any vegetable for any other vegetable.\u2016",
        "option_d": "\u2015Yes, but only one-half ear is allowed.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 148,
        "question": "Which of the following signs might indicate a complication during the labor process with vertex presentation?",
        "option_a": "Fetal tachycardia to 170 bpm during a contraction",
        "option_b": "Nausea and vomiting at 8\u201310 cm dilation",
        "option_c": "Contraction lasting 60 seconds",
        "option_d": "Appearance of dark-colored amniotic fluid",
        "correct_answer": "D"
      },
      {
        "number": 149,
        "question": "The nurse would be concerned if a client exhibited which of the following symptoms during her postpartum stay?",
        "option_a": "Pulse rate of 50\u201370 bpm by her third postpartum day",
        "option_b": "Diuresis by her second or third postpartum day",
        "option_c": "Vaginal discharge or rubra, serosa, then rubra",
        "option_d": "Diaphoresis by her third postpartum day",
        "correct_answer": "C"
      },
      {
        "number": 150,
        "question": "MgSO4 blood levels are monitored and the nurse would be prepared to administer the following antidote for MgSO4 side effects or toxicity:",
        "option_a": "Magnesium oxide",
        "option_b": "Calcium hydroxide",
        "option_c": "Calcium gluconate",
        "option_d": "Naloxone (Narcan)",
        "correct_answer": "C"
      },
      {
        "number": 151,
        "question": "A mother brings her 3-year-old child who is unconscious but breathing to the ER with an apparent drug overdose. The mother found an empty bottle of aspirin next to her child in the bathroom. Which nursing action is the most appropriate?",
        "option_a": "Put in a nasogastric tube and lavage the child\u2018s stomach.",
        "option_b": "Monitor muscular status.",
        "option_c": "Teach mother poison prevention techniques.",
        "option_d": "Place child on respiratory assistance.",
        "correct_answer": "A"
      },
      {
        "number": 152,
        "question": "Azulfidine (Sulfasalazine) may be ordered for a client who has ulcerative colitis. Which of the following is a nursing implication for this drug?",
        "option_a": "Limit fluids to 500 mL/day.",
        "option_b": "Administer 2 hours before meals.",
        "option_c": "Observe for skin rash and diarrhe A.",
        "option_d": "Monitor blood pressure, pulse.",
        "correct_answer": "C"
      },
      {
        "number": 153,
        "question": "A dose of theophylline may need to be altered if a client with COPD:",
        "option_a": "Is allergic to morphine",
        "option_b": "Has a history of arthritis",
        "option_c": "Operates machinery",
        "option_d": "Is concurrently on cimetidine for ulcers",
        "correct_answer": "D"
      },
      {
        "number": 154,
        "question": "A 56-year-old client is admitted to the psychiatric unit in a state of total despair. She feels hopeless and worthless, has a flat affect and very sad appearance, and is unable to feel pleasure from anything. Her husband has been assisting her at home with the housework and cooking; however, she has not been eating much, lies around or sits in a chair most of the day, and is becoming confused and thinks her family does not want her around anymore. In assessing the client, the nurse determines that her behavior is consistent with:",
        "option_a": "Transient depression",
        "option_b": "Mild depression",
        "option_c": "Moderate depression",
        "option_d": "Severe depression",
        "correct_answer": "D"
      },
      {
        "number": 155,
        "question": "A client is pregnant with her second child. Her last menstrual period began on January 15. Her expected date of delivery would be:",
        "option_a": "October 8",
        "option_b": "October 15",
        "option_c": "October 22",
        "option_d": "October 29",
        "correct_answer": "C"
      },
      {
        "number": 156,
        "question": "Which of the following changes in blood pressure readings should be of greatest concern to the nurse when assessing a prenatal client?",
        "option_a": "130/88 to 144/92",
        "option_b": "136/90 to 148/100",
        "option_c": "150/96 to 160/104",
        "option_d": "118/70 to 130/88",
        "correct_answer": "D"
      },
      {
        "number": 157,
        "question": "The nurse would assess the client\u2018s correct understanding of the fertility awareness methods that enhance conception, if the client stated that:",
        "option_a": "\u2015My sexual partner and I should have intercourse when my cervical mucosa is thick and cloudy.\u2016",
        "option_b": "\u2015At ovulation, my basal body temperature should rise about 0.5F.\u2016",
        "option_c": "\u2015I should douche immediately after intercourse.\u2016",
        "option_d": "\u2015My sexual partner and I should have sexual intercourse on day 14 of my cycle regardless of the length of the cycle.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 158,
        "question": "In evaluating the laboratory results of a client with severe pressure ulcers, the nurse finds that her albumin level is low. A decrease in serum albumin would contribute to the formation of pressure ulcers because:",
        "option_a": "The proteins needed for tissue repair are diminished.",
        "option_b": "The iron stores needed for tissue repair are inadequate.",
        "option_c": "A decreased serum albumin level indicates kidney disease.",
        "option_d": "A decreased serum albumin causes fluid movement into the blood vessels, causing dehydration.",
        "correct_answer": "A"
      },
      {
        "number": 159,
        "question": "A client is being discharged on warfarin (Coumadin), an oral anticoagulant. The nurse instructs him about using this drug. Which following response by the client indicates the need for further teaching?",
        "option_a": "\u2015I should shave with my electric razor while on Coumadin.\u2016",
        "option_b": "\u2015I will inform my dentist that I am on anticoagulant therapy before receiving dental work.\u2016",
        "option_c": "\u2015I will continue with my usual dosage of aspirin for my arthritis when I return home.\u2016",
        "option_d": "\u2015I will wear an ID bracelet stating that I am on anticoagulants.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 160,
        "question": "When a client with pancreatitis is discharged, the nurse needs to teach him how to prevent another occurrence of acute pancreatitis. Which of the following statements would indicate he has an understanding of his disease?",
        "option_a": "\u2015I will not eat any raw or uncooked vegetables.\u2016",
        "option_b": "\u2015I will limit my alcohol to one cocktail per day.\u2016",
        "option_c": "\u2015I will look into attending Alcoholics Anonymous meetings.\u2016",
        "option_d": "\u2015I will report any changes in bowel movements to my doctor.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 161,
        "question": "A client decided early in her pregnancy to breast-feed her first baby. She gave birth to a normal, full-term girl and is now progressing toward the establishment of successful lactation. To remove the baby from her breast, she should be instructed to:",
        "option_a": "Gently pull the infant away",
        "option_b": "Withdraw the breast from the infant\u2018s mouth",
        "option_c": "Compress the areolar tissue until the infant drops the nipple from her mouth",
        "option_d": "Insert a clean finger into the baby\u2018s mouth beside the nipple",
        "correct_answer": "D"
      },
      {
        "number": 162,
        "question": "A parent told the public health nurse that her 6-year-old son has been taking tetracycline for a chronic skin condition. The parent asked if this could cause any problems for the child. What should the nurse explain to the parent?",
        "option_a": "Giving tetracycline to a child younger than 8 years may cause permanent staining of his teeth.",
        "option_b": "If you give tetracycline with milk, it may be absorbed readily.",
        "option_c": "The medication should be given to adults, not children.",
        "option_d": "Secondary infections of chronic skin disorders do not respond to antibiotics.",
        "correct_answer": "A"
      },
      {
        "number": 163,
        "question": "MgSO4 is ordered IV following the established protocol for a client with severe PIH. The anticipated effects of this therapy are anticonvulsant and:",
        "option_a": "Vasoconstrictive",
        "option_b": "Vasodilative",
        "option_c": "Hypertensive",
        "option_d": "Antiemetic",
        "correct_answer": "B"
      },
      {
        "number": 164,
        "question": "The nurse is preparing a 6-year-old child for an IV insertion. Which one of the following statements by the nurse is appropriate when preparing a child for a potentially painful procedure?",
        "option_a": "\u2015Some say this feels like a pinch or a bug bite. You tell me what it feels like.\u2016",
        "option_b": "\u2015This is going to hurt a lot; close your eyes and hold my hand.\u2016",
        "option_c": "\u2015This is a terrible procedure, so don\u2018t look.\u2016",
        "option_d": "\u2015This will hurt only a little; try to be a big boy.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 165,
        "question": "A 74-year-old female client is 3 days postoperative. She has an indwelling catheter and has been progressing well. While the nurse is in the room, the client states, \u2015Oh dear, I feel like I have to urinate again!\u2016 Which of the following is the most appropriate initial nursing response?",
        "option_a": "Assure her that this is most likely the result of bladder spasms.",
        "option_b": "Check the collection bag and tubing to verify that the catheter is draining properly.",
        "option_c": "Instruct her to do Kegel exercises to diminish the urge to void.",
        "option_d": "Ask her if she has felt this way before.",
        "correct_answer": "B"
      },
      {
        "number": 166,
        "question": "A six-month-old infant is receiving ribavirin for the treatment of respiratory syncytial virus. Ribavirin is administered via which one of the following routes?",
        "option_a": "Oral",
        "option_b": "IM",
        "option_c": "IV",
        "option_d": "Aerosol",
        "correct_answer": "D"
      },
      {
        "number": 167,
        "question": "A pregnant client is at the clinic for a third trimester prenatal visit. During this examination, it has been",
        "option_a": "Right occipitoposterior",
        "option_b": "Right occipitoanterior",
        "option_c": "Right sacroanterior",
        "option_d": "LOA",
        "correct_answer": "B"
      },
      {
        "number": 168,
        "question": "Which of the following menu choices would indicate that a client with pressure ulcers understands the role diet plays in restoring her albumin levels?",
        "option_a": "Broiled fish with rice",
        "option_b": "Bran flakes with fresh peaches",
        "option_c": "Lasagna with garlic bread",
        "option_d": "Cauliflower and lettuce salad",
        "correct_answer": "A"
      },
      {
        "number": 169,
        "question": "A 42-year-old client with bipolar disorder has been hospitalized on the inpatient psychiatric unit. She is dancing around, talking incessantly, and singing. Much of the time the client is anorexic and eats very little from her tray before she is up and about again. The nurse\u2018s intervention would be to:",
        "option_a": "Confront the client with the fact that she will have to eat more from her tray to sustain her",
        "option_b": "Try to get the client to focus on her eating by offering a detailed discussion on the importance of nutrition",
        "option_c": "Let her have snacks and drinks anytime that she wants them because she will not eat at regular meal times",
        "option_d": "Not expect the client to sit down for complete meals; monitor intake, offering snacks and juice frequently",
        "correct_answer": "D"
      },
      {
        "number": 170,
        "question": "A 35-weeks-pregnant client is undergoing a nonstress test (NST). During the 20-minute examination, the nurse notes three fetal movements accompanied by accelerations of the fetal heart rate, each 15 bpm, lasting 15 seconds. The nurse interprets this test to be:",
        "option_a": "Nonreactive",
        "option_b": "Reactive",
        "option_c": "Positive",
        "option_d": "Negative",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 6,
    "title": "NCLEX RN Practice Series 6",
    "question_count": 34,
    "questions": [
      {
        "number": 171,
        "question": "A 30-year-old client has just been treated in the ER for bruises and abrasions to her face and a broken arm from domestic violence, which has been increasing in frequency and intensity over the last few months. The nurse assesses her as being very anxious, fearful, bewildered, and feeling helpless as she states, \u2015I don\u2018t know what to do, I\u2018m afraid to go home.\u2016 The best response by the nurse to the client would be:",
        "option_a": "\u2015I wouldn\u2018t want to go home either; call a friend who could help you.\u2016",
        "option_b": "\u2015Did you do something that could have made him so angry?\u2016",
        "option_c": "\u2015Let\u2018s talk about people and resources available to you so that you don\u2018t have to go home.\u2016",
        "option_d": "\u2015I\u2018ll call the police and they will take care of him, and you can go home and get some rest.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 172,
        "question": "A 74-year-old obese man who has undergone open reduction and internal fixation of the right hip is 8 days postoperative. He has a history of arthritis and atrial fibrillation. He admits to right lower leg pain, described as \u2015a cramp in my leg.\u2016 An appropriate nursing action is to:",
        "option_a": "Assess for pain with plantiflexion",
        "option_b": "Assess for edema and heat of the right leg",
        "option_c": "Instruct him to rub the cramp out of his leg",
        "option_d": "Elevate right lower extremity with pillows propped under the knee",
        "correct_answer": "B"
      },
      {
        "number": 173,
        "question": "A 26-year-old client is admitted to the labor, delivery, recovery, postpartum unit. The nurse completes her assessment and determines the client is in the first stage of labor. The nurse should instruct her:",
        "option_a": "To hold her breath during contractions",
        "option_b": "To be flat on her back",
        "option_c": "Not to push with her contractions",
        "option_d": "To push before becoming fully dilated",
        "correct_answer": "C"
      },
      {
        "number": 174,
        "question": "A client in active labor asks the nurse for coaching with her breathing during contractions. The client has attended Lamaze birth preparation classes. Which of the following is the best response by the nurse?",
        "option_a": "\u2015Keep breathing with your abdominal muscles as long as you can.\u2016",
        "option_b": "\u2015Make sure you take a deep cleansing breath as the contractions start, focus on an object, and breathe about 16\u201320 times a minute with shallow chest breaths.\u2016",
        "option_c": "\u2015Find a comfortable position before you start a contraction. Once the contraction has started, take slow breaths using your abdominal muscles.\u2016",
        "option_d": "\u2015If a woman in labor listens to her body and takes rapid, deep breaths, she will be able to deal with her contractions quite well.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 175,
        "question": "A couple is planning the conception of their first child. The wife, whose normal menstrual cycle is 34 days in length, correctly identifies the time that she is most likely to ovulate if she states that ovulation should occur on day:",
        "option_a": "14+2 days",
        "option_b": "16+2 days",
        "option_c": "20+2 days",
        "option_d": "22+2 days",
        "correct_answer": "C"
      },
      {
        "number": 176,
        "question": "A nurse should carefully monitor a client for the following side effect of MgSO4:",
        "option_a": "Visual blurring",
        "option_b": "Tachypnea",
        "option_c": "Epigastric pain",
        "option_d": "Respiratory depression",
        "correct_answer": "D"
      },
      {
        "number": 177,
        "question": "The nurse would teach a male client ways to minimize the risk of infection after eye surgery. Which of the following indicates the client needs further teaching?",
        "option_a": "\u2015I will wash my hands before instilling eye medications.\u2016",
        "option_b": "\u2015I will wear sunglasses when going outside.\u2016",
        "option_c": "\u2015I will wear an eye patch for the first 3 postoperative days.\u2016",
        "option_d": "\u2015I will maintain the sterility of the eye medications.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 178,
        "question": "With a geriatric client, the nurse should also assess whether he has been obtaining a yearly vaccination against influenz",
        "option_a": "Why is this assessment important? A. Influenza is growing in our society.",
        "option_b": "Older clients generally are sicker than others when stricken with flu.",
        "option_c": "Older clients have less effective immune systems.",
        "option_d": "Older clients have more exposure to the causative agents.",
        "correct_answer": "C"
      },
      {
        "number": 179,
        "question": "A client delivered her first-born son 4 hours ago. She asks the nurse what the white cheeselike substance is under the baby\u2018s arms. The nurse should respond:",
        "option_a": "\u2015This is a normal skin variation in newborns. It will go away in a few days.\u2016",
        "option_b": "\u2015Let me have a closer look at it. The baby may have an infection.\u2016",
        "option_c": "\u2015This material, called vernix, covered the baby before it was born. It will disappear in a few days.\u2016",
        "option_d": "\u2015Babies sometimes have sebaceous glands that get plugged at birth. This substance is an example of that condition.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 180,
        "question": "A 26-year-old client is in a treatment center for aprazolam (Xanax) abuse and continues to manifest moderate levels of anxiety 3 weeks into the rehabilitation program, often requesting medication for \u2015his nerves.\u2016 Included in the client\u2018s plan of care is to identify alternate methods of coping with stress and anxiety other than use of medication. After intervening with assistance in stress reduction techniques, identifying feelings and past coping, the nurse evaluates the outcome as being met if:",
        "option_a": "Client promises that he will not abuse aprazolam after discharge",
        "option_b": "Client demonstrates use of exercise or physical activity to handle nervous energy following conflicts of everyday life",
        "option_c": "Client is able to verbalize effects of substance abuse on the body",
        "option_d": "Client has remained substance free during hospitalization and is discharged",
        "correct_answer": "B"
      },
      {
        "number": 181,
        "question": "In assessing the nature of the stool of a client who has cystic fibrosis, what would the nurse expect to see?",
        "option_a": "Clay-colored stools",
        "option_b": "Steatorrhea stools",
        "option_c": "Dark brown stools",
        "option_d": "Blood-tinged stools",
        "correct_answer": "B"
      },
      {
        "number": 182,
        "question": "A client is taught to eat foods high in potassium. Which food choices would indicate that this teaching has been successful?",
        "option_a": "Pork chop, baked acorn squash, brussel sprouts",
        "option_b": "Chicken breast, rice, and green beans",
        "option_c": "Roast beef, baked potato, and diced carrots",
        "option_d": "Tuna casserole, noodles, and spinach",
        "correct_answer": "A"
      },
      {
        "number": 183,
        "question": "The nurse is teaching a 10-year-old insulin-dependent diabetic how to administer insulin. Which one of the following steps must be taught for insulin administration?",
        "option_a": "Never use abdominal site for a rotation site.",
        "option_b": "Pinch the skin up to form a subcutaneous pocket.",
        "option_c": "Avoid applying pressure after injection.",
        "option_d": "Change needles after injection.",
        "correct_answer": "B"
      },
      {
        "number": 184,
        "question": "A client is experiencing muscle weakness and lethargy. His serum K+is 3.2. What other symptoms might he exhibit?",
        "option_a": "Tetany",
        "option_b": "Dysrhythmias",
        "option_c": "Numbness of extremities",
        "option_d": "Headache",
        "correct_answer": "B"
      },
      {
        "number": 185,
        "question": "Other drugs may be ordered to manage a client\u2018s ulcerative colitis. Which of the following medications, if ordered, would the nurse question?",
        "option_a": "Methylprednisolone sodium succinate (Solu-Medrol)",
        "option_b": "Loperamide (Imodium)",
        "option_c": "Psyllium",
        "option_d": "6-Mercaptopurine",
        "correct_answer": "D"
      },
      {
        "number": 186,
        "question": "An 8-week-old infant has been diagnosed with gastroesophageal reflux. The nurse is teaching the infant\u2018s mother to care for the infant at home. Which one of the following statements by the nurse is appropriate regarding the infant\u2018s home care?",
        "option_a": "\u2015Lay the infant flat on her left side after feeding.\u2016",
        "option_b": "\u2015Feed the infant every 4 hours with half-strength formula.\u2016",
        "option_c": "\u2015Antacids need to be given an hour before feeding.\u2016",
        "option_d": "\u2015Play activities should be carried out before instead of after feedings.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 187,
        "question": "A mother is unsure about the type of toys for her 17-month-old child. Based on knowledge of growth and development, what toy would the nurse suggest?",
        "option_a": "A pull toy to encourage locomotion",
        "option_b": "A mobile to improve hand-eye coordination",
        "option_c": "A large toy with movable parts to improve pincer grasp",
        "option_d": "Various large colored blocks to teach visual discrimination",
        "correct_answer": "A"
      },
      {
        "number": 188,
        "question": "A group of nursing students at a local preschool day care center are going to screen each child\u2018s fine and gross motor, language, and social skills. The students will use which one of the most widely used screening tests?",
        "option_a": "Revised Prescreening Developmental Questionnaire",
        "option_b": "Goodenough Draw-a-Person Screening Test",
        "option_c": "Denver Development Screening Test",
        "option_d": "Caldwell Home Inventory",
        "correct_answer": "C"
      },
      {
        "number": 189,
        "question": "A gravida 2 para 1 client is hospitalized with severe preeclampsi",
        "option_a": "While she receives magnesium sulfate (MgSO4) therapy, the nurse knows it is safe to repeat the dosage if: A. Deep tendon reflexes are absent",
        "option_b": "Urine output is 20 mL/hr",
        "option_c": "MgSO4serum levels are>15 mg/dL",
        "option_d": "Respirations are>16 breaths/min",
        "correct_answer": "D"
      },
      {
        "number": 190,
        "question": "In addition to changing the mother\u2018s position to relieve cord pressure, the nurse may employ the following measure (s) in the event that she observes the cord out of the vagina:",
        "option_a": "Immediately pour sterile saline on the cord, and repeat this every 15 minutes to prevent drying.",
        "option_b": "Cover the cord with a wet sponge.",
        "option_c": "Apply a cord clamp to the exposed cord, and cover with a sterile towel.",
        "option_d": "Keep the cord warm and moist by continuous applications of warm, sterile saline compresses.",
        "correct_answer": "D"
      },
      {
        "number": 191,
        "question": "Following a gastric resection, which of the following actions would the nurse reinforce with the client in order to alleviate the distress from dumping syndrome?",
        "option_a": "Eating three large meals a day",
        "option_b": "Drinking small amounts of liquids with meals",
        "option_c": "Taking a long walk after meals",
        "option_d": "Eating a low-carbohydrate diet",
        "correct_answer": "D"
      },
      {
        "number": 192,
        "question": "A 54-year-old client is admitted to the hospital with a possible gastric ulcer. He is a heavy smoker. When discussing his smoking habits with him, the nurse should advise him to:",
        "option_a": "Smoke low-tar, filtered cigarettes",
        "option_b": "Smoke cigars instead",
        "option_c": "Smoke only right after meals",
        "option_d": "Chew gum instead",
        "correct_answer": "C"
      },
      {
        "number": 193,
        "question": "A client with severe PIH receiving MgSO4 is placed in a quiet, darkened room. The nurse bases this action on the following understanding:",
        "option_a": "The client is restless.",
        "option_b": "The elevated blood pressure causes photophobi A.",
        "option_c": "Noise or bright lights may precipitate a convulsion.",
        "option_d": "External stimuli are annoying to the client with PIH.",
        "correct_answer": "C"
      },
      {
        "number": 194,
        "question": "Assessment of parturient reveals the following: cervical dilation 6 cm and station 22; no progress in the last 4 hours. Uterine contractions decreasing in frequency and intensity. Marked molding of the presenting fetal head is described. The physician orders, \u2015Begin oxytocin induction at 1 mU/min.\u2016 The nurse should:",
        "option_a": "Begin the oxytocin induction as ordered",
        "option_b": "Increase the dosage by 2 mU/min increments at 15-minute intervals",
        "option_c": "Maintain the dosage when duration of contractions is 40\u201360 seconds and frequency is at 212\u20134 minute intervals",
        "option_d": "Question the order",
        "correct_answer": "D"
      },
      {
        "number": 195,
        "question": "A pregnant client comes to the office for her first prenatal examination at 10 weeks. She has been pregnant twice before; the first delivery produced a viable baby girl at 39 weeks 3 years ago; the second pregnancy produced a viable baby boy at 36 weeks 2 years ago. Both children are living and well. Using the gravida and para system to record the client\u2018s obstetrical history, the nurse should record:",
        "option_a": "Gravida 3 para 1",
        "option_b": "Gravida 3 para 2",
        "option_c": "Gravida 2 para 1",
        "option_d": "Gravida 2 para 2",
        "correct_answer": "B"
      },
      {
        "number": 196,
        "question": "Which of the following would indicate the need for further teaching for the client with COPD? The client verbalizes the need to:",
        "option_a": "Eat high-calorie, high-protein foods",
        "option_b": "Take vitamin supplementation",
        "option_c": "Eliminate intake of milk and milk products",
        "option_d": "Eat small, frequent meals",
        "correct_answer": "C"
      },
      {
        "number": 197,
        "question": "The nurse provides a male client with diet teaching so that he can help prevent constipation in the future. Which",
        "option_a": "Omelette and hash browns",
        "option_b": "Pancakes and syrup",
        "option_c": "Bagel with cream cheese",
        "option_d": "Cooked oatmeal and grapefruit half",
        "correct_answer": "D"
      },
      {
        "number": 198,
        "question": "In cleansing the perineal area around the site of catheter insertion, the nurse would:",
        "option_a": "Wipe the catheter toward the urinary meatus",
        "option_b": "Wipe the catheter away from the urinary meatus",
        "option_c": "Apply a small amount of talcum powder after drying the perineal area",
        "option_d": "Gently insert the catheter another 12 inch after cleansing to prevent irritation from the balloon",
        "correct_answer": "B"
      },
      {
        "number": 199,
        "question": "A 7-year-old child is brought to the ER at midnight by his mother after symptoms appeared abruptly. The nurse\u2018s initial assessment reveals a temperature of 104.5F (40.3C), difficulty swallowing, drooling, absence of a spontaneous cough, and agitation. These symptoms are indicative of which one of the following?",
        "option_a": "Acute tracheitis",
        "option_b": "Acute spasmodic croup",
        "option_c": "Acute epiglottis",
        "option_d": "Acute laryngotracheobronchitis",
        "correct_answer": "C"
      },
      {
        "number": 200,
        "question": "A client tells the nurse that she has had a history of urinary tract infections. The nurse would do further health teaching if she verbalizes she will:",
        "option_a": "Drink at least 8 oz of cranberry juice daily",
        "option_b": "Maintain a fluid intake of at least 2000 mL daily",
        "option_c": "Wash her hands before and after voiding",
        "option_d": "Limit her fluid intake after 6 PM so that there is not a great deal of urine in her bladder while she sleeps",
        "correct_answer": "D"
      },
      {
        "number": 201,
        "question": "A pregnant client experiences a precipitous delivery. The nursing action during a precipitous delivery is to:",
        "option_a": "Control the delivery by guiding expulsion of fetus",
        "option_b": "Leave the room to call the physician",
        "option_c": "Push against the perineum to stop delivery",
        "option_d": "Cross client\u2018s legs tightly",
        "correct_answer": "A"
      },
      {
        "number": 202,
        "question": "A client is diagnosed with organic brain disorder. The nursing care should include:",
        "option_a": "Organized, safe environment",
        "option_b": "Long, extended family visits",
        "option_c": "Detailed explanations of procedures",
        "option_d": "Challenging educational programs",
        "correct_answer": "A"
      },
      {
        "number": 203,
        "question": "A premature infant needs supplemental O2 therapy. A nursing intervention that reduces the risk of retrolental fibroplasia is to:",
        "option_a": "Maintain O2at <40%",
        "option_b": "Maintain O2at>40%",
        "option_c": "Give moist O2at>40%",
        "option_d": "Maintain on 100% O2",
        "correct_answer": "A"
      },
      {
        "number": 204,
        "question": "A 35-year-old client is admitted to the hospital with diabetic ketoacidosis. Results of arterial blood gases are pH 7.2, PaO2 90, PaCO2 45, and HCO3 16. The nursing assessment of arterial blood gases indicate the presence of:",
        "option_a": "Respiratory alkalosis",
        "option_b": "Respiratory acidosis",
        "option_c": "Metabolic alkalosis",
        "option_d": "Metabolic acidosis",
        "correct_answer": "D"
      }
    ]
  },
  {
    "series_number": 7,
    "title": "NCLEX RN Practice Series 7",
    "question_count": 34,
    "questions": [
      {
        "number": 205,
        "question": "A client presents to the psychiatric unit crying hysterically. She is diagnosed with severe anxiety disorder. The first nursing action is to:",
        "option_a": "Demand that she relax",
        "option_b": "Ask what is the problem",
        "option_c": "Stand or sit next to her",
        "option_d": "Give her something to do",
        "correct_answer": "C"
      },
      {
        "number": 206,
        "question": "A primigravida is at term. The nurse can recognize the second stage of labor by the client\u2018s desire to:",
        "option_a": "Push during contractions",
        "option_b": "Hyperventilate during contractions",
        "option_c": "Walk between contractions",
        "option_d": "Relax during contractions",
        "correct_answer": "A"
      },
      {
        "number": 207,
        "question": "The nurse working with a client who is out of control should follow a model of intervention that includes which of the following?",
        "option_a": "Approach the client on a continuum of least restrictive care.",
        "option_b": "Challenge client\u2018s behavior immediately with steps to prevent injury to self or others.",
        "option_c": "Leave the aggressive client to himself or herself, and take other clients away.",
        "option_d": "To ensure safety of other clients, place client in seclusion immediately when he or she begins shouting.",
        "correct_answer": "A"
      },
      {
        "number": 208,
        "question": "A pregnant client continues to visit the clinic regularly during her pregnancy. During one of her visits while lying supine on the examining table, she tells the RN that she is becoming light-headed. The RN notices that the client has pallor in her face and is perspiring profusely. The first intervention the RN should initiate is to:",
        "option_a": "Place the examining table in the Trendelenburg position",
        "option_b": "Assess the client to see if she is having vaginal bleeding",
        "option_c": "Obtain the client\u2018s vital signs immediately",
        "option_d": "Help the client to a sitting position",
        "correct_answer": "D"
      },
      {
        "number": 209,
        "question": "A mother who is breast-feeding her newborn asks the RN, \u2015How can I express milk from my breasts manually?\u2016 The RN tells her that the correct method for manual milk expression includes using the thumb and the index finger to: B. Alternately compress and release each nipple C. Roll the nipple and gently pull the nipple forward D. Slide the thumb and index finger forward from the outer border of the areola toward the end of the nipple E. Compress and release each breast at the outer border of the areola Answer: D Explanation: (A) Manipulation of nipples will cause soreness and traum",
        "option_a": "(B) Pulling the nipples will cause discomfort and soreness. (C) Sliding the thumb and index finger forward over the nipple will cause soreness. (D) The best method to express milk from the breast is to position the thumb and index finger at the outer border of the areola and compress. This is the location of the milk sinuses. QUESTION 210 A client has been in labor for 10 hours. Her contractions have become hypoactive and slowed in duration. The fetus is at 0 station, cervix is dilated 8 cm and effaced 90%. The physician orders an oxytocin (Pitocin) infusion to be started at once. The RN begins the oxytocin infusion. It is important that the RN discontinue the infusion if which one of the following occur? A. The client\u2018s contractions are <2 minutes apart.",
        "option_b": "Duration of the contractions are 60 seconds.",
        "option_c": "The uterus relaxes between contractions.",
        "option_d": "The client complains that she is tired.",
        "correct_answer": "A"
      },
      {
        "number": 211,
        "question": "A 2-month-old infant is receiving IV fluids with a volume control set. The nurse uses this type of tubing",
        "option_a": "Prevents administration of other drugs",
        "option_b": "Prevents entry of air into tubing",
        "option_c": "Prevents inadvertent administration of a large amount of fluids",
        "option_d": "Prevents phlebitis",
        "correct_answer": "C"
      },
      {
        "number": 212,
        "question": "A pregnant client experiences spontaneous rupture of membranes. The first nursing action is to:",
        "option_a": "Assess the client\u2018s respirations",
        "option_b": "Notify the physician",
        "option_c": "Auscultate fetal heart rate",
        "option_d": "Transfer to delivery suite",
        "correct_answer": "C"
      },
      {
        "number": 213,
        "question": "A 30-year-old client has a history of several recent traumatic experiences. She presents at the physician\u2018s office with a complaint of blindness. Physical exam and diagnostic testing reveal no organic cause. The nurse recognizes this as:",
        "option_a": "Delusion",
        "option_b": "Illusion",
        "option_c": "Hallucination",
        "option_d": "Conversion",
        "correct_answer": "D"
      },
      {
        "number": 214,
        "question": "A client was not using his seat belt when involved in a car accident. He fractured ribs 5, 6, and 7 on the left and developed a left pneumothorax. Assessment findings include:",
        "option_a": "Crackles and paradoxical chest wall movement",
        "option_b": "Decreased breath sounds on the left and chest pain with movement",
        "option_c": "Rhonchi and frothy sputum",
        "option_d": "Wheezing and dry cough",
        "correct_answer": "B"
      },
      {
        "number": 215,
        "question": "An 11-year-old boy has received a partial-thickness burn to both legs. He presents to the emergency room approximately 15 minutes after the accident in excruciating pain with charred clothing to both legs. What is the first nursing action?",
        "option_a": "Apply ice packs to both legs.",
        "option_b": "Begin d\u00e9bridement by removing all charred clothing from wound.",
        "option_c": "Apply Silvadene cream (silver sulfadiazine).",
        "option_d": "Immerse both legs in cool water.",
        "correct_answer": "D"
      },
      {
        "number": 216,
        "question": "The physician is preparing to induce labor on a 40-week multigravid",
        "option_a": "The nurse should anticipate the administration of: A. Oxytocin (Pitocin)",
        "option_b": "Progesterone",
        "option_c": "Vasopressin (Pitressin)",
        "option_d": "Ergonovine maleate",
        "correct_answer": "A"
      },
      {
        "number": 217,
        "question": "A pregnant client during labor is irritable and feels the urge to vomit. The nurse should recognize this as the:",
        "option_a": "Fourth stage of labor",
        "option_b": "Third stage of labor",
        "option_c": "Transition stage of labor",
        "option_d": "Second stage of labor",
        "correct_answer": "C"
      },
      {
        "number": 218,
        "question": "A physician\u2018s order reads: Administer KCl 10% oral solution 1.5 mL. The KCl bottle reads 20 mEq/15 mL. What dosage should the nurse administer to the infant?",
        "option_a": "1 mEq",
        "option_b": "1.13 mEq",
        "option_c": "2 mEq",
        "option_d": "Not enough information to calculate",
        "correct_answer": "C"
      },
      {
        "number": 219,
        "question": "At 38 weeks\u2018 gestation, a client is in active labor. She is using her Lamaze breathing techniques. The RN is coaching her breathing and encouraging her to relax and work with her contractions. Which one of the following complaints by the client will alert the RN that she is beginning to hyperventilate with her breathing?",
        "option_a": "\u2015I am cold.\u2016",
        "option_b": "\u2015I have a backache.\u2016",
        "option_c": "\u2015I feel dizzy.\u2016",
        "option_d": "\u2015I am nauseous.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 220,
        "question": "While the RN is assessing a mother\u2018s perineum on her 2nd postpartum day after having a vaginal delivery, the RN notes a large ecchymotic area located to the left of the mother\u2018s perineum. Which one of the following interventions should the RN initiate at this time?",
        "option_a": "Have the client expose the area to air.",
        "option_b": "Apply ice to the perineum.",
        "option_c": "Encourage the client to take warm sitz baths.",
        "option_d": "Inform the physician.",
        "correct_answer": "C"
      },
      {
        "number": 221,
        "question": "A 16-year-old client with anorexia nervosa is on an inpatient psychiatric unit. She has a fear of gaining weight and is refusing to eat sufficient amounts to maintain body weight for her age, height, and stature. To assist with the problem of powerlessness and plan for the client to no longer need to withhold food to feel in control, the nurse uses the following strategy:",
        "option_a": "Establish a structured environment with routine tasks and activities. Also, serve meals at the same time each day.",
        "option_b": "Distract the client during meals to get her to eat because she must take in sufficient amounts to keep from starving.",
        "option_c": "Do frequent room checks to be sure that the client is not hiding food or throwing it away.",
        "option_d": "Listen attentively and participate in in-depth discussions about food, because these actions may encourage her to eat.",
        "correct_answer": "A"
      },
      {
        "number": 222,
        "question": "A 4-year-old child has Down syndrome. The community health nurse has coordinated a special preschool program. The nurse\u2018s primary goal is to:",
        "option_a": "Provide respite care for the mother",
        "option_b": "Facilitate optimal development",
        "option_c": "Provide a demanding and challenging educational program",
        "option_d": "Prepare child to enter mainstream education",
        "correct_answer": "B"
      },
      {
        "number": 223,
        "question": "A 3-month-old infant has had a unilateral cleft lip repair. He has resumed feedings of oral formul",
        "option_a": "The nurse should feed the infant with: A. Gavage tube",
        "option_b": "Nipple and bottle",
        "option_c": "A straw and cup",
        "option_d": "Syringe",
        "correct_answer": "D"
      },
      {
        "number": 224,
        "question": "Painless vaginal bleeding in the last trimester may be caused by:",
        "option_a": "Menstruation",
        "option_b": "Abruptio placentae",
        "option_c": "Placenta previa",
        "option_d": "Polyhydramnios",
        "correct_answer": "C"
      },
      {
        "number": 225,
        "question": "A 66-year-old female client has smoked 2 packs of cigarettes per day for 20 years. Her arterial blood gases on room air are as follows: pH 7.35; PO2 70 mm Hg; PCO2 55 mm Hg; HCO3 32 mEq/L. These blood gases reflect:",
        "option_a": "Compensated metabolic acidosis",
        "option_b": "Compensated respiratory acidosis",
        "option_c": "Compensated respiratory alkalosis",
        "option_d": "Uncompensated respiratory acidosis",
        "correct_answer": "B"
      },
      {
        "number": 226,
        "question": "The client has been in active labor for the last 12 hours. During the last 3 hours, labor has been augmented with oxytocin because of hypoactive uterine contractions. Her physician assesses her cervix as 95% effaced, 8 cm dilated, and the fetus is at 0 station. Her oral temperature is 100.2F at this time. The physician orders that she be prepared for a cesarean delivery. In preparing the client for the cesarean delivery, which one of the following physician\u2018s orders should the RN question?",
        "option_a": "Administer meperidine (Demerol) 100 mg IM 1 hour prior to the delivery.",
        "option_b": "Discontinue the oxytocin infusion.",
        "option_c": "Insert an indwelling Foley catheter prior to delivery.",
        "option_d": "Prepare abdominal area from below the nipples to below the symphysis pubis are A.",
        "correct_answer": "A"
      },
      {
        "number": 227,
        "question": "A 17-year-old client has a T-4 spinal cord injury. At present, he is learning to catheterize himself. When he says, \u2015This is too much trouble. I would rather just have a Foley.\u2018\u2018 An appropriate response for the RN teaching him would be:",
        "option_a": "\u2015I know. It is a lot to learn. In the long run, though, you will be able to reduce infections if you do an intermittent catheterization program.\u2018\u2018",
        "option_b": "\u2015It is not too much trouble. This is the best way to manage urination.\u2018\u2018",
        "option_c": "\u2015OK. I\u2018ll ask your physician if we can replace the Foley.\u2018\u2018",
        "option_d": "\u2015You need to learn this because your doctor ordered it.\u2018\u2018",
        "correct_answer": "A"
      },
      {
        "number": 228,
        "question": "A cardinal symptom of the schizophrenic client is hallucinations. A nurse identifies this as a problem in the category of:",
        "option_a": "Impaired communication",
        "option_b": "Sensory-perceptual alterations",
        "option_c": "Altered thought processes",
        "option_d": "Impaired social interaction",
        "correct_answer": "B"
      },
      {
        "number": 229,
        "question": "A client calls the prenatal clinic to schedule an appointment. She states she has missed three menstrual periods and thinks she might be pregnant. During her first visit to the prenatal clinic, it is confirmed that she is pregnant. The registered nurse (RN) learns that her last menstrual period began on June 10. According to N\u00e4gele\u2018s rule, the estimated date of confinement is:",
        "option_a": "March 17",
        "option_b": "June 3",
        "option_c": "August 30",
        "option_d": "January 10",
        "correct_answer": "A"
      },
      {
        "number": 230,
        "question": "A 55-year-old client is unconscious, and his physician has decided to begin tube feeding him using a smallbore silicone feeding tube (Keofeed, Duo-Tube). After the tube is inserted, the nurse identifies the most reliable way to confirm appropriate placement is to:",
        "option_a": "Aspirate gastric contents",
        "option_b": "Auscultate air insufflated through the tube",
        "option_c": "Obtain a chest x-ray",
        "option_d": "Place the tip of the tube under water and observe for air bubbles",
        "correct_answer": "C"
      },
      {
        "number": 231,
        "question": "A client had a vaginal delivery 3 days ago and is discharged from the hospital on the 2nd day postpartum. She told the RN, \u2015I need to start exercising so that I can get back into shape. Could you suggest an exercise I could begin with?\u2018\u2018 The RN could suggest which one of the following?",
        "option_a": "Push-ups",
        "option_b": "Jumping jacks",
        "option_c": "Leg lifts",
        "option_d": "Kegel exercises",
        "correct_answer": "D"
      },
      {
        "number": 232,
        "question": "A client had a myocardial infarction 5 days ago. His physician has ordered an echocardiogram to determine how his myocardial infarction has affected his ventricular wall motion. When the client asks if this test is painful, an appropriate response is:",
        "option_a": "\u2015No, but you must be able to ride on a stationary bicycle while the test is being performed.\u2016",
        "option_b": "\u2015No, but you will have to lie still and the gel that is used may be cool.\u2016",
        "option_c": "\u2015Yes, but your physician will be there and will order pain medicine for you.\u2016",
        "option_d": "\u2015Your physician has ordered medicine, which you will be given before you go for the test, which will make you sleepy.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 233,
        "question": "A 13-year-old hemophiliac is hospitalized for hemarthrosis of his right knee. To relieve the pain, the nurse should:",
        "option_a": "Place on bed rest; elevate and splint the right knee",
        "option_b": "Apply moist heat to the right knee",
        "option_c": "Administer aspirin for pain",
        "option_d": "Encourage active range of motion to right knee",
        "correct_answer": "A"
      },
      {
        "number": 234,
        "question": "A 24-year-old client presents to the emergency department protesting \u2015I am God.\u2016 The nurse identifies this as a:",
        "option_a": "Delusion",
        "option_b": "Illusion",
        "option_c": "Hallucination",
        "option_d": "Conversion",
        "correct_answer": "A"
      },
      {
        "number": 235,
        "question": "A 19-year-old client has sustained a C-7 fracture, which resulted in his spinal cord being partially transected. By 2 weeks\u2018 postinjury, his neck has been surgically stabilized, and he has been transferred from the intensive care unit. A potential life-threatening complication the nurse monitors the client for is:",
        "option_a": "Autonomic dysreflexia",
        "option_b": "Bradycardia",
        "option_c": "Central cord syndrome",
        "option_d": "Spinal shock",
        "correct_answer": "A"
      },
      {
        "number": 236,
        "question": "A physician\u2018s order reads: 0.25 normal saline at 50 mL/hr until discontinued. The nurse is using a microdrip tubing set. How many drops per minute should the nurse administer?",
        "option_a": "1 gtt/min",
        "option_b": "5 gtt/min",
        "option_c": "50 gtt/min",
        "option_d": "100 gtt/min",
        "correct_answer": "C"
      },
      {
        "number": 237,
        "question": "A client\u2018s congestive heart failure has been treated, and he will soon be discharged. Discharge teaching should include instruction to call the physician if he notices a 2-lb weight gain in a 24-hour period. Increased weight gain may indicate:",
        "option_a": "A diet too high in calories and saturated fat",
        "option_b": "Decreasing cardiac output",
        "option_c": "Decreasing renal function",
        "option_d": "Development of diabetes insipidus",
        "correct_answer": "B"
      },
      {
        "number": 238,
        "question": "The nurse is assessing and getting a history from a client treated for depression with a monoamine oxidase (MAO) antidepressant. The most serious side effect associated with this antidepressant and the ingestion of tyramine in aged foods may be:",
        "option_a": "Hypertensive crisis",
        "option_b": "Severe rash",
        "option_c": "Severe hypotension",
        "option_d": "Severe diarrhea",
        "correct_answer": "A"
      },
      {
        "number": 239,
        "question": "When planning care for the passive-aggressive client, the nurse includes the following goal:",
        "option_a": "Allow the client to use humor, because this may be the only way this client can express self.",
        "option_b": "Allow the client to express anger by using \u2015I\u2016 messages, such as \u2015I was angry when . . .,\u2016 etc.",
        "option_c": "Allow the client to have time away from therapeutic responsibilities.",
        "option_d": "Allow the client to give excuses if he forgets to give staff information.",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 8,
    "title": "NCLEX RN Practice Series 8",
    "question_count": 34,
    "questions": [
      {
        "number": 240,
        "question": "A newborn is admitted to the newborn nursery with tremors, apnea periods, and poor sucking reflex. The nurse should suspect:",
        "option_a": "Central nervous system damage",
        "option_b": "Hypoglycemia",
        "option_c": "Hyperglycemia",
        "option_d": "These are normal newborn responses to extrauterine life",
        "correct_answer": "B"
      },
      {
        "number": 241,
        "question": "A schizophrenic client who is experiencing thoughts of having special powers states that \u2015I am a messenger from another planet and can rule the earth.\u2016 The nurse assesses this behavior as:",
        "option_a": "Ideas of reference",
        "option_b": "Delusions of persecution",
        "option_c": "Thought broadcasting",
        "option_d": "Delusions of grandeur",
        "correct_answer": "D"
      },
      {
        "number": 242,
        "question": "A newborn infant is exhibiting signs of respiratory distress. Which of the following would the nurse recognize as the earliest clinical sign of respiratory distress?",
        "option_a": "Cyanosis",
        "option_b": "Increased respirations",
        "option_c": "Sternal and subcostal retractions",
        "option_d": "Decreased respirations",
        "correct_answer": "C"
      },
      {
        "number": 243,
        "question": "After the RN is finished the initial assessment of a newborn baby and after the initial bonding between the",
        "option_a": "The physician verifies the exact time of birth.",
        "option_b": "The nurse counts the instruments and sponges with the scrub nurse.",
        "option_c": "The nurse instills prophylactic ointment in the conjunctival sacs of the newborn\u2018s eyes.",
        "option_d": "The nurse makes sure the mother and her newborn have been tagged with identical bands.",
        "correct_answer": "D"
      },
      {
        "number": 244,
        "question": "A client experiencing delusions states, \u2015I came here because there were people surrounding my house that wanted to take me away and use my body for science.\u2016 The best response by the nurse would be:",
        "option_a": "\u2015Describe the people surrounding your house that want to take you away.\u2016",
        "option_b": "\u2015I need more information on why you think others want to use your body for science.\u2016",
        "option_c": "\u2015There were no people surrounding your house, your relatives brought you here, and no one really wants your body for science.\u2016",
        "option_d": "\u2015I know that must be frightening for you; let the staff know when you are having thoughts that trouble you.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 245,
        "question": "On admission, the client has signs and symptoms of pulmonary edem",
        "option_a": "The nurse places the client in the most appropriate position for a client in pulmonary edema, which is: A. High Fowler",
        "option_b": "Lying on the left side",
        "option_c": "Sitting in a chair",
        "option_d": "Supine with feet elevated",
        "correct_answer": "A"
      },
      {
        "number": 246,
        "question": "A 40-year-old client is admitted to the hospital for tests to diagnose cancer. Since his admission, he has become dependent and demanding to the nursing staff. The nurse identifies this behavior as which defense mechanism?",
        "option_a": "Denial",
        "option_b": "Displacement",
        "option_c": "Regression",
        "option_d": "Projection",
        "correct_answer": "C"
      },
      {
        "number": 247,
        "question": "A 60-year-old male client was hospitalized 3 days ago with the diagnosis of acute anterior wall myocardial infarction. Today he has been complaining of increasing weakness and shortness of breath. Crackles in both lung bases are audible on auscultation. He is developing:",
        "option_a": "An extension of his myocardial infarction",
        "option_b": "Pneumonia",
        "option_c": "Pulmonary edema",
        "option_d": "Pulmonary emboli",
        "correct_answer": "C"
      },
      {
        "number": 248,
        "question": "A female client who has chronic obstructive pulmonary disease (COPD) has presented in the emergency department with cough productive of yellow sputum and increasing shortness of breath. On room air, her blood gases are as follows: pH 7.30 mm Hg, PCO2 60 mm Hg, PO2 55 mm Hg, HCO3 32 mEq/L. These arterial",
        "option_a": "Compensated respiratory acidosis",
        "option_b": "Normal blood gases",
        "option_c": "Uncompensated metabolic acidosis",
        "option_d": "Uncompensated respiratory acidosis",
        "correct_answer": "D"
      },
      {
        "number": 249,
        "question": "A newborn has been delivered with a meningomyelocele. The nursery nurse should position the newborn:",
        "option_a": "Prone",
        "option_b": "Supine",
        "option_c": "Side lying",
        "option_d": "Semi-Fowler",
        "correct_answer": "A"
      },
      {
        "number": 250,
        "question": "Assessment of a newborn for Apgar scoring includes observation for:",
        "option_a": "Pupil response",
        "option_b": "Respiratory rate",
        "option_c": "Heart rate",
        "option_d": "Babinski\u2018s reflex",
        "correct_answer": "C"
      },
      {
        "number": 251,
        "question": "A client suspects that she is pregnant. She reports two missed menstrual periods. The first day of her last menstrual period was August 3. Her estimated date of confinement would be:",
        "option_a": "November 7",
        "option_b": "November 10",
        "option_c": "May 7",
        "option_d": "May 10",
        "correct_answer": "D"
      },
      {
        "number": 252,
        "question": "A client\u2018s physician has prescribed theophylline (Theo- Dur) to help control the bronchospasm associated with the client\u2018s COPD. Instructions that should be given to the client include:",
        "option_a": "\u2015Call your physician if you develop palpitations, dizziness, or restlessness.\u2018\u2018",
        "option_b": "\u2015Cigarette smoking may significantly increase the risk for theophylline toxicity.\u2018\u2018",
        "option_c": "\u2015Take this medication on an empty stomach.\u2018\u2018",
        "option_d": "\u2015Do not take your medicine if your pulse is less than 60 beats per minute.\u2018\u2018",
        "correct_answer": "A"
      },
      {
        "number": 253,
        "question": "Which type of insulin can be administered by a continuous IV drip?",
        "option_a": "Humulin N",
        "option_b": "NPH insulin",
        "option_c": "Regular insulin",
        "option_d": "Lente insulin",
        "correct_answer": "C"
      },
      {
        "number": 254,
        "question": "The nurse should facilitate bonding during the postpartum period. What should the nurse expect to observe in the taking-hold phase?",
        "option_a": "Mother is concerned about her recovery.",
        "option_b": "Mother calls infant by name.",
        "option_c": "Mother lightly touches infant.",
        "option_d": "Mother is concerned about her weight gain.",
        "correct_answer": "B"
      },
      {
        "number": 255,
        "question": "A 67-year-old client will be undergoing a coronary arteriography in the morning. Client teaching about postprocedure nursing care should include that:",
        "option_a": "Bed rest with bathroom privileges will be ordered",
        "option_b": "He will be kept NPO for 8\u201312 hours",
        "option_c": "Some oozing of blood at the arterial puncture site is normal",
        "option_d": "The leg used for arterial puncture should be kept straight for 8\u201312 hours",
        "correct_answer": "D"
      },
      {
        "number": 256,
        "question": "A type I diabetic client delivers a male newborn. The newborn is 45 minutes old. What is the primary nursing goal in the nursery during the first hours for this newborn?",
        "option_a": "Bonding",
        "option_b": "Maintain normal blood sugar",
        "option_c": "Maintain normal nutrition",
        "option_d": "Monitor intake and output",
        "correct_answer": "B"
      },
      {
        "number": 257,
        "question": "An elective saline abortion has been performed on a 3- week primigravid",
        "option_a": "Following the procedure, the nurse should be alert for which early side effect?",
        "option_b": "Thirst",
        "option_c": "Edema",
        "option_d": "Diabetes insipidus",
        "correct_answer": "B"
      },
      {
        "number": 258,
        "question": "A male client has been hospitalized with congestive heart failure. Medical management of heart failure focuses on improving myocardial contractility. This can be achieved by administering:",
        "option_a": "Digoxin (Lanoxin) 0.25 mg po every day",
        "option_b": "Furosemide (Lasix) 40 mg po every morning",
        "option_c": "O22 L/min via nasal cannula",
        "option_d": "Nitroglycerin (Nitrol) 1 inch topically every 4 hours",
        "correct_answer": "A"
      },
      {
        "number": 259,
        "question": "A client is 2 hours post ventriculoperitoneal shunt placement. How should the nurse position the client?",
        "option_a": "Head of bed elevated 30 degrees on nonoperative side",
        "option_b": "Head of bed elevated 30 degrees on operative side",
        "option_c": "Bed flat on operative side",
        "option_d": "Bed flat on nonoperative side",
        "correct_answer": "D"
      },
      {
        "number": 260,
        "question": "A first-trimester primigravida is diagnosed with anemia.",
        "option_a": "Mother\u2018s increased blood volume",
        "option_b": "Mother\u2018s decreased blood volume",
        "option_c": "Fetal blood volume increase",
        "option_d": "Increase in iron absorption",
        "correct_answer": "A"
      },
      {
        "number": 261,
        "question": "A client was admitted with rib fractures and a pneumothorax, which were sustained as a result of a motor vehicle accident. A chest tube was placed on the left side to reinflate his lung, and he was transferred to a client unit. Twenty-four hours after admission he continues to have bloody sputum, develops increasing hypoxemia, and his chest x-ray shows patchy infiltrates. The nurse analyzes these symptoms as being consistent with:",
        "option_a": "Pneumonia",
        "option_b": "Pulmonary contusions",
        "option_c": "Pulmonary edema",
        "option_d": "Tension pneumothorax",
        "correct_answer": "B"
      },
      {
        "number": 262,
        "question": "At 30 weeks\u2018 gestation, a client is admitted to the unit in premature labor. Her physician orders that an IV be started with 500 mL D5W mixed with 150 mg of ritodrine stat. The RN prepares the IV solution with the medication. The RN knows that clients receiving the medication ritodrine IV should be observed closely for which one of the following side effects:",
        "option_a": "Hypoglycemia",
        "option_b": "Hyperkalemia",
        "option_c": "Tachycardia",
        "option_d": "Increase in hematocrit and hemoglobin",
        "correct_answer": "C"
      },
      {
        "number": 263,
        "question": "Following a vaginal delivery, the postpartum nurse should observe for:",
        "option_a": "Dystocia, kraurosis",
        "option_b": "Chadwick\u2018s sign",
        "option_c": "Fatigue, hemorrhoids",
        "option_d": "Hemorrhage and infection",
        "correct_answer": "D"
      },
      {
        "number": 264,
        "question": "A physician\u2018s order reads: Administer furosemide oral solution 0.5 mL stat. The furosemide bottle dosage is 10 mg/mL. What dosage of furosemide should the nurse give to this infant?",
        "option_a": "5 mg",
        "option_b": "0.5 mg",
        "option_c": "0.05 mg",
        "option_d": "20 mg",
        "correct_answer": "A"
      },
      {
        "number": 265,
        "question": "A 16-month-old infant is being prepared for tetralogy of Fallot repair. In the nursing assessment, which lab value should elicit further assessment and requires notification of physician?",
        "option_a": "pH 7.39",
        "option_b": "White blood cell (WBC) count 10,000 WBCs/mm3",
        "option_c": "Hematocrit 60%",
        "option_d": "Bleeding time of 4 minutes",
        "correct_answer": "C"
      },
      {
        "number": 266,
        "question": "Nursing care of the infant prior to surgical closure of a meningomyelocele would include:",
        "option_a": "Cover sac with dry sterile dressing",
        "option_b": "Cover sac with saline-soaked sterile dressing",
        "option_c": "Do not apply dressing; keep sac open to air",
        "option_d": "Aspirate any fluid from sac",
        "correct_answer": "B"
      },
      {
        "number": 267,
        "question": "A client has consented to have a central venous catheter placed. The best position in which to place the client is the Trendelenburg position. The reason is that the Trendelenburg position:",
        "option_a": "Allows the physician to visualize the subclavian vein",
        "option_b": "Reduces the possibility of air embolism",
        "option_c": "Reduces the possibility of hematoma formation",
        "option_d": "Makes the procedure more comfortable for the client",
        "correct_answer": "B"
      },
      {
        "number": 268,
        "question": "A client has a chest tube placed in his left pleural space to re-expand his collapsed lung. In a closed-chest drainage system, the purpose of the water seal is to:",
        "option_a": "Prevent air from entering the pleural space",
        "option_b": "Prevent fluid from entering the pleural space",
        "option_c": "Provide a means to measure chest drainage",
        "option_d": "Provide an indicator of respiratory effort",
        "correct_answer": "A"
      },
      {
        "number": 269,
        "question": "A 3-year-old child is admitted with a diagnosis of possible noncommunicating hydrocephalus. What is the first symptom that indicates increased intracranial pressure?",
        "option_a": "Bulging fontanelles",
        "option_b": "Seizure",
        "option_c": "Headache",
        "option_d": "Ataxia",
        "correct_answer": "C"
      },
      {
        "number": 270,
        "question": "A client is in active labor and has been admitted to the labor and delivery unit. The RN has just done a sterile vaginal exam and determines that the client is dilated 5 cm, effaced 85%, and the fetus\u2018s head is at 0 station. She asks if she could have a lumbar epidural now. The epidural is started, and the anesthetic agent used is bupivacaine (Marcaine). After the client has received her lumbar epidural, it is important for the RN to monitor her for which of the following side effects:",
        "option_a": "Hypertension",
        "option_b": "Hypotension",
        "option_c": "Hypoglycemia",
        "option_d": "Hyperglycemia",
        "correct_answer": "B"
      },
      {
        "number": 271,
        "question": "At 16 weeks\u2018 gestation, a pregnant client is admitted to the maternity unit to have a McDonald procedure (cerclage) done. She tells the RN who is admitting her to the unit that her physician had explained what this procedure was, but that she did not understand. The RN explains to the client that the purpose for this procedure",
        "option_a": "Reinforce an incompetent cervix",
        "option_b": "Repair the amniotic sac",
        "option_c": "Evaluate cephalopelvic disproportion",
        "option_d": "Dilate the cervix",
        "correct_answer": "A"
      },
      {
        "number": 272,
        "question": "A 55-year-old man has recently been diagnosed with hypertension. His physician orders a low-sodium diet for him. When he asks, \u2015What does salt have to do with high blood pressure?\u2018\u2018 the nurse\u2018s initial response would be:",
        "option_a": "\u2015The reason is not known why hypertension is associated with a high-salt diet.\u2016",
        "option_b": "\u2015Large amounts of salt in your diet can cause you to retain fluid, which increases your blood pressure.\u2016",
        "option_c": "\u2015Salt affects your blood vessels and causes your blood pressure to be high.\u2016",
        "option_d": "\u2015Salt is needed to maintain blood pressure, but too much causes hypertension.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 273,
        "question": "A burn victim\u2018s immunization history is assessed by the nurse. Which immunization is of priority concern?",
        "option_a": "Oral poliovirus vaccine",
        "option_b": "Inactivated poliovirus vaccine",
        "option_c": "Tetanus toxoid",
        "option_d": "Hepatitis B vaccine",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 9,
    "title": "NCLEX RN Practice Series 9",
    "question_count": 34,
    "questions": [
      {
        "number": 274,
        "question": "A 1000-mL dose of D5W 12 normal saline is to be infused in 8 hours. The drop factor for the tubing is 60 gtt/min. How many drops per minute should the nurse administer?",
        "option_a": "75 gtt/min",
        "option_b": "100 gtt/min",
        "option_c": "125 gtt/min",
        "option_d": "150 gtt/min",
        "correct_answer": "C"
      },
      {
        "number": 275,
        "question": "A schizophrenic is admitted to the psychiatric unit. What affect would the nurse expect to observe?",
        "option_a": "Anger",
        "option_b": "Apathy and flatness",
        "option_c": "Smiling",
        "option_d": "Hostility",
        "correct_answer": "B"
      },
      {
        "number": 276,
        "question": "A client was prescribed a major tranquilizer 2 months ago. One month ago she was placed on benztropine (Cogentin). What would indicate that benztropine therapy is effective?",
        "option_a": "Smooth, coordinated voluntary movement",
        "option_b": "Tremors",
        "option_c": "Rigidity",
        "option_d": "Muscle weakness",
        "correct_answer": "A"
      },
      {
        "number": 277,
        "question": "A male client has asthma and his physician has prescribed beclomethasone (Vanceril) 3 puffs tid in addition to his other medications. After taking his beclomethasone, the client should be instructed to: \u201c",
        "option_a": "Clean his inhaler with warm water and soak it in a 10% bleach solution",
        "option_b": "Drink a glass of water",
        "option_c": "Sit and rest",
        "option_d": "Use his bronchodilator inhaler",
        "correct_answer": "B"
      },
      {
        "number": 278,
        "question": "At 30 weeks\u2018 gestation, a client is admitted to the unit in premature labor. Her contractions are every 5 minutes and last 60 seconds, her cervix is closed, and the suture placed around her cervix during her 16th week of gestation, when she had the MacDonald procedure, can still be felt by the physician. The amniotic sac is still intact. She is very concerned about delivering prematurely. She asks the RN, \u2015What is the greatest risk to my baby if it is born prematurely?\u2016 The RN\u2018s answer should be:",
        "option_a": "Hyperglycemia",
        "option_b": "Hypoglycemia",
        "option_c": "Lack of development of the intestines",
        "option_d": "Lack of development of the lungs",
        "correct_answer": "D"
      },
      {
        "number": 279,
        "question": "A 79-year-old client with Alzheimer\u2018s disease is exhibiting significant memory impairment, cognitive impairment, extremely impaired judgment in social situations, and agitation when placed in a new situation or \u201c",
        "option_a": "Maintain routines and usual structure and adhere to schedules.",
        "option_b": "Encourage the client to attend all structured activities on the unit, whether she wants to or not.",
        "option_c": "Ask the client to go to an activity once. If she gives no response right away, change the question around, asking the same thing.",
        "option_d": "Give the client two or three choices to decide what she wants to do.",
        "correct_answer": "A"
      },
      {
        "number": 280,
        "question": "A client has been admitted to the labor and delivery unit in active labor. After assessing her, the RN notes that the client\u2018s fetus position is left occipital posterior. Which of the following statements best describes what this means to the labor process:",
        "option_a": "Decreases the overall time of the labor process",
        "option_b": "Prolongs the client\u2018s first stage of labor",
        "option_c": "Decreases the time of the client\u2018s first stage of labor",
        "option_d": "Prolongs the client\u2018s third stage of labor",
        "correct_answer": "B"
      },
      {
        "number": 281,
        "question": "On a mother\u2018s 2nd postpartum day after having a vaginal delivery, the RN is preparing to assess her perineum and anus as part of her daily assessment. The best position for the client to be placed in for this assessment is:",
        "option_a": "Sims\u2018",
        "option_b": "Fowler\u2018s",
        "option_c": "Prone",
        "option_d": "Any position that the RN chooses",
        "correct_answer": "A"
      },
      {
        "number": 282,
        "question": "A laboring client presents with a prolapsed cord. The nurse should immediately place the client in what position?",
        "option_a": "Reverse Trendelenburg",
        "option_b": "Fowler\u2018s",
        "option_c": "Trendelenburg",
        "option_d": "Sims\u2018",
        "correct_answer": "C"
      },
      {
        "number": 283,
        "question": "After an infant is delivered by cesarean delivery and placed on the warmer, the RN dries and assesses the infant. At 1 and 5 minutes after birth, the RN does the Apgar scoring of the infant. The RN knows that because this infant was delivered by cesarean section, he is at increased risk for having which one of the following:",
        "option_a": "Cold stress",
        "option_b": "Cyanosis",
        "option_c": "Respiratory distress syndrome",
        "option_d": "Seizures",
        "correct_answer": "C"
      },
      {
        "number": 284,
        "question": "A client who is 7 months pregnant is diagnosed with pyelonephritis. The nurse anticipates the physician ordering:",
        "option_a": "Oxytocin",
        "option_b": "Magnesium sulfate (MgSO4) \u201c",
        "option_c": "Ampicillin",
        "option_d": "Tetracycline",
        "correct_answer": "C"
      },
      {
        "number": 285,
        "question": "What is the appropriate nursing action for a child with increased intracranial pressure?",
        "option_a": "Head of bed elevated 45 degrees with child\u2018s head maintained in a neutral position",
        "option_b": "Child lying flat",
        "option_c": "Head turned to side",
        "option_d": "Frequent visitation for stimulation",
        "correct_answer": "A"
      },
      {
        "number": 286,
        "question": "A nurse is performing a vaginal exam on a client in active labor. An important landmark to assess during labor and delivery are the ischial spines because:",
        "option_a": "Ischial spines are the narrowest diameter of the pelvis",
        "option_b": "Ischial spines are the widest diameter of the pelvis",
        "option_c": "They represent the inlet of birth canal",
        "option_d": "They measure pelvic floor",
        "correct_answer": "A"
      },
      {
        "number": 287,
        "question": "A 16-year-old client reports a weight loss of 20% of her previous weight. She has a history of food binges followed by self-induced vomiting (purging). The nurse should suspect a diagnosis of:",
        "option_a": "Anorexia nervosa \u201c",
        "option_b": "Anorexia hysteria",
        "option_c": "Bulimia",
        "option_d": "Conversion reaction",
        "correct_answer": "C"
      },
      {
        "number": 288,
        "question": "A 70-year-old client is almost finished receiving her second unit of packed red blood cells. The client, who weighs 80 lb, has started complaining of being short of breath and now has crackles in the bases of her lungs. After slowing or stopping the transfusion, the most appropriate initial nursing action would be to:",
        "option_a": "Raise the client\u2018s head and place her feet in a dependent position",
        "option_b": "Notify the physician",
        "option_c": "Place the client on 2 liters of O2 via nasal cannula",
        "option_d": "Administer furosemide (Lasix) 20 mg IV push",
        "correct_answer": "A"
      },
      {
        "number": 289,
        "question": "A 45-year-old male client was admitted to a chemical dependency treatment center following legal problems related to alcohol abuse. He states, \u2015I know that alcohol is a problem for some people, but I can stop whenever I want to. I\u2018m never sick or miss work, and no one can complain about me.\u2016 During the initial assessment, the best response by the nurse would be:",
        "option_a": "\u2015The fact is you are an alcoholic or you wouldn\u2018t be here.\u2016",
        "option_b": "\u2015I understand it took strength to admit yourself to the unit, and I will do my part to help you to stay alcoholfree.\u2016",
        "option_c": "\u2015If you can stop drinking when you want to, why don\u2018t you stop?\u2016",
        "option_d": "\u2015It\u2018s good that you can stop drinking when you want to.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 290,
        "question": "A 1000-mL dose of lactated Ringer\u2018s solution is to be infused in 8 hours. The drop factor for the tubing is 10 gtt/mL. How many drops per minute should the nurse administer?",
        "option_a": "125 gtt/min",
        "option_b": "48 gtt/min",
        "option_c": "20 gtt/min",
        "option_d": "21 gtt/min",
        "correct_answer": "D"
      },
      {
        "number": 291,
        "question": "In client teaching, the nurse should emphasize that fetal damage occurs more frequently with ingestion of drugs during:",
        "option_a": "First trimester",
        "option_b": "Second trimester",
        "option_c": "Third trimester",
        "option_d": "Every trimester",
        "correct_answer": "A"
      },
      {
        "number": 292,
        "question": "A 6-year-old child is attending a pediatric clinic for a routine examination. What should the nurse assess for while conducting a vision screening?",
        "option_a": "Hearing test",
        "option_b": "Gait",
        "option_c": "Strabismus",
        "option_d": "Papilledema",
        "correct_answer": "C"
      },
      {
        "number": 293,
        "question": "A 52-year-old client\u2018s abdominal aortic aneurysm ruptured. She received rapid massive blood transfusions for bleeding. One potential complication of blood administration for which she is especially at risk is:",
        "option_a": "Air embolus",
        "option_b": "Circulatory overload",
        "option_c": "Hypocalcemia",
        "option_d": "Hypokalemia",
        "correct_answer": "C"
      },
      {
        "number": 294,
        "question": "A young boy tells the nurse, \u2015I don\u2018t like my Dad to kiss or hug my Mom. I love my Mom and want to marry her.\u2016 The nurse recognizes this stage of growth and development as:",
        "option_a": "Electra complex",
        "option_b": "Oedipus complex",
        "option_c": "Superego",
        "option_d": "Ego",
        "correct_answer": "B"
      },
      {
        "number": 295,
        "question": "A 19-year-old client fell off a ladder approximately 3 ft to the ground. He did not lose consciousness but was taken to the emergency department by a friend to have a scalp laceration sutured. The nurse instructs the client to:",
        "option_a": "Clean the sutured laceration twice a day with povidone- iodine (Betadine)",
        "option_b": "Remove his scalp sutures after 5 days",
        "option_c": "Return to the hospital immediately if he develops confusion, nausea, or vomiting",
        "option_d": "Take meperidine 50 mg po q4\u20136h prn for headache \u201c",
        "correct_answer": "C"
      },
      {
        "number": 296,
        "question": "At 32 weeks\u2018 gestation, a client is scheduled for a fetal activity test (nonstress test). She calls the clinic and asks the RN, \u2015How do I prepare for the test I am scheduled for?\u2016 The RN will most likely inform her of the following instructions to help prepare her for the test:",
        "option_a": "\u2015You need to know that an IV is always started before the test.\u2016",
        "option_b": "\u2015You will need to drink 6 to 8 glasses of water to fill your bladder.\u2016",
        "option_c": "\u2015Do not eat any food or drink any liquids before the test is started.\u2016",
        "option_d": "\u2015You will have to remain as still as you possibly can.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 297,
        "question": "The nurse instructs a client on the difference between true labor and false labor. The nurse explains, \u2015In true labor:",
        "option_a": "Uterine contractions will weaken with walking.\u2016",
        "option_b": "Uterine contractions will strengthen with walking.\u2016",
        "option_c": "The cervix does not dilate.\u2016",
        "option_d": "The fetus does not descend.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 298,
        "question": "After the fetal activity test (nonstress test) is completed, the RN is looking at the test results on the monitor strip. The RN observes that the fetal heart accelerated 5 beats/min with each fetal movement. The accelerations lasted 15 seconds and occurred 3 times during the 20- minute test. The RN knows that these test results will be interpreted as: \u201c",
        "option_a": "A reactive test",
        "option_b": "A nonreactive test",
        "option_c": "An unsatisfactory test",
        "option_d": "A negative test",
        "correct_answer": "A"
      },
      {
        "number": 299,
        "question": "A 70-year-old client has pneumonia and has just had a respiratory arrest. He has just been intubated with an 8mm endotracheal tube. During auscultation of his chest, breath sounds were found to be absent on the left side. The nurse identifies the most likely cause of this as:",
        "option_a": "Inappropriate endotracheal tube size",
        "option_b": "Left-sided pneumothorax",
        "option_c": "Right mainstem bronchus intubation",
        "option_d": "Pneumonia",
        "correct_answer": "C"
      },
      {
        "number": 300,
        "question": "After performing a sterile vaginal exam on a client who has just been admitted to the unit in active labor and placed on an electronic fetal monitor, the RN assesses that the fetal head is at 21 station. She documents this on the monitor strip. Fetal head at 21 station means that the fetal head is located where in the pelvis?",
        "option_a": "One centimeter below the ischial spines",
        "option_b": "One centimeter above the ischial spines",
        "option_c": "Has not entered the pelvic inlet yet",
        "option_d": "Located in the pelvic outlet",
        "correct_answer": "B"
      },
      {
        "number": 301,
        "question": "Cheyne-Stokes respiratory pattern can be associated with which of the following conditions?",
        "option_a": "Diabetic ketoacidosis",
        "option_b": "Fever",
        "option_c": "Increased intracranial pressure",
        "option_d": "Spinal meningitis",
        "correct_answer": "C"
      },
      {
        "number": 302,
        "question": "A 47-year-old client has been admitted to the general surgery unit for bowel obstruction. The doctor has ordered that an NG tube be inserted to aid in bowel de-compression. When preparing to insert a NG tube, the nurse measures from the:",
        "option_a": "Lower lip to the shoulder to the upper sternum",
        "option_b": "Tip of the nose to the lower lip to the umbilicus",
        "option_c": "End of the tube to the first measurement line on the tube",
        "option_d": "Tip of the nose to the ear lobe to the xiphoid process or midepigastric area",
        "correct_answer": "D"
      },
      {
        "number": 303,
        "question": "Because a client is taking an MAO inhibitor, it is necessary to discuss the need for adherence to a low-tyramine diet. Which of the following are foods that she should avoid?",
        "option_a": "Pickled, aged, smoked, and fermented foods",
        "option_b": "Fresh vegetables",
        "option_c": "Broiled fresh fish and fowl",
        "option_d": "Fresh fruit such as apples and oranges",
        "correct_answer": "A"
      },
      {
        "number": 304,
        "question": "The nurse documents a client\u2018s surgical incision as having red granulated tissue. This indicates that the wound is:",
        "option_a": "Infected",
        "option_b": "Not healing",
        "option_c": "Necrotic",
        "option_d": "Healing",
        "correct_answer": "D"
      },
      {
        "number": 305,
        "question": "A 16-year-old client with a diagnosis of oppositional defiant disorder is threatening violence toward another child. In managing a potentially violent client, the nurse:",
        "option_a": "Must use the least restrictive measure possible to control the behavior",
        "option_b": "Should put the client in seclusion until he promises to behave appropriately",
        "option_c": "Should apply full restraints until the behavior is under control",
        "option_d": "Should allow other clients to observe the acting out so that they can learn from the experience",
        "correct_answer": "A"
      },
      {
        "number": 306,
        "question": "A client returns to the cardiovascular intensive care unit following his coronary artery bypass graft. In planning his care, the most important electrolyte the nurse needs to monitor will be:",
        "option_a": "Chloride",
        "option_b": "HCO3",
        "option_c": "Potassium",
        "option_d": "Sodium",
        "correct_answer": "C"
      },
      {
        "number": 307,
        "question": "A client is admitted to the hospital with diabetic ketoacidosis. The emergency room nurse should anticipate the administration of:",
        "option_a": "Humulin N",
        "option_b": "Humulin R",
        "option_c": "Humulin U",
        "option_d": "Humulin L",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 10,
    "title": "NCLEX RN Practice Series 10",
    "question_count": 34,
    "questions": [
      {
        "number": 308,
        "question": "A client has received digoxin 0.25 mg po daily for 2 weeks. Which of the following digoxin levels indicates toxicity?",
        "option_a": "0.5 ng/mL",
        "option_b": "1.0 ng/mL",
        "option_c": "2.0 ng/mL",
        "option_d": "3.0 ng/mL",
        "correct_answer": "D"
      },
      {
        "number": 309,
        "question": "A male client received a heart-lung transplant 1 month ago at a local transplant center. While visiting the nursing center to have his blood pressure taken, he complains of recent weakness and fatigue. He also tells the nurse that he is considering stopping his cyclosporine because it is expensive and is causing his face to become round. He fears he will catch viruses and be more susceptible to infections. The nurse responds to this last statement by explaining that cyclosporine:",
        "option_a": "Is given to prevent rejection and makes him less susceptible to infection than other oral corticosteroids",
        "option_b": "Is available at discount pharmacies for a reduced price",
        "option_c": "Is usually not necessary after the first year following transplantation",
        "option_d": "May initially cause weakness, dizziness, and fatigue, but these side effects will gradually resolve themselves",
        "correct_answer": "A"
      },
      {
        "number": 310,
        "question": "Decreased pulmonary blood flow, right-to-left shunting, and deoxygenated blood reaching the systemic circulation are characteristic of:",
        "option_a": "Tetralogy of Fallot",
        "option_b": "Ventricular septal defect",
        "option_c": "Patent ductus arteriosus",
        "option_d": "Transposition of the great arteries",
        "correct_answer": "A"
      },
      {
        "number": 311,
        "question": "As a postoperative cholecystectomy client completes tomorrow\u2018s dinner menu, the nurse knows that one of the following meal choices will best provide the essential vitamin(s) necessary for proper tissue healing?",
        "option_a": "Liver, white rice, spinach, tossed salad, custard pudding",
        "option_b": "Fish fillet, carrots, mashed potatoes, butterscotch pudding",
        "option_c": "Roast chicken, gelatin with sliced fruit",
        "option_d": "Chicken breast fillet in tomato sauce, potatoes, mustard greens, orange and strawberry slices",
        "correct_answer": "D"
      },
      {
        "number": 312,
        "question": "While changing the dressing on a client\u2018s central line, the nurse notices redness and warmth at the needle insertion site. Which of the following actions would be appropriate to implement based on this finding?",
        "option_a": "Discontinue the central line.",
        "option_b": "Begin a peripheral IV.",
        "option_c": "Document in the nurse\u2018s notes and notify the physician after redressing the site.",
        "option_d": "Clean the site well and redress.",
        "correct_answer": "C"
      },
      {
        "number": 313,
        "question": "The nurse has been assigned a client who delivered a 6- lb, 12-oz baby boy vaginally 40 minutes ago. The initial assessment of greatest importance for this client would be:",
        "option_a": "Length of her labor",
        "option_b": "Type of episiotomy",
        "option_c": "Amount of IV fluid to be infused",
        "option_d": "Character of the fundus",
        "correct_answer": "D"
      },
      {
        "number": 314,
        "question": "When assessing residual volume in tube feeding, the feeding should be delayed if the amount of gastric contents (residual) exceeds:",
        "option_a": "20 mL",
        "option_b": "25 mL",
        "option_c": "30 mL",
        "option_d": "50 mL",
        "correct_answer": "D"
      },
      {
        "number": 315,
        "question": "The nurse begins morning assessment on a male client and notices that she is unable to palpate either of his dorsalis pedis pulses in his feet. What is the first nursing action after assessing this finding?",
        "option_a": "Palpate these pulses again in 15 minutes.",
        "option_b": "Use a Doppler to determine presence and strength of these pulses.",
        "option_c": "Document the finding that the pulses are not palpable.",
        "option_d": "Call the physician and notify the physician of this finding.",
        "correct_answer": "B"
      },
      {
        "number": 316,
        "question": "A child receiving chemotherapeutic drugs experiences a loss of appetite directly related to the therapy. Which of the following strategies should be most effective in encouraging the child to eat?",
        "option_a": "Provide a well-balanced diet at usual times, and restrict dessert if the child fails to eat well.",
        "option_b": "Schedule procedures immediately after eating so that the child will not be tired or in pain at mealtime.",
        "option_c": "Offer the child a diet with a wider variety of foods and with more seasoning than her usual diet.",
        "option_d": "Offer the child smaller meals more frequently than usual, and include as many of her favorite foods as possible. \u201c",
        "correct_answer": "D"
      },
      {
        "number": 317,
        "question": "In admitting a client to the psychiatric unit, the nurse must explain the rules and regulations of the unit. A client with antisocial personality disorder makes the following remark, \u2015Forget all those rules. I always get along well with the nurses.\u2016 Which nursing response to him would be most effective?",
        "option_a": "\u2015OK, don\u2018t listen to the rules. See where you end up.\u2016",
        "option_b": "\u2015I\u2018m pleased that you get along so well with the staff. You must still know and abide by the rules.\u2016",
        "option_c": "\u2015It is irrelevant whether you get along with the nurses.\u2016",
        "option_d": "\u2015I\u2018m not the other nurses. You better read the rules yourself.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 318,
        "question": "A client is having a pneumonectomy done today, and the nurse is planning her postoperative care. Nursing interventions for a postoperative left pneumonectomy would include:",
        "option_a": "Monitoring the chest tubes",
        "option_b": "Positioning the client on the right side",
        "option_c": "Positioning the client in semi-Fowler position with a pillow under the shoulder and back",
        "option_d": "Monitoring the right lung for an increase in rales",
        "correct_answer": "D"
      },
      {
        "number": 319,
        "question": "The nurse recognizes that a client with the diagnosis of cholecystitis and cholelithiasis would expect to have stools that are:",
        "option_a": "Clay or gray colored",
        "option_b": "Watery and loose",
        "option_c": "Bright-red streaked",
        "option_d": "Black",
        "correct_answer": "A"
      },
      {
        "number": 320,
        "question": "Following a fracture of the left femur, a client develops symptoms of osteomyelitis. During the acute phase of osteomyelitis, nursing care is directed toward:",
        "option_a": "Moving or turning the client\u2018s left leg carefully to minimize pain and discomfort",
        "option_b": "Allowing the client out of bed only in a wheelchair or gurney to minimize weight bearing on the left leg",
        "option_c": "Providing the client with a high-protein, high-fiber diet to promote healing",
        "option_d": "Instituting physical therapy to ensure restoration of optimal functioning of the leg",
        "correct_answer": "A"
      },
      {
        "number": 321,
        "question": "In working with a manipulative client, which of the following nursing interventions would be most appropriate?",
        "option_a": "Bargaining with the client as a strategy to control the behavior",
        "option_b": "Redirecting the client",
        "option_c": "Providing a consistent set of guidelines and rules",
        "option_d": "Assigning the client to different staff persons each day",
        "correct_answer": "C"
      },
      {
        "number": 322,
        "question": "A 19-year-old male client arrived via ambulance to the emergency room following a motorcycle accident. He is comatose. His face has evidence of dried blood. On assessment, the nurse notes an obvious injury to his left eye. The preferred positioning for a client with an obvious eye injury is:",
        "option_a": "Reclining to control bleeding",
        "option_b": "Any position in which the client is comfortable",
        "option_c": "Side-lying, either left or right",
        "option_d": "Sitting with head support",
        "correct_answer": "D"
      },
      {
        "number": 323,
        "question": "A 50-year-old depressed client has recently lost his job. He has been reluctant to leave his hospital room. Nursing care would include:",
        "option_a": "Forcing the client to attend all unit activities",
        "option_b": "Encouraging the client to discuss why he is so sad",
        "option_c": "Monitoring elimination patterns",
        "option_d": "Providing sensory stimulation",
        "correct_answer": "C"
      },
      {
        "number": 324,
        "question": "A 15-year-old client was diagnosed as having cystic fibrosis at 8 months of age. He is in the hospital for a course of IV antibiotic therapy and vigorous chest physiotherapy. He has a poor appetite. The nurse can best help him to meet the desired outcome of consuming a prescribed number of calories by:",
        "option_a": "Including the client in planning sessions to select the type of meal plan and foods for his diet",
        "option_b": "Working with the nutritionist to devise a diet with significantly increased calories",
        "option_c": "Selecting foods for the client\u2018s diet that are high in calories and instituting a strict calorie count",
        "option_d": "Constantly providing him with chips, dips, and candies, because the number of calories consumed is more important than the quality of foods \u201c",
        "correct_answer": "A"
      },
      {
        "number": 325,
        "question": "A 68-year-old man was recently diagnosed with endstage renal disease. He has not yet begun dialysis but is experiencing severe anemia with associated symptoms of dyspnea on exertion and chest pain. Which statement best describes the management of anemia in renal failure?",
        "option_a": "Hematocrit levels usually remain slightly below normalin clients with renal failure.",
        "option_b": "Transfusion is often begun as early as possible to prevent complications of anemia such as dyspnea and angin A.",
        "option_c": "Anemia in renal failure is frequently caused by low serum iron and ferritin and corrected by oral iron and ferritin replacement therapy.",
        "option_d": "The renal secretion of erythropoiesis is decreased. The bone marrow requires erythropoietin to mature red blood cells.",
        "correct_answer": "D"
      },
      {
        "number": 326,
        "question": "One week ago, a 21-year-old client with a diagnosis of bipolar disorder was started on lithium 300 mg po qid. A lithium level is ordered. The client\u2018s level is 1.3 mEq/L. The nurse recognizes that this level is considered to be:",
        "option_a": "Within therapeutic range",
        "option_b": "Below therapeutic range",
        "option_c": "Above therapeutic range",
        "option_d": "At a level of toxic poisoning",
        "correct_answer": "A"
      },
      {
        "number": 327,
        "question": "Chorioamnionitis is a maternal infection that is usually associated with:",
        "option_a": "Prolonged rupture of membranes",
        "option_b": "Postterm deliveries",
        "option_c": "Maternal pyelonephritis",
        "option_d": "Maternal dehydration",
        "correct_answer": "A"
      },
      {
        "number": 328,
        "question": "A male client had a right below-the-knee amputation 4 days ago. His incision is healing well. He has gotten out of bed several times and sat at the side of the bed. Each time after returning to bed, he has experienced pain as if it were located in his right foot. Which nursing measure indicates the nurse has a thorough understanding of phantom pain and its management?",
        "option_a": "Phantom pain is entirely in the client\u2018s mind. The client should be instructed that the pain is psychological and should not be treated.",
        "option_b": "The basis for phantom pain may occur because the nerves still carry pain sensation to the brain even though the limb has been amputated. The pain is real, intense, and should be treated.",
        "option_c": "The cause of phantom pain is unknown. The nurse should provide the client with support, promote sleep, and handle the injured limb smoothly and gently.",
        "option_d": "Phantom pain is caused by trauma, spasms, and edema at the incisional site. It will decrease when postoperative edema decreases. It should be treated with nonnarcotic medication whenever possible.",
        "correct_answer": "B"
      },
      {
        "number": 329,
        "question": "A 9-month-old infant visits her pediatrician for a routine visit. A developmental assessment was initiated by the nurse. Which skill would cause the nurse to be concerned about the infant\u2018s developmental progression?",
        "option_a": "She sits briefly alone with assistance.",
        "option_b": "She creeps and crawls.",
        "option_c": "She pulls herself to her feet with help.",
        "option_d": "She stands while holding onto furniture. \u201c",
        "correct_answer": "A"
      },
      {
        "number": 330,
        "question": "A 70-year-old homeless woman is admitted with pneumoni",
        "option_a": "She is weak, emaciated, and febrile. The physician orders enteral feedings intermittently by nasogastric tube. When inserting the nasogastric tube, once the tube passes through the oropharynx, the nurse will instruct the client to: A. Tilt her head backwards",
        "option_b": "Swallow as tube passes",
        "option_c": "Hold breath as tube passes",
        "option_d": "Cough as tube passes",
        "correct_answer": "B"
      },
      {
        "number": 331,
        "question": "A 29-year-old client is diagnosed with borderline personality disorder. He has aroused the nurse\u2018s anger by using a condescending tone of voice with other clients and staff persons. Which of the following statements from the nurse would be most appropriate in acknowledging feelings regarding the client\u2018s behavior?",
        "option_a": "\u2015I feel angry when I hear that tone of voice.\u2016",
        "option_b": "\u2015You make me angry when you talk to me that way.\u2016",
        "option_c": "\u2015Are you trying to get me angry?\u2016",
        "option_d": "\u2015Why do you treat me that way?\u2016",
        "correct_answer": "A"
      },
      {
        "number": 332,
        "question": "The nurse is assisting a 4th-day postoperative cholecystectomy client in planning her meals for tomorrow\u2018s menu. Which vitamin is the most essential in promoting tissue healing?",
        "option_a": "Vitamin C",
        "option_b": "Vitamin B1",
        "option_c": "Vitamin D",
        "option_d": "Vitamin A \u201c",
        "correct_answer": "A"
      },
      {
        "number": 333,
        "question": "On admission to the inpatient unit, a 34-year-old client is able to follow simple directions, but with great difficulty. He is worried about how he can keep clean in such a public place and repeatedly dusts his bureau, straightens his bed, and adjusts the clothes in his closet. The client is experiencing a severe level of anxiety. Which response by the nurse would be most therapeutic in initially attempting to reduce his anxiety?",
        "option_a": "\u2015You will not be allowed to remain in your room if you continue to bother things.\u2016",
        "option_b": "\u2015I can see how uncomfortable you are, but I would like you to walk with me so I can show you around the unit.\u2016",
        "option_c": "\u2015Tell me why your room needs to be so clean.\u2016",
        "option_d": "\u2015I\u2018ve inspected this room and it is perfectly clean.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 334,
        "question": "A baby who was diagnosed with pyloric stenosis has continued to have projectile vomiting. With prolonged vomiting, the infant is prone to:",
        "option_a": "Respiratory acidosis",
        "option_b": "Respiratory alkalosis",
        "option_c": "Metabolic acidosis",
        "option_d": "Metabolic alkalosis",
        "correct_answer": "D"
      },
      {
        "number": 335,
        "question": "A client with cystic fibrosis exhibits activity intolerance related to the pulmonary problems associated with his \u201c",
        "option_a": "Create a sense of well-being and self-worth",
        "option_b": "Help him overcome respiratory infections",
        "option_c": "Establish an effective, habitual breathing pattern",
        "option_d": "Promote normal growth and development",
        "correct_answer": "C"
      },
      {
        "number": 336,
        "question": "The nurse is caring for a client with pancreatitis. Which of the following IV medications would the nurse expect the physician to prescribe for control of pain in this client?",
        "option_a": "Morphine sulfate",
        "option_b": "Kerolac tromethamine (Toradol)",
        "option_c": "Promethazine (Phenergan)",
        "option_d": "Meperidine (Demerol)",
        "correct_answer": "D"
      },
      {
        "number": 337,
        "question": "At her first prenatal visit, a 21-year-old woman who is gravida 2, para 0, ab 1, is currently at 32 weeks\u2018 gestation and has a history of drug abuse, smoking, and occasional ethyl alcohol use. Fetal ultrasound tests indicate poor fetal growth. The most likely reason for the infant\u2018s intrauterine growth retardation is:",
        "option_a": "The client\u2018s young age",
        "option_b": "The client\u2018s previous abortion",
        "option_c": "The client\u2018s history of drug, ethyl alcohol, and tobacco use",
        "option_d": "The client\u2018s late prenatal care",
        "correct_answer": "C"
      },
      {
        "number": 338,
        "question": "A 25-year-old lawyer who is married with three young children works long hours in an effort to become a partner in the law firm. Following a recent hospitalization for a bleeding ulcer, he was referred for therapy to treat this psychophysiological disorder. On meeting with the therapist, he informed him or her that he was a busy man and did not have much time for this \u2015psych stuff.\u2016 When guiding the client to ventilate his feelings, the therapist can expect him to express feelings of:",
        "option_a": "Guilt",
        "option_b": "Shame",
        "option_c": "Despair",
        "option_d": "Anger",
        "correct_answer": "D"
      },
      {
        "number": 339,
        "question": "A client on the infectious disease unit is discussing transmission of human immunodeficiency virus (HIV). The nurse would need to provide more client education based on which client statement?",
        "option_a": "\u2015HIV is a virus transmitted by sexual contact.\u2016",
        "option_b": "\u2015Condoms reduce the transmission of HIV.\u2016",
        "option_c": "\u2015HIV is a virus that is easily transmitted by casual contact.\u2016",
        "option_d": "\u2015HIV can be transmitted to an unborn infant.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 340,
        "question": "A 70-year-old female client is admitted to the medical intensive care unit with a diagnosis of cerebrovascular accident (CVA). She is semicomatose, responding to pain and change in position. She is unable to speak or cough. In planning her nursing care for the first 24 hours following a CVA, which nursing diagnosis should receive the highest priority?",
        "option_a": "Ineffective airway clearance related to immobility, ineffective cough, and decreased level of consciousness",
        "option_b": "Altered cerebral tissue perfusion related to pathophysiological changes that decrease blood flow \u201c",
        "option_c": "Potential for injury related to impaired mobility and seizures",
        "option_d": "Impaired verbal communication related to aphasia",
        "correct_answer": "A"
      },
      {
        "number": 341,
        "question": "A client had a transurethral resection of the prostate yesterday. He is concerned about the small amount of blood that is still in his urine. The nurse explains that the blood in his urine:",
        "option_a": "Should not be there on the second day",
        "option_b": "Will stop when the Foley catheter is removed",
        "option_c": "Is normal and he need not be concerned about it",
        "option_d": "Can be removed by irrigating the bladder",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 11,
    "title": "NCLEX RN Practice Series 11",
    "question_count": 34,
    "questions": [
      {
        "number": 342,
        "question": "A 28-year-old client performs a long, involved ritual in getting up and preparing for the day. He became unable to get to his job before noon. His family, in desperation, has admitted him to the hospital\u2018s psychiatric unit. On the unit, he is always late for breakfast, which is served at 8 am. The nurse identifies that the best approach to this problem is to:",
        "option_a": "Allow him to eat late",
        "option_b": "Suggest that he do the rituals after breakfast",
        "option_c": "Get him up early so that he can complete the ritual before breakfast",
        "option_d": "Ask him to get all the other clients up so that he will forget about his ritual",
        "correct_answer": "C"
      },
      {
        "number": 343,
        "question": "A client is diagnosed with Mycobacterium tuberculosis. He is placed in respiratory isolation, intubated, and receives mechanical ventilation. When performing suctioning, the nurse should: E. Suction for a maximum of 20 seconds F. Hyperoxygenate before and after suctioning G. Suction for a maximum of 30 seconds H. Maintain clean technique during suctioning Answer: B Explanation: (A) The maximum time for suctioning is 10\u201315 seconds. (B) Supplemental O2should be administered before and after suctioning to reduce hypoxi",
        "option_a": "(C) The maximum time for suctioning is 10\u201315 seconds. (D) Strict sterile technique should be used during suctioning. QUESTION 344 A 67-year-old postoperative TURP client has hematuri A. The nurse caring for him reviews his postoperative orders and recognizes that which one of the following prescribed medications would best relieve this problem? A. Acetaminophen suppository 650 mg",
        "option_b": "Meperidine 50 mg IM",
        "option_c": "Promethazine 25 mg IM",
        "option_d": "Aminocaproic acid (Amicar) 6 g/24 hr",
        "correct_answer": "D"
      },
      {
        "number": 345,
        "question": "Before completing a nursing diagnosis, the nurse must first: \u201c",
        "option_a": "Write goals and objectives",
        "option_b": "Perform an assessment",
        "option_c": "Plan interventions",
        "option_d": "Perform evaluation",
        "correct_answer": "B"
      },
      {
        "number": 346,
        "question": "A 22-year-old client presents with a diagnosis of antisocial personality disorder and a history of using drugs, writing numerous checks with insufficient funds, and stealing. He appears charming and intelligent, and the other clients are impressed and want to be liked by him. The greatest problem that may arise from this situation is that:",
        "option_a": "He will manipulate the other clients for his own benefit",
        "option_b": "He will cause the other clients to become psychotic",
        "option_c": "He will become delusional and hallucinate as a result of the excess attention given to him by peers",
        "option_d": "He may exhibit self-mutilative behavior",
        "correct_answer": "A"
      },
      {
        "number": 347,
        "question": "A 45-year-old client has a permanent colostomy. Which of the following foods should he avoid?",
        "option_a": "Peanut butter and jelly sandwich and milk",
        "option_b": "Corn beef and cabbage and boiled potatoes",
        "option_c": "Oatmeal, whole-wheat toast, and milk",
        "option_d": "Tuna on whole-wheat bread and iced tea",
        "correct_answer": "B"
      },
      {
        "number": 348,
        "question": "A client presents to the emergency room with cyanosis, coughing, tachypnea, and tachycardi",
        "option_a": "She has a history of asthm A. Arterial blood gas values are pH 7.28, PaO2 54, PaCO2 60, and HCO3 24. The nursing assessment of arterial blood gases indicate the presence of: \u201c",
        "option_b": "Respiratory acidosis",
        "option_c": "Metabolic alkalosis",
        "option_d": "Metabolic acidosis",
        "correct_answer": "B"
      },
      {
        "number": 349,
        "question": "A 55-year-old client is admitted with a diagnosis of renal calculi. He presented with severe right flank pain, nausea, and vomiting. The most important nursing action for him at this time is:",
        "option_a": "Intake and output measurement",
        "option_b": "Daily weights",
        "option_c": "Straining of all urine",
        "option_d": "Administration of O2 therapy",
        "correct_answer": "C"
      },
      {
        "number": 350,
        "question": "A client returned to the unit following a pneumonectomy. As the nurse is assessing her incision, she notices fresh blood on the dressing. The nurse should first:",
        "option_a": "Reinforce the dressing.",
        "option_b": "Continue to monitor the dressing.",
        "option_c": "Notify the physician.",
        "option_d": "Note the time and amount of blood.",
        "correct_answer": "C"
      },
      {
        "number": 351,
        "question": "A 5-year-old child cries continually in her bed. Her parents have been unsuccessful in assisting her in expressing her feelings. Which activity should the nurse provide the child to assist her in expressing her feelings? \u201c",
        "option_a": "Books with colorful pictures",
        "option_b": "Music",
        "option_c": "Riding toys",
        "option_d": "Puppets",
        "correct_answer": "D"
      },
      {
        "number": 352,
        "question": "Which of the following blood gas parameters primarily reflects respiratory function?",
        "option_a": "PCO2",
        "option_b": "CO2 content of the blood",
        "option_c": "HCO3",
        "option_d": "Base excess",
        "correct_answer": "A"
      },
      {
        "number": 353,
        "question": "A 2-day-old infant boy has been diagnosed with an atrial septal defect due to a persistent patent foramen ovale. When explaining the diagnosis to the mother, the nurse includes in the discussion the function of the foramen ovale. In fetal circulation, the foramen ovale allows a portion of the blood to bypass the:",
        "option_a": "Left ventricle",
        "option_b": "Pulmonary system",
        "option_c": "Liver",
        "option_d": "Superior vena cava",
        "correct_answer": "B"
      },
      {
        "number": 354,
        "question": "A 27-year-old primigravida stated that she got up from the chair to fix dinner and bright red blood was running \u201c",
        "option_a": "Decreased cardiac output related to excessive bleeding",
        "option_b": "Potential for fluid volume excess related to fluid resuscitation",
        "option_c": "Anxiety related to threat to self",
        "option_d": "Alteration in parenting related to potential fetal injury",
        "correct_answer": "A"
      },
      {
        "number": 355,
        "question": "Home-care instructions for the child following a cardiac catheterization should include:",
        "option_a": "Notify the physician if a slight bruise develops around the insertion site.",
        "option_b": "Use sponge bathing until stitches are removed.",
        "option_c": "Give aspirin if the child complains of pain at the insertion site.",
        "option_d": "Keep a clean, dry dressing on the insertion site for 2 days.",
        "correct_answer": "B"
      },
      {
        "number": 356,
        "question": "The nurse is caring for a client who has had a tracheostomy for 7 years. The client is started on a fullstrength tube feeding at 75 mL/hr. Prior to starting the tube feeding, the nurse confirms placement of the tube in the stomach. The hospital policy states that all tube feeding must be dyed blue. On suctioning, the nurse notices the sputum to be a blue color. This is indicative of which of the following?",
        "option_a": "The client aspirated tube feeding.",
        "option_b": "The nurse has placed the suction catheter in the esophagus.",
        "option_c": "This is a normal finding.",
        "option_d": "The feeding is infusing into the trache A.",
        "correct_answer": "A"
      },
      {
        "number": 357,
        "question": "A client has returned to the unit following a left femoral popliteal bypass graft. Six hours later, his dorsalis pedis pulse cannot be palpated, and his foot is cool and dusky. The nurse should:",
        "option_a": "Continue to monitor the foot",
        "option_b": "Notify the physician immediately",
        "option_c": "Reposition and reassess the foot",
        "option_d": "Assure the client that his foot is fine",
        "correct_answer": "B"
      },
      {
        "number": 358,
        "question": "A 2-year-old child will undergo a cardiac catheterization tomorrow to evaluate his ventricular septal defect. Based on his developmental stage, the nurse:",
        "option_a": "Uses pictures to explain the procedure to the child and his parents that evening",
        "option_b": "Explains the procedure using simple words and sentences just before the preoperative sedation",
        "option_c": "Asks the parents to explain the procedure to the child after she explains it to them",
        "option_d": "Asks the parents to leave the room while the preoperative medication and instructions are given",
        "correct_answer": "B"
      },
      {
        "number": 359,
        "question": "A 34-year-old client who is gravida 1, para 0 has a history of infertility and conceived this pregnancy while taking fertility drugs. She is at 32 weeks\u2018 gestation and is carrying triplets. She is complaining of low back pain and a feeling of pelvic pressure. Her cervical exam reveals a long, closed cervix. The nurse notes that the client is experiencing mild uterine contractions every 7\u20138 minutes after the nurse has placed her on the fetal monitor. Her condition should indicate that:",
        "option_a": "Her cervix shows she will likely deliver soon",
        "option_b": "The nurse should not be alarmed because mild uterine activity is common at 32 weeks\u2018 gestation",
        "option_c": "She may be in preterm labor because this is more common with multiple pregnancies",
        "option_d": "She most likely has a urinary tract infection (UTI) because this is common with pregnancy",
        "correct_answer": "C"
      },
      {
        "number": 360,
        "question": "Clients receiving antipsychotic drug therapy will often exhibit extrapyramidal side effects that are reversible with which of the following agents ordered by the physician?",
        "option_a": "Phenothiazines",
        "option_b": "Anticholinergics",
        "option_c": "Anti-Parkinsonian drugs",
        "option_d": "Tricyclic agents",
        "correct_answer": "B"
      },
      {
        "number": 361,
        "question": "An 80-year-old widow is living with her son and daughter- in-law. The home health nurse has been making weekly visits to draw blood for a prothrombin time test. The client is taking 5 mg of coumadin per day. She appears more debilitated, and bruises are noted on her face. Elder abuse is suspected. Which of the following are signs of persons who are at risk for abusing an elderly person?",
        "option_a": "A family member who is having marital problems and is regularly abusing alcohol",
        "option_b": "A person with adequate communication and coping skills who is employed by the family",
        "option_c": "A friend of the family who wants to help but is minimally competent",
        "option_d": "A lifelong friend of the client who is often confused \u201c",
        "correct_answer": "A"
      },
      {
        "number": 362,
        "question": "The primary focus of nursing interventions for the child experiencing sickle cell crisis is aimed toward:",
        "option_a": "Maintaining an adequate level of hydration",
        "option_b": "Providing pain relief",
        "option_c": "Preventing infection",
        "option_d": "O2 therapy",
        "correct_answer": "A"
      },
      {
        "number": 363,
        "question": "A client is to have a coronary artery bypass graft performed in the morning using a saphenous vein. He wants to know why the physician does not use the internal mammary artery for his bypass graft because his friend\u2018s physician uses this artery. The nurse tells the client that the internal mammary artery:",
        "option_a": "Takes more time to remove",
        "option_b": "Has a greater risk of becoming reoccluded",
        "option_c": "Is smaller in diameter",
        "option_d": "Has too many valves",
        "correct_answer": "A"
      },
      {
        "number": 364,
        "question": "A client has ascites, which is caused by:",
        "option_a": "Decreased plasma proteins",
        "option_b": "Electrolyte imbalance \u201c",
        "option_c": "Decreased renal function",
        "option_d": "Portal hypertension",
        "correct_answer": "A"
      },
      {
        "number": 365,
        "question": "The most appropriate method of evaluating whether the diet of a child with cystic fibrosis is meeting his caloric needs is:",
        "option_a": "Careful monitoring of weight loss or gain",
        "option_b": "Carefully recording amounts and types of foods ingested",
        "option_c": "Keeping a strict account of the number of calories ingested",
        "option_d": "Keeping a careful account of the amount of pancreatic enzymes ingested",
        "correct_answer": "A"
      },
      {
        "number": 366,
        "question": "A client had a right below-the-knee amputation 4 days ago. He is complaining of pain in his right lower leg. The nurse should:",
        "option_a": "Remind the client that he no longer has that part of his leg and assure him he will be OK",
        "option_b": "Call the physician to request a psychological consultation for the client",
        "option_c": "Turn on the television to distract the client\u2018s attention from his amputated leg",
        "option_d": "Give the client his order of Demerol 50 mg IM prn",
        "correct_answer": "D"
      },
      {
        "number": 367,
        "question": "A 27-year-old healthy primigravida is brought to the labor and birthing room by her husband at 32 weeks\u2018 gestation. She experienced a sudden onset of painless vaginal bleeding. Following an ultrasound examination, the diagnosis of bleeding secondary to complete placenta previa is made. Expected assessment findings \u201c",
        "option_a": "A rigid, boardlike abdomen",
        "option_b": "Uterine atony",
        "option_c": "A soft relaxed abdomen",
        "option_d": "Hypertonicity of the uterus",
        "correct_answer": "C"
      },
      {
        "number": 368,
        "question": "Succinylcholine chloride (Anectine) is ordered prior to electroconvulsive therapy treatment for depressed clients. The nurse explains that the purpose of the drug is to:",
        "option_a": "Relax muscles",
        "option_b": "Relieve anxiety",
        "option_c": "Reduce secretions",
        "option_d": "Act as an anesthetic",
        "correct_answer": "A"
      },
      {
        "number": 369,
        "question": "Plans for the care of a client with an ulcer caused by emotional problems need to take into consideration that:",
        "option_a": "His priority needs are limited to medical management",
        "option_b": "There is no real psychological basis for his illness",
        "option_c": "The disorder is a threat to his physical well-being",
        "option_d": "He is unable to participate in planning his care",
        "correct_answer": "C"
      },
      {
        "number": 370,
        "question": "A client has just been transferred to the floor from the labor and delivery unit following delivery of a stillborn \u201c",
        "option_a": "Quietly leave her room, allowing her more private time to deal with her loss.",
        "option_b": "Tell her that what happened was for the best and that she is still young and can have other children.",
        "option_c": "Tell her how sorry you are, and let her know that her child is now a little angel in heaven.",
        "option_d": "Tell her how sorry you are about the loss of her baby, and acknowledge her anger as being a normal stage of grief. Assure her that you are there to help her in any way you can.",
        "correct_answer": "D"
      },
      {
        "number": 371,
        "question": "Except for initial explosiveness on admission, a client diagnosed with schizophrenia stays in her room. She continues to believe other people are out to get her. A nursing intervention basic to improving withdrawn behavior is:",
        "option_a": "Assigning her to occupational therapy",
        "option_b": "Having her sit with the nurses while they chart",
        "option_c": "Helping her to make friends",
        "option_d": "Facilitating communication",
        "correct_answer": "D"
      },
      {
        "number": 372,
        "question": "A 72-year-old client with a new colostomy is being evaluated at the clinic today for constipation. When discussing diet with the client, the nurse recognizes that which one of the following foods most likely caused this problem?",
        "option_a": "Fried chicken",
        "option_b": "Eggs",
        "option_c": "Tapioca",
        "option_d": "Cabbage",
        "correct_answer": "C"
      },
      {
        "number": 373,
        "question": "Which of the following nursing actions is essential to prevent drug-resistant tuberculosis?",
        "option_a": "Monitor liver function.",
        "option_b": "Monitor renal function.",
        "option_c": "Assess knowledge of respiratory isolation.",
        "option_d": "Monitor compliance with drug therapy.",
        "correct_answer": "D"
      },
      {
        "number": 374,
        "question": "A successful executive left her job and became a housewife after her marriage to a plastic surgeon. She started doing volunteer work for a charity organization. She developed pain in her legs that advanced to the point of paralysis. Her physicians can find no organic basis for the paralysis. The client\u2018s behavior can be described as:",
        "option_a": "Housework phobia",
        "option_b": "Malingering",
        "option_c": "Conversion reaction",
        "option_d": "Agoraphobia",
        "correct_answer": "C"
      },
      {
        "number": 375,
        "question": "The nurse needs to be aware that the most common early complication of a myocardial infarction is:",
        "option_a": "Diabetes mellitus",
        "option_b": "Anaphylactic shock",
        "option_c": "Cardiac hypertrophy",
        "option_d": "Cardiac dysrhythmia",
        "correct_answer": "D"
      },
      {
        "number": 376,
        "question": "Several months after antibiotic therapy, a child is readmitted to the hospital with an exacerbation of osteomyelitis, which is now in the chronic stage. The mother appears anxious and asks what she could have done to prevent the exacerbation. The nurse\u2018s response is based on the knowledge that chronic osteomyelitis:",
        "option_a": "Is caused by poor physical conditions or poor nutrition",
        "option_b": "Often results from unhygienic conditions or an unclean environment",
        "option_c": "Is directly related to sluggish circulation in the affected limb",
        "option_d": "May develop from sinuses in the involved bone that retain infectious material",
        "correct_answer": "D"
      }
    ]
  },
  {
    "series_number": 12,
    "title": "NCLEX RN Practice Series 12",
    "question_count": 34,
    "questions": [
      {
        "number": 377,
        "question": "The nurse is notified that a 27-year-old primigravida diagnosed with complete placenta previa is to be admitted to the hospital for a cesarean section. The client is now at 36 weeks\u2018 gestation and is presently having bright red bleeding of moderate amount. On admission, the nursing intervention that the nurse should give the highest priority to is:",
        "option_a": "Shave the client\u2018s abdomen and arrange her lab work",
        "option_b": "Determine the status of the fetus by fetal heart tones",
        "option_c": "Start an IV infusion in the client\u2018s arm",
        "option_d": "Insert an indwelling catheter into her bladder",
        "correct_answer": "B"
      },
      {
        "number": 378,
        "question": "The parents of a 2-year-old child are ready to begin toilet training activities with him. His parents feel he is ready to train because he is now 2 years old. What would the nurse identify as readiness in this child? \u201c",
        "option_a": "Patience by the child when wearing soiled diapers",
        "option_b": "Communicating the urge to defecate or urinate",
        "option_c": "The child awakening wet from his naps",
        "option_d": "The age at which the child\u2018s siblings were trained",
        "correct_answer": "B"
      },
      {
        "number": 379,
        "question": "The 4th of July holiday comes while a client is in the hospital being treated for schizophreni",
        "option_a": "She is taking chlorpromazine and has improved to the point of being allowed to go with a group to the park for a picnic. The side effect of chlorpromazine that the nurse needs to keep in mind during this outing is: A. Hypotension",
        "option_b": "Photosensitivity",
        "option_c": "Excessive appetite",
        "option_d": "Dryness of the mouth",
        "correct_answer": "B"
      },
      {
        "number": 380,
        "question": "Parents of children receiving chemotherapy should be warned that alopecia is a side effect and that:",
        "option_a": "Children seldom show concern about losing their hair",
        "option_b": "The hair will come out gradually, and the loss will not be noticeable for some time",
        "option_c": "It is best for girls to choose a wig similar to their hair style and color before the hair falls out",
        "option_d": "The parents will soon get used to seeing their children without hair, and it will no longer bother them",
        "correct_answer": "C"
      },
      {
        "number": 381,
        "question": "A client had abdominal surgery this morning. The nurse notices that there is a small amount of bloody drainage \u201c",
        "option_a": "Serosanguinous",
        "option_b": "Purulent",
        "option_c": "Sanguinous",
        "option_d": "Catarrhal",
        "correct_answer": "C"
      },
      {
        "number": 382,
        "question": "A neonate was admitted to the hospital with projectile vomiting. According to the parents, the baby had experienced vomiting episodes after feeding for the last 2 days. A medical diagnosis of hypertrophic pyloric stenosis was made. On assessment, the infant had poor skin turgor, sunken eyeballs, dry skin, and weight loss. Identify the number-one priority nursing diagnosis.",
        "option_a": "Fluid volume deficit",
        "option_b": "Altered nutrition",
        "option_c": "Altered bowel elimination",
        "option_d": "Anxiety",
        "correct_answer": "A"
      },
      {
        "number": 383,
        "question": "A client has developed congestive heart failure secondary to his myocardial infarction. Discharge diet instructions should emphasize the reduction or avoidance of:",
        "option_a": "Fresh vegetables and fruit",
        "option_b": "Canned vegetables and fruit",
        "option_c": "Breads, cereals, and rice",
        "option_d": "Fish",
        "correct_answer": "B"
      },
      {
        "number": 384,
        "question": "A depressed client is seen at the mental health center for follow-up after an attempted suicide 1 week ago. She has taken phenelzine sulfate (Nardil), a monoamine oxidase (MAO) inhibitor, for 7 straight days. She states that she is not feeling any better. The nurse explains that the drug must accumulate to an effective level before symptoms are totally relieved. Symptom relief is expected to occur within:",
        "option_a": "10 days",
        "option_b": "2\u20134 weeks",
        "option_c": "2 months",
        "option_d": "3 months",
        "correct_answer": "B"
      },
      {
        "number": 385,
        "question": "A client\u2018s behavior is annoying other clients on the unit. He is meddling with their belongings and dominating the group. The best approach by the nurse is to:",
        "option_a": "Seclude him in his room.",
        "option_b": "Set limits on his behavior.",
        "option_c": "Have his medication increased.",
        "option_d": "Ignore him and tell the other clients that these behaviors are due to his illness and that they should understand.",
        "correct_answer": "B"
      },
      {
        "number": 386,
        "question": "A client is being treated for congestive heart failure. His medical regimen consists of digoxin (Lanoxin) 0.25 mg po daily and furosemide 20 mg po bid. Which laboratory test should the nurse monitor?",
        "option_a": "Intake and output",
        "option_b": "Calcium",
        "option_c": "Potassium",
        "option_d": "Magnesium",
        "correct_answer": "C"
      },
      {
        "number": 387,
        "question": "A male client is diagnosed with hypoparathyroidism. He has been on dialysis for several years. He is experiencing symptoms such as numbness of the lips, muscle weakness, carpopedal spasms, and wheezing. Given the client\u2018s symptoms, nursing assessment would focus on:",
        "option_a": "Detection of tetany",
        "option_b": "Detection of hypocalcemia to prevent seizures",
        "option_c": "Evidence of depression",
        "option_d": "Detection of premature cataract formation",
        "correct_answer": "A"
      },
      {
        "number": 388,
        "question": "A client is placed on lithium therapy for her manicdepressive illness. When monitoring the client, the nurse assesses the laboratory blood values. Toxicity may occur with lithium therapy when the blood level is above:",
        "option_a": "1.0 mEq/L",
        "option_b": "2.2 mEq/L",
        "option_c": "0.03 mEq/L",
        "option_d": "1.5 mEq/L",
        "correct_answer": "D"
      },
      {
        "number": 389,
        "question": "A 17-year-old pregnant client who is gravida 1, para 0, is at 36 weeks\u2018 gestation. Based on the nurse\u2018s knowledge of the maternal physiological changes in pregnancy, which of these findings would be of concern?",
        "option_a": "Complaints of dyspnea",
        "option_b": "Edema of face and hands",
        "option_c": "Pulse of 65 bpm at 8 weeks, 73 bpm at 36 weeks",
        "option_d": "Hematocrit 39% \u201c",
        "correct_answer": "B"
      },
      {
        "number": 390,
        "question": "A 14-year-old client has a history of lying, stealing, and destruction of property. Personal items of peers have been found missing. After group therapy, a peer approaches the nurse to report that he has seen the 14- year-old with some of the missing items. The best response of the nurse is to:",
        "option_a": "Request that he explain to the group why he took personal items from peers",
        "option_b": "Approach him when he is alone to inquire about his involvement in the incident",
        "option_c": "Imply to him that you doubt his involvement in the incident and request his denial",
        "option_d": "Confront him openly in group and request an apology",
        "correct_answer": "B"
      },
      {
        "number": 391,
        "question": "A 5-year-old child is hospitalized for an acute illness. The nurse encourages the family to bring her favorite objects from home. What is the nurse\u2018s rationale?",
        "option_a": "To reduce fear of the unknown",
        "option_b": "To keep the child calm",
        "option_c": "To establish a trusting relationship",
        "option_d": "To prevent or minimize separation anxiety",
        "correct_answer": "D"
      },
      {
        "number": 392,
        "question": "A male client has experienced low back pain for several years. He is the primary support of his wife and six children. Although he would qualify for disability, he plans to continue his employment as long as possible. His back pain has increased recently, and he is unable to control it with non-steroidal anti-inflammatory agents. He \u201c",
        "option_a": "TENS units have an ultrasonic effect that relaxes muscles, decreases joint stiffness, and increases range of motion.",
        "option_b": "TENS units produce endogenous opioids that affect the central nervous system with analgesic potency comparable to morphine.",
        "option_c": "TENS units work on the gate-control theory of pain; biostimulation therapy of large fibers block painful stimuli.",
        "option_d": "TENS units prevent muscle spasms, decrease the potential for further injury, and minimize pressure on joints.",
        "correct_answer": "C"
      },
      {
        "number": 393,
        "question": "A client was admitted to the hospital for a TURP. Within 48 hours of admission and 12 hours postoperatively, both the blood pressure and pulse increased. He became agitated, thought snakes were crawling on his arms and legs, and generally became unmanageable. He pulled out his IV and urinary catheter in attempt to rid himself of the snakes. He was sweating profusely. The admission nurse\u2018s notes indicated that the client admitted to \u2015having a few drinks now and then.\u2016 He is probably experiencing which of the following?",
        "option_a": "Major psychotic depression",
        "option_b": "Delirium tremens",
        "option_c": "Generalized anxiety disorder",
        "option_d": "Adjustment disorder with mixed features",
        "correct_answer": "B"
      },
      {
        "number": 394,
        "question": "The mother of a 7-year-old mental health center client reports that the client has refused to attend gymnastics for the past 2 weeks. Prior to that time, the child liked going to this class and was attending 3 times a week. In talking with the client, the nurse would:",
        "option_a": "Ask her why she doesn\u2018t like gymnastics anymore",
        "option_b": "Ask her to describe how things were at gymnastics before she started refusing to go \u201c",
        "option_c": "Tell her that it is OK to be afraid of this activity",
        "option_d": "Reassure her that things will get better once she begins the classes again",
        "correct_answer": "B"
      },
      {
        "number": 395,
        "question": "A 68-year-old client developed acute respiratory distress syndrome while hospitalized for pneumoni",
        "option_a": "After a respiratory arrest, an endotracheal tube was inserted. Several days later, numerous attempts to wean him from mechanical ventilation were ineffective, and a tracheostomy was created. For the first 24 hours following tracheostomy, it is important to minimize bleeding around the insertion site. The nurse can accomplish this by: A. Deflating the cuff for 10 minutes every other hour instead of 5 minutes every hour",
        "option_b": "Avoiding manipulation of the tracheostomy including cuff deflation",
        "option_c": "Reporting any signs of crepitus immediately to the physician",
        "option_d": "Changing tracheostomy dressing only as necessary using one-half strength hydrogen peroxide to cleanse the site",
        "correct_answer": "B"
      },
      {
        "number": 396,
        "question": "A 60-year-old woman exhibits forgetfulness, emotional lability, confusion, and decreased concentration. She has been unable to perform activities of daily living without assistance. After a thorough medical evaluation, a diagnosis of Alzheimer\u2018s disease was made. An appropriate nursing intervention to decrease the anxiety of this client would include:",
        "option_a": "Allowing the client to perform activities of daily living as much as possible unassisted",
        "option_b": "Confronting confabulations",
        "option_c": "Reality testing",
        "option_d": "Providing a highly stimulating environment",
        "correct_answer": "A"
      },
      {
        "number": 397,
        "question": "A 22-year-old single woman was admitted to the psychiatric hospital by her mother, who reported bizarre behavior. Except for going to work, she spends all her time in her room and expresses concern over neighbors spying on her. She has fears of the telephone being \u2015bugged.\u2016 Her diagnosis is schizophreni",
        "option_a": "One nurse per shift is assigned to work with the client. The primary reason for this plan would be to: A. Protect her from suicide",
        "option_b": "Enable her to develop trust",
        "option_c": "Supervise her medication regimen",
        "option_d": "Involve her in groups for social interaction",
        "correct_answer": "B"
      },
      {
        "number": 398,
        "question": "The serial sevens test is often used to determine delirium and dementi",
        "option_a": "This test aids in assessing which of the following? A. Abstract thinking",
        "option_b": "Ability to focus and concentrate thoughts",
        "option_c": "Judgment",
        "option_d": "Memory",
        "correct_answer": "B"
      },
      {
        "number": 399,
        "question": "A mother called the physician\u2018s office to ask if it would help relieve her small daughter\u2018s abdominal pain if she gave an enema and placed a heating pad on the abdomen. Her daughter has a fever and has vomited twice. The nurse\u2018s response is based on the knowledge that:",
        "option_a": "The symptoms could easily have been caused by constipation, which an enema would relieve",
        "option_b": "Heat would help to relax the abdominal muscles and relieve her pain",
        "option_c": "Both heat and enemas stimulate intestinal motility and could increase the risk of perforation",
        "option_d": "Complaints of stomach ache are common in young children and are generally best ignored",
        "correct_answer": "C"
      },
      {
        "number": 400,
        "question": "A 58-year-old client on a general surgery unit is scheduled for transurethral resection of the prostate (TURP) in 2 hours. The nurse explains to the client that this procedure means:",
        "option_a": "Removal of the prostate tissue by way of a lower abdominal midline incision through the bladder and into the prostate gland",
        "option_b": "Removal of prostate tissue by a resectoscope that is inserted through the penile urethra",
        "option_c": "Removal of the prostate tissue by an open surgical approach through an incision between the ischial tuberosities, the scrotum, and the rectum",
        "option_d": "Removal of prostate tissue by an open surgical approach through a low horizontal incision, bypassing the bladder, to the prostate gland",
        "correct_answer": "B"
      },
      {
        "number": 401,
        "question": "What specific hormone must be present in serum or urine laboratory tests used to diagnose pregnancy?",
        "option_a": "Human chorionic gonadotropin",
        "option_b": "Estrogen",
        "option_c": "-fetoprotein",
        "option_d": "Sphingomyelin",
        "correct_answer": "A"
      },
      {
        "number": 402,
        "question": "A 27-year-old primigravida at 32 weeks\u2018 gestation has been diagnosed with complete placenta previ",
        "option_a": "Conservative management including bed rest is the proper medical management. The goal for fetal survival is based on fetal lung maturity. The test used to determine fetal lung maturity is: \u201c",
        "option_b": "Metachromatic stain",
        "option_c": "Blood serum phenylalanine test",
        "option_d": "Lecithin-sphingomyelin ratio",
        "correct_answer": "D"
      },
      {
        "number": 403,
        "question": "A client was exhibiting signs of mania and was recently started on lithium carbonate. She has no known physical problems. A teaching plan for this client would include which of the following?",
        "option_a": "Regular foods should be eaten, including those that contain salt, such as bacon, ham, V-8 juice, and tomato juice.",
        "option_b": "Restrict fluids to 1000 mL/day.",
        "option_c": "Restrict foods that contain salt or sodium.",
        "option_d": "Discontinue the medication if nausea occurs.",
        "correct_answer": "A"
      },
      {
        "number": 404,
        "question": "A client is hyperactive and not sleeping. She will not remain at the table during mealtime. She is getting very limited calories and is using a lot of energy in her hyperactive state. The most therapeutic nursing action is to:",
        "option_a": "Insist that she remain at the table and eat a balanced diet.",
        "option_b": "Order a high-calorie diet with supplements.",
        "option_c": "Provide nutritious finger foods several times a day.",
        "option_d": "Offer to go to the dining room with her and allow her to open the food and inspect what she eats.",
        "correct_answer": "C"
      },
      {
        "number": 405,
        "question": "A 52-year-old client who underwent an exploratory laparotomy for a bowel obstruction begins to complain of hunger on the third postoperative day. His nasogastric (NG) tube was removed this morning, and he has an IV of D5W with 0.45% normal saline running at 125 mL/hr. He asks when he can get rid of his IV and start eating. The nurse recognizes that he will be able to begin taking oral fluids and nourishment when:",
        "option_a": "It is determined that he has no signs of wound infection",
        "option_b": "He is able to eat a full meal without evidence of nausea or vomiting",
        "option_c": "The nurse can detect bowel sounds in all four quadrants",
        "option_d": "His blood pressure returns to its preoperative baseline level or greater",
        "correct_answer": "C"
      },
      {
        "number": 406,
        "question": "A 22-year-old client who is being seen in the clinic for a possible asthma attack stops wheezing suddenly as the nurse is doing a lung assessment. Which one of the following nursing interventions is most important? C. Place the client in a supine position. D. Draw a blood sample for arterial blood gases. E. Start O2 at 4 L/min. F. Establish a patent airway. Answer: D Explanation: (A) During impending respiratory failure or asthmatic complications, the client is placed in the high-Fowler position to facilitate comfort and promote optimal gas exchange. (B) Arterial blood gases are monitored in the treatment of respiratory failure during an asthma attack, but it is not an initial intervention. (C) O2 therapy is used during an asthma attack, but it is not the initial intervention. The usual prescribed amount is a cautiously low flow rate of 1\u20132 L/min. (D) Wheezing is a characteristic clinical finding during an asthma attack. If wheezing suddenlyceases, it usually indicates a complete airway obstruction and requires immediate treatment for respiratory failure or arrest. QUESTION 407 A 48-year-old client is being seen in her physician\u2018s office for complaints of indigestion, heartburn, right upper quadrant pain, and nausea of 4 days\u2018 duration, especially after meals. The nurse realizes that these symptoms \u201c",
        "option_a": "Cullen\u2018s sign",
        "option_b": "Rebound tenderness",
        "option_c": "Murphy\u2018s sign",
        "option_d": "Turner\u2018s sign",
        "correct_answer": "C"
      },
      {
        "number": 408,
        "question": "A 29-year-old client delivered her fifth child by the Lamaze method and developed a postpartal hemorrhage in the recovery room. What are the initial symptoms of shock that she may experience?",
        "option_a": "Marked elevation in blood pressure, respirations, and pulse",
        "option_b": "Decreased systolic pressure, cold skin, and anuria",
        "option_c": "Rapid pulse; narrowed pulse pressure; cool, moist skin",
        "option_d": "No urinary output, tachycardia, and restlessness",
        "correct_answer": "C"
      },
      {
        "number": 409,
        "question": "A client is a depressed, 48-year-old salesman. A serious concern for the nurse working with depressed clients is the potential of suicide. The time that suicide is most likely to occur is:",
        "option_a": "In the acutely depressed state",
        "option_b": "When the depression starts to lift",
        "option_c": "In the denial phase",
        "option_d": "During a manic episode",
        "correct_answer": "B"
      },
      {
        "number": 410,
        "question": "The nurse assesses a client on the second postpartum day and finds a dark red discharge on the peripad. The stain appears to be about 5 inches long. Which of the following correctly describes the character and amount of lochia?",
        "option_a": "Lochia alba, light",
        "option_b": "Lochia serosa, heavy",
        "option_c": "Lochia granulosa, heavy",
        "option_d": "Lochia rubra, moderate",
        "correct_answer": "D"
      },
      {
        "number": 411,
        "question": "A client sustained second- and third-degree burns to his face, neck, and upper chest. Which of the following nursing diagnoses would be given the highest priority in the first 8 hours\u2018 postburn?",
        "option_a": "Fluid volume deficit secondary to alteration in skin integrity",
        "option_b": "Alteration in comfort secondary to alteration in skin integrity",
        "option_c": "Alteration in sensation secondary to third-degree burn",
        "option_d": "Alteration in airway integrity secondary to edema of neck and face, which in turn is secondary to alteration in skin integrity",
        "correct_answer": "D"
      }
    ]
  },
  {
    "series_number": 13,
    "title": "NCLEX RN Practice Series 13",
    "question_count": 34,
    "questions": [
      {
        "number": 412,
        "question": "A 9-month-old infant was diagnosed with nonorganic failure to thrive. During her hospitalization, primary nurses were assigned to initiate all infant feedings. The infant\u2018s parents question why they cannot feed their own child. Which of the following responses would be most appropriate by the nurse?",
        "option_a": "By assigning the same nurses to the child, the nurses can begin to learn the infant\u2018s cues and feeding behaviors. \u201c",
        "option_b": "The same nurses will prevent parental fatigue and frustration.",
        "option_c": "The same nurses will prevent infant fatigue and frustration.",
        "option_d": "Primary nurses will ensure privacy.",
        "correct_answer": "A"
      },
      {
        "number": 413,
        "question": "A client was admitted to the hospital after falling in her home. At the time of admission, her blood alcohol level was 0.27 mg%. Her family indicates that she has been drinking a fifth of vodka a day for the past 9 months. She had her last drink 30 minutes prior to admission. Alcohol withdrawal symptoms would most likely be exhibited by her:",
        "option_a": "Two to 4 hours after the last drink",
        "option_b": "Six to 8 hours after the last drink",
        "option_c": "Immediately on admission",
        "option_d": "Twenty-four hours after the last drink",
        "correct_answer": "B"
      },
      {
        "number": 414,
        "question": "A client\u2018s renal calculi are identified as consisting of calcium phosphate. Which of the following diets would be appropriate?",
        "option_a": "High calcium, low phosphorus",
        "option_b": "Low calcium, high phosphorus",
        "option_c": "Two-gram sodium diet",
        "option_d": "Low calcium and phosphorus, acid ash",
        "correct_answer": "D"
      },
      {
        "number": 415,
        "question": "A 47-year-old client comes to the emergency department complaining of moderate flank, abdominal, and testicular pain with nausea of 4 hours\u2018 duration. After physical examination and obtaining the client\u2018s history, \u201c",
        "option_a": "Cystoscopy",
        "option_b": "Kidneys, ureter, bladder, x-ray of abdomen",
        "option_c": "Intravenous pyelogram with excretory urogram",
        "option_d": "Ureterolithotomy",
        "correct_answer": "C"
      },
      {
        "number": 416,
        "question": "A male client was diagnosed 6 months ago with amyotrophic lateral sclerosis (ALS). The progression of the disease has been aggressive. He is unable to maintain his personal hygiene without assistance. Ambulation is most difficult, requiring him to use a wheelchair and rely on assistance for mobility. He recently has become severely dysphasic. Nursing interventions for dysphasia would be aimed toward prevention of:",
        "option_a": "Loss of ability to speak and communicate effectively",
        "option_b": "Aspiration and weight loss",
        "option_c": "Secondary infection resulting from poor oral hygiene",
        "option_d": "Drooling",
        "correct_answer": "B"
      },
      {
        "number": 417,
        "question": "A client had a ruptured abdominal aortic aneurysm that was repaired surgically. Her postoperative recovery progressed without complications, and she is ready for discharge. Client education in preparation for discharge began 7 days ago on her admission to the nursing unit. Evaluation of nursing care related to client education is based on evaluation of expected outcomes. Which statement made by the client would indicate that she is ready for discharge?",
        "option_a": "\u2015I will not drive but ride in the front seat of the car with a seat belt on for my first doctor\u2018s appointment.\u2016 \u201c",
        "option_b": "\u2015When I bathe tomorrow morning, I will be very careful not to get soap on my incision.\u2016",
        "option_c": "\u2015I am allowed to exercise by walking for short periods.\u2016",
        "option_d": "\u2015Teach my husband about the diet. He\u2018ll be doing all the cooking now.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 418,
        "question": "A client has been diagnosed with congestive heart failure. His fluid intake and output are strictly regulated. For lunch, he drank 8 oz of milk, 4 oz of tea, and 6 oz of coffee. His intake would be recorded as:",
        "option_a": "500 mL",
        "option_b": "540 mL",
        "option_c": "600 mL",
        "option_d": "655 mL",
        "correct_answer": "B"
      },
      {
        "number": 419,
        "question": "A client takes warfarin (Coumadin) 15 mg po daily. To evaluate the medication\u2018s effectiveness, the nurse should monitor the:",
        "option_a": "prothrombin time (PT)",
        "option_b": "partial thromboplastin time (PTT)",
        "option_c": "PTT-C",
        "option_d": "Fibrin split products",
        "correct_answer": "A"
      },
      {
        "number": 420,
        "question": "Following a bicycle accident, a 12-year-old client sustained a complete fracture of the left femur. He was placed \u201c",
        "option_a": "These clients have to be reminded and encouraged to take deep breaths. QUESTION 423 A client has been admitted to the nursing unit with the diagnosis of severe anemi A. She is slightly short of breath, has episodes of dizziness, and complains her heart sometimes feels like it will \u2015beat out of her chest.\u2016 The physician has ordered her to receive 2 U of packed red blood cells. The most important nursing action to be taken is: A. Starting an 18-gauge IV infusion",
        "option_b": "Having the consent form on the chart",
        "option_c": "Administering the correct blood product to the correctclient",
        "option_d": "Transfusing the blood in a 2-hour time frame",
        "correct_answer": "C"
      },
      {
        "number": 424,
        "question": "The physician has prescribed metoclopramide (Reglan). When assessing the client, the nurse would expect to find which of the following responses?",
        "option_a": "Increase in gastric secretions",
        "option_b": "Increase in peristalsis",
        "option_c": "Disorientation",
        "option_d": "Drowsiness",
        "correct_answer": "B"
      },
      {
        "number": 425,
        "question": "A client has received preoperative teaching for the vertical partial laryngectomy that he is scheduled to have in \u201c",
        "option_a": "Prolonged use of this medication will result in extrapyramidal side effects.",
        "option_b": "When the medication is effective, he will experience no anxiety.",
        "option_c": "The medication should relieve his symptoms of depression.",
        "option_d": "Blood must be drawn weekly to test for toxicity.",
        "correct_answer": "C"
      },
      {
        "number": 429,
        "question": "A post-lung surgery client is placed on a chest tube drainage system. When explaining to the family how the system works, the nurse states that the water-seal bottle of a three-bottle chest drainage system serves which of the following purposes?",
        "option_a": "Collection bottle for drainage",
        "option_b": "Pressure regulator",
        "option_c": "Preventing accumulation of blood around the heart",
        "option_d": "Preventing air from entering the chest upon inspiration",
        "correct_answer": "D"
      },
      {
        "number": 430,
        "question": "A behavioral modification program is recommended by the multidisciplinary team working with a 15-year-old client with anorexia nervos \u201c",
        "option_a": "A nursing plan of care based on this modality would include: (A) Role playing the client\u2018s eating behaviors (B) Restriction to the unit until she has gained 2 lb (C) Encouraging her to verbalize her feelings concerning food and food intake (D) Provision for a high-calorie, high-protein snack between meals Answer: B Explanation: (A) This answer is incorrect. Role playing is based on learning but is not based on the behavioral modification model. (B) This answer is correct. The behavioral modification model is based on negative and positive reinforcers to change behavior. (C) This answer is incorrect. Verbal catharsis is not an intervention based on behavioral modification. (D) This answer is incorrect. Although an acceptable nursing intervention, it is not based on behavioral modification. QUESTION 431 A client is now pregnant for the second time. Her first child weighed 4536 g at delivery. The client\u2018s glucose tolerance test shows elevated blood sugar levels. Because she only shows signs of diabetes when she is pregnant, she is classified as having: A. Insulin-dependent diabetes",
        "option_b": "Type II diabetes mellitus",
        "option_c": "Type I diabetes mellitus",
        "option_d": "Gestational diabetes mellitus",
        "correct_answer": "D"
      },
      {
        "number": 432,
        "question": "A child becomes neutropenic and is placed on protective isolation. The purpose of protective isolation is to:",
        "option_a": "Protect the child from infection",
        "option_b": "Provide the child with privacy",
        "option_c": "Protect the family from curious visitors",
        "option_d": "Isolate the child from other clients and the nursing staff",
        "correct_answer": "A"
      },
      {
        "number": 433,
        "question": "A client\u2018s transfusion of packed red blood cells has been infusing for 2 hours. She is complaining of a raised, itchy rash and shortness of breath. She is wheezing, anxious, and very restless. The nurse knows these assessment findings are congruent with:",
        "option_a": "Hemolytic transfusion reaction",
        "option_b": "Febrile transfusion reaction",
        "option_c": "Circulatory overload",
        "option_d": "Allergic transfusion reaction",
        "correct_answer": "D"
      },
      {
        "number": 434,
        "question": "A 75-year-old client is hospitalized with pneumonia caused by gram-positive bacteri",
        "option_a": "Which one of the following best describes a gram-positive bacterial pneumonia? A. Klebsiellapneumonia",
        "option_b": "Pneumococcal pneumonia",
        "option_c": "Legionella pneumophilapneumonia",
        "option_d": "Escherichia colipneumonia",
        "correct_answer": "B"
      },
      {
        "number": 435,
        "question": "A 43-year-old client is admitted to the hospital with a diagnosis of peripheral vascular disorder. She arrives in her room via stretcher and requires assistance to move to her bed. The nurse notes that her left leg is cold to touch. She complains of having recently experienced muscle spasms in that leg. To determine if these muscle spasms are indicative of intermittent claudication, the nurse would begin her assessment with the following question:",
        "option_a": "\u2015Would you describe the intensity, duration, and symptoms associated with your pain?\u2016",
        "option_b": "\u2015Do you experience swelling at the end of the day in the affected and unaffected leg?\u2016",
        "option_c": "\u2015Have you had any lesions of the affected leg that have been difficult to heal?\u2016",
        "option_d": "\u2015Do your muscle spasms occur following rest, walking, or exercising?\u2016 \u201c",
        "correct_answer": "D"
      },
      {
        "number": 436,
        "question": "A client has begun to exhibit signs of alcohol withdrawal. Her blood pressure has risen from 120/60 to 190/100, pulse is increased from 88 to 110 bpm, and she is irritable and agitated and has gross motor tremors of the hands. The nurse notifies the doctor. The nurse can anticipate that the doctor will order which of the following?",
        "option_a": "An opiate such as propoxyphene napsylate (Darvocet)",
        "option_b": "A benzodiazepine such as chlordiazepoxide (Librium)",
        "option_c": "A tricyclic antidepressant such as amitriptyline (Elavil)",
        "option_d": "A phenothiazine such as chlorpromazine (Thorazine)",
        "correct_answer": "B"
      },
      {
        "number": 437,
        "question": "A 67-year-old man had a physical examination prior to beginning volunteer work at the hospital. A routine chest x-ray demonstrated left ventricular hypertrophy. His blood pressure was 180/110. He is 45 lb overweight. His diet is high in sodium and fat. He has a strong family history of hypertension. The client is placed on antihypertensive medication; a low-sodium, low-fat diet; and an exercise regimen. On his next visit, compliance would best be determined by:",
        "option_a": "A blood pressure reading of 130/70 with a 5-lb weight loss",
        "option_b": "No side effects from antihypertensive medication and an accurate pill count",
        "option_c": "No evidence of increased left ventricular hypertrophy on chest x-ray",
        "option_d": "Serum blood levels of the antihypertensive medication within therapeutic range",
        "correct_answer": "A"
      },
      {
        "number": 438,
        "question": "A 30-year-old client is exhibiting auditory hallucinations. In working with this client, the nurse would be most effective if the nurse:",
        "option_a": "Encourages the client to discuss the voices",
        "option_b": "Attempts to direct the client\u2018s attention to the here and now",
        "option_c": "Exhibits sincere interest in the delusional voices",
        "option_d": "Gives the medication as necessary for the acting-out behavior",
        "correct_answer": "B"
      },
      {
        "number": 439,
        "question": "During an examination, the nurse notes that an infant has diaper rash on the convex surfaces of his buttocks, inner thighs, and scrotum. Which of the following nursing interventions will be most effective in resolving the condition?",
        "option_a": "Coating the inflamed areas with zinc oxide",
        "option_b": "Using talcum powder on the inflamed areas to promote drying",
        "option_c": "Removing the diaper entirely for extended periods of time",
        "option_d": "Cleaning the inflamed area thoroughly with disposable wet \u2015wipes\u2016 at each diaper change",
        "correct_answer": "C"
      },
      {
        "number": 440,
        "question": "A 23-year-old college student seeks medical attention at the college infirmary for complaints of severe fatigue. Her skin is pale, and she reports exertional dyspne",
        "option_a": "She is admitted to the hospital with possible aplastic anemi A. Laboratory values reflect anemia, and the client is prepared for a bone marrow biopsy. She refuses to sign the biopsy consent and states, \u2015Can\u2018t you just get the doctor to give me a transfusion and let me go. This weekend begins spring break, and I have plans to go to Florida.\u2016 At this time the nurse\u2018s greatest concern is that: A. The client may contract an infection as a result of being exposed to large crowds at spring break",
        "option_b": "The client does not grasp the full impact of her illness",
        "option_c": "The client may require transfusion before leaving for spring break",
        "option_d": "The causative agent be identified and treatment begun",
        "correct_answer": "B"
      },
      {
        "number": 441,
        "question": "A client has a history of alcoholism. He is currently diagnosed with cirrhosis of the liver. The nurse would expect him to be on which type of diet?",
        "option_a": "High protein and high calorie",
        "option_b": "High calorie and high carbohydrate",
        "option_c": "Low-fat 2-g sodium diet",
        "option_d": "High protein and high fat",
        "correct_answer": "B"
      },
      {
        "number": 442,
        "question": "Prior to administering digoxin to a client with congestive heart failure, the nurse needs to assess:",
        "option_a": "Respiratory rate for 1 minute",
        "option_b": "Radial pulse for 1 minute",
        "option_c": "Radial pulse for 2 minutes",
        "option_d": "Apical pulse for 1 minute",
        "correct_answer": "D"
      },
      {
        "number": 443,
        "question": "A client has been diagnosed with thrombophlebitis. She asks, \u2015What is the most likely cause of thrombophlebitis during my pregnancy?\u2016 The nurse explains:",
        "option_a": "Increased levels of the coagulation factors and a decrease in fibrinolysis",
        "option_b": "An inadequate production of platelets",
        "option_c": "An inadequate intake of folic acid during pregnancy",
        "option_d": "An increase in fibrinolysis and a decrease in coagulation factors \u201c",
        "correct_answer": "A"
      },
      {
        "number": 444,
        "question": "A client had a renal transplant 3 months ago. He has suddenly developed graft tenderness, an increased white blood cell count, and malaise. The client is experiencing which type of rejection?",
        "option_a": "Acute",
        "option_b": "Chronic",
        "option_c": "Hyperacute",
        "option_d": "Hyperchronic",
        "correct_answer": "A"
      },
      {
        "number": 445,
        "question": "The nurse teaches a pregnant client that a high-risk symptom occurring at any time during pregnancy that needs to be reported immediately to a healthcare provider is:",
        "option_a": "Constipation",
        "option_b": "Urinary frequency",
        "option_c": "Breast tenderness",
        "option_d": "Abdominal pain",
        "correct_answer": "D"
      },
      {
        "number": 446,
        "question": "An 8-year-old child is admitted to the hospital for surgery. She has had no previous hospitalizations, and both she and her family appear anxious and fearful. It will be most helpful for the nurse to: \u201c",
        "option_a": "Take the child to her room and calmly and matter-offactly begin to get her ready to go to the operating room",
        "option_b": "Take time to orient the child and her family to the hospital and the forthcoming events",
        "option_c": "Explain that as soon as the child goes to the operating room she will have time to answer any questions the family has",
        "option_d": "Tell the child and her family that there is nothing to worry about, that the operation will not take long, and she will soon be as \u2015good as new\u2016",
        "correct_answer": "B"
      },
      {
        "number": 447,
        "question": "Diagnostic assessment findings for an infant with possible coarctation of the aorta would include:",
        "option_a": "A third heart sound",
        "option_b": "A diastolic murmur",
        "option_c": "Pulse pressure difference between the upper extremities",
        "option_d": "Diminished or absent femoral pulses",
        "correct_answer": "D"
      },
      {
        "number": 448,
        "question": "Children often experience visual impairments. Refractive errors affect the child\u2018s visual activity. The main refractive error seen in children is myopi",
        "option_a": "The nurse explains to the child\u2018s parents that myopia may also be described as: A. Cataracts",
        "option_b": "Farsightedness",
        "option_c": "Nearsightedness",
        "option_d": "Lazy eye",
        "correct_answer": "C"
      },
      {
        "number": 449,
        "question": "Which of the following serum laboratory values would the nurse monitor during gentamicin therapy?",
        "option_a": "Creatinine",
        "option_b": "Sodium",
        "option_c": "Calcium",
        "option_d": "Potassium",
        "correct_answer": "A"
      },
      {
        "number": 450,
        "question": "A 33-year-old client was brought into the emergency room unconscious, and it is determined that surgery is needed. Informed consent must be obtained from his next of kin. The sequence in which the next of kin would be asked for the consent would be:",
        "option_a": "Parent, spouse, adult child, sibling",
        "option_b": "Spouse, adult child, parent, sibling",
        "option_c": "Spouse, parent, sibling, adult child",
        "option_d": "Parent, spouse, sibling, adult child",
        "correct_answer": "B"
      },
      {
        "number": 451,
        "question": "Based on your knowledge of genetic inheritance, which of these statements is true for autosomal recessive genetic disorders?",
        "option_a": "Heterozygotes are affected.",
        "option_b": "The disorder is always carried on the X chromosome.",
        "option_c": "Only females are affected.",
        "option_d": "Two affected parents always have affected children.",
        "correct_answer": "D"
      },
      {
        "number": 452,
        "question": "Prior to an amniocentesis, a fetal ultrasound is done in order to:",
        "option_a": "Evaluate fetal lung maturity",
        "option_b": "Evaluate the amount of amniotic fluid",
        "option_c": "Locate the position of the placenta and fetus",
        "option_d": "Ensure that the fetus is mature enough to perform the amniocentesis",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 14,
    "title": "NCLEX RN Practice Series 14",
    "question_count": 34,
    "questions": [
      {
        "number": 453,
        "question": "An expected response to sodium polystyrene sulfonate (Kayexalate) is:",
        "option_a": "Increase in serum magnesium",
        "option_b": "Increase in serum HCO3",
        "option_c": "Decrease in serum potassium",
        "option_d": "Decrease in serum calcium",
        "correct_answer": "C"
      },
      {
        "number": 454,
        "question": "A client who was started on antipsychotic medication 2 weeks ago is preparing for discharge from the hospital. Compliance with the medication regimen is important despite the mild side effects encountered. In order to increase the likelihood of medication compliance, the nurse would:",
        "option_a": "Discuss the disease process and the importance of the medication in prevention of symptoms.",
        "option_b": "Inform the client that additional side effects are to be expected and need not be reported.",
        "option_c": "Discuss the importance of getting blood drawn weekly to determine medication therapeutics.",
        "option_d": "Inform the client to cease taking the medication when all psychotic symptoms have cleared. \u201c",
        "correct_answer": "A"
      },
      {
        "number": 455,
        "question": "A 37-year-old client has been taking antipsychotic medication for the past 10 days. The nurse observes her walking with a shuffling gait and postural rigidity and notes a masklike expression on her face. Which side effect is this client exhibiting?",
        "option_a": "Dystonia",
        "option_b": "Parkinsonism",
        "option_c": "Tardive dyskinesia",
        "option_d": "Akathesia",
        "correct_answer": "B"
      },
      {
        "number": 456,
        "question": "A client is being discharged from the hospital tomorrow following a colon resection with a left colostomy. The nurse knows that the client understands the discharge teaching about care of her colostomy when she says:",
        "option_a": "\u2015I know that I am not supposed to irrigate my colostomy.\u2016",
        "option_b": "\u2015My stool will be soft like paste.\u2016",
        "option_c": "\u2015My stoma should be red and slightly raised.\u2016",
        "option_d": "\u2015The skin around my stoma may become irritated from the enzymes in my stool.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 457,
        "question": "A 25-year-old outpatient presents with a diagnosis of compulsive personality disorder. His coworkers become \u201c",
        "option_a": "Encouraging him to engage in recreational activities",
        "option_b": "Avoiding discussion of his annoying behavior",
        "option_c": "Encouraging the client to set a time schedule and deadlines for himself",
        "option_d": "Contracting with him for the amount of time he will spend on the compulsive behaviors",
        "correct_answer": "D"
      },
      {
        "number": 458,
        "question": "Pin care is a part of the care plan for a client who is in skeletal traction. When assessing the site of pin insertion, which one of the following findings would the nurse know as an indicator of normal wound healing?",
        "option_a": "Exudate",
        "option_b": "Crust",
        "option_c": "Edema",
        "option_d": "Erythema",
        "correct_answer": "B"
      },
      {
        "number": 459,
        "question": "A physician tells the nurse that he wants to orally intubate a client with a No. 8 endotracheal tube. The finding of normal breath sounds on the right side of the chest and diminished, distant breath sounds on the left side of the chest of a newly intubated client is probably due to:",
        "option_a": "A left hemothorax",
        "option_b": "A right hemothorax",
        "option_c": "Intubation of the right mainstem bronchus",
        "option_d": "An inadequate mechanical ventilator",
        "correct_answer": "C"
      },
      {
        "number": 460,
        "question": "A 10-year-old client with a pin in the right femur is immobilized in traction. He is exhibiting behavioral changes including restlessness, difficulty with problem solving, inability to concentrate on activities, and monotony. Which of the following nursing implementations would be most effective in helping him cope with immobility?",
        "option_a": "Providing him with books, challenging puzzles, and games as diversionary activities",
        "option_b": "Allowing him to do as much for himself as he is able, including learning to do pin-site care under supervision",
        "option_c": "Having a volunteer come in to sit with the client and to read him stories",
        "option_d": "Stimulating rest and relaxation by gentle rubbing with lotion and changing the client\u2018s position frequently",
        "correct_answer": "B"
      },
      {
        "number": 461,
        "question": "A hyperactive client is experiencing flight of ideas. The most therapeutic activity for him would be:",
        "option_a": "Doing crafts in occupational therapy",
        "option_b": "Working a 1000-piece puzzle",
        "option_c": "Playing bridge with three other clients",
        "option_d": "Playing basketball in the gym",
        "correct_answer": "D"
      },
      {
        "number": 462,
        "question": "A male client was involved in a motor vehicle accident earlier in the day. The nurse caring for him on evenings notices that on admission to the hospital, he lost a lot of blood and required multiple blood transfusions. The nurse would anticipate which blood product would be ordered when a large blood loss has occurred?",
        "option_a": "Whole blood",
        "option_b": "Platelets",
        "option_c": "Fresh frozen plasma",
        "option_d": "Packed red blood cells \u201c",
        "correct_answer": "A"
      },
      {
        "number": 463,
        "question": "A 9-month-old infant is being examined in the general pediatric clinic for a routine well-child checkup. His immunizations are up to date, and his mother reports that he has had no significant illnesses or injuries. Which of the following signs would lead the nurse to believe that he has had a cerebral injury?",
        "option_a": "Hyperextension of the neck with evidence of pain on flexion",
        "option_b": "Holding the head to one side and pointing the chin toward the other side",
        "option_c": "Holding the head erect and in the midline when in a vertical position",
        "option_d": "Significant head lag when raised to a sitting position",
        "correct_answer": "D"
      },
      {
        "number": 464,
        "question": "The physician prescribes a medical regimen of isoniazid, rifampin, and vitamin B6 for a tuberculosis client. The nurse instructs the client that B6 is given because it:",
        "option_a": "Increases activity of isoniazid",
        "option_b": "Increases activity of rifampin",
        "option_c": "Improves nutritional status",
        "option_d": "Reduces peripheral neuropathy",
        "correct_answer": "D"
      },
      {
        "number": 465,
        "question": "A client is being discharged from the hospital today. The discharge teaching for care of her colostomy included which of the following basic principles for protecting the skin around her stoma:",
        "option_a": "Taping a pouch that is leaking",
        "option_b": "Cutting the skin barrier 112 inches larger than the stoma",
        "option_c": "Changing the pouch only when leakage occurs \u201c",
        "option_d": "Using a skin sealant under pouch adhesives",
        "correct_answer": "D"
      },
      {
        "number": 466,
        "question": "In the coronary care unit, a client has developed multifocal premature ventricular contractions. The nurse should anticipate the administration of:",
        "option_a": "Furosemide",
        "option_b": "Nitroglycerin",
        "option_c": "Lidocaine",
        "option_d": "Digoxin",
        "correct_answer": "C"
      },
      {
        "number": 467,
        "question": "On the first postpartal day, a client tells the nurse that she has been changing her perineal pads every 1/2 hour because they are saturated with bright red vaginal drainage. When palpating the uterus, the nurse assesses that it is somewhat soft, 1 fingerbreadth above the umbilicus, and midline. The nursing action to be taken is to:",
        "option_a": "Gently massage the uterus until firm, express any clots, and note the amount and character of lochia",
        "option_b": "Catheterize the client and reassess the uterus",
        "option_c": "Begin IV fluids and administer oxytocic medication",
        "option_d": "Administer analgesics as ordered to relieve discomfort",
        "correct_answer": "A"
      },
      {
        "number": 468,
        "question": "When providing dietary teaching to an individual who has diabetes mellitus, type II, the nurse discusses the importance of consuming the recommended daily allowance of which of the following electrolytes? \u201c",
        "option_a": "Potassium",
        "option_b": "Magnesium",
        "option_c": "Sodium",
        "option_d": "HCO3",
        "correct_answer": "B"
      },
      {
        "number": 469,
        "question": "A 52-year-old client is scheduled for a small-bowel resection in the morning. In conjunction with other preoperative preparation, the nurse is teaching her diaphragmatic breathing exercises. She will teach the client to:",
        "option_a": "Inhale slowly and deeply through the nose until the lungs are fully expanded, hold the breath a couple of seconds, and then exhale slowly through the mouth. Repeat 2\u20133 more times to complete the series every 1\u20132 hours while awake",
        "option_b": "Purse the lips and take quick, short breaths approximately 18\u201320 times/min",
        "option_c": "Take a large gulp of air into the mouth, hold it for 10\u201315 seconds, and then expel it through the nose. Repeat 4\u20135 times to complete the series",
        "option_d": "Inhale as deeply as possible and then immediately exhale as deeply as possible at a rate of approximately 20\u2013 24 times/min",
        "correct_answer": "A"
      },
      {
        "number": 470,
        "question": "The client tells the nurse, \u2015I have pain in my left shoulder.\u2016 This is considered:",
        "option_a": "Evaluation process",
        "option_b": "Objective information",
        "option_c": "Subjective information",
        "option_d": "Complaining \u201c",
        "correct_answer": "C"
      },
      {
        "number": 471,
        "question": "A 10-month-old infant\u2018s mother says that he takes fresh whole milk eagerly, but that when she offered him baby foods at 6 months of age, he pushed them out of his mouth. Because he has gained weight appropriately, she has quit trying to get him to eat other foods. The nurse\u2018s response is based on the knowledge that:",
        "option_a": "Milk intake should be limited to no more than four 8-oz bottles per day and should be followed by ironenriched cereal or other solid foods or juices",
        "option_b": "Milk is an excellent food and will meet his nutritional needs adequately until he is ready to eat solid foods",
        "option_c": "It is acceptable to continue to give him whole milk and to delay giving solid foods as long as he takes a vitamin supplement daily",
        "option_d": "He should be started on iron-enriched cereal, meat, vegetables, fruits, and juices prior to bottle feeds. Milk intake should be limited to 1 qt/day",
        "correct_answer": "D"
      },
      {
        "number": 472,
        "question": "A 32-year-old mother of two was brought to the hospital by her husband. He reported that his wife could no longer manage the house and children. She does not sleep and talks day and night. She has purchased some very expensive clothes. The nurse noted that the client speaks rapidly and changes the subject irrationally. This is an example of:",
        "option_a": "Flight of ideas",
        "option_b": "Delusions",
        "option_c": "Hallucinations",
        "option_d": "Echolalia",
        "correct_answer": "A"
      },
      {
        "number": 473,
        "question": "During his hospitalization, a 3-year-old child has become unusually aggressive in his play activities. His parents report this change in behavior to the primary nurse. How could the nurse explain the child\u2018s change in behavior?",
        "option_a": "Deep-seated feelings of hostility \u201c",
        "option_b": "A lack of interest in socializing",
        "option_c": "Usual behavior for this child",
        "option_d": "A coping response",
        "correct_answer": "D"
      },
      {
        "number": 474,
        "question": "A 55-year-old woman entered the emergency room by ambulance. Her primary complaint is chest pain. She is receiving O2 via nasal cannula at 2 L/min for dyspne",
        "option_a": "Which of the following findings in the client\u2018s nursing assessment demand immediate nursing action? A. Associated symptoms of indigestion and nausea",
        "option_b": "Restlessness and apprehensiveness",
        "option_c": "Inability to tolerate assessment session with the admitting nurse",
        "option_d": "History of hypertension treated with pharmacological therapy",
        "correct_answer": "B"
      },
      {
        "number": 475,
        "question": "To facilitate maximum air exchange, the nurse should position the client in:",
        "option_a": "High Fowler",
        "option_b": "Orthopneic",
        "option_c": "Prone",
        "option_d": "Flat-supine",
        "correct_answer": "B"
      },
      {
        "number": 476,
        "question": "A 26-year-old client is diagnosed with an astrocytoma, a benign brain tumor. From the nurse\u2018s knowledge of the central nervous system, the nurse knows that benign tumors: \u201c",
        "option_a": "Can be just as dangerous as malignant tumors",
        "option_b": "Grow more rapidly than malignant tumors",
        "option_c": "Do not warrant concern because they do not become malignant tumors",
        "option_d": "Can be removed surgically",
        "correct_answer": "A"
      },
      {
        "number": 477,
        "question": "A 4-year-old child with a history of sickle cell anemia is admitted to the nursing unit with dizziness, shortness of breath, and pallor. Nursing assessment findings reveal tenderness in the abdomen. The child is most likely experiencing a/an:",
        "option_a": "Aplastic crisis",
        "option_b": "Vaso-occlusive crisis",
        "option_c": "Dactylitis crisis",
        "option_d": "Sequestration crisis",
        "correct_answer": "D"
      },
      {
        "number": 478,
        "question": "A client who has gout is most likely to form which type of renal calculi?",
        "option_a": "Struvite stones",
        "option_b": "Staghorn calculi",
        "option_c": "Uric acid stones",
        "option_d": "Calcium stones",
        "correct_answer": "C"
      },
      {
        "number": 479,
        "question": "A school-age child with asthma is ready for discharge from the hospital. His physician has written an order to continue the theophylline given in the hospital as an oral home medication. Immediately prior to discharge, he complains of nausea and becomes irritable. His vital signs were normal except for tachycardi",
        "option_a": "What first nursing actions would be essential in this situation? A. Hold the child\u2018s discharge for 1 hour.",
        "option_b": "Notify the physician immediately.",
        "option_c": "Discharge the child as the physician ordered.",
        "option_d": "Administer an antiemetic as necessary.",
        "correct_answer": "B"
      },
      {
        "number": 480,
        "question": "Nursing care for the parents of a child with a congenital heart defect would include:",
        "option_a": "Encouraging the parents not to tell the child about the seriousness of the congenital heart defect, so the child will function as normally as possible",
        "option_b": "Acknowledging the fear and concern surrounding their child\u2018s health and assisting the parents through the grieving process as they mourn the loss of their fantasized healthy child",
        "option_c": "Identifying anger and resentment as destructive emotions that serve no purpose",
        "option_d": "Expressing to the parents after the corrective surgery has been completed successfully that all their grief feelings will resolve",
        "correct_answer": "B"
      },
      {
        "number": 481,
        "question": "When teaching a class of nursing students, the nurse asks why the embryonic period (weeks 4\u20138) of pregnancy is so critical. \u201c",
        "option_a": "Duplication of genetic information takes place.",
        "option_b": "Organogenesis occurs.",
        "option_c": "Subcutaneous fat builds up steadily.",
        "option_d": "Kidneys begin to secrete urine.",
        "correct_answer": "B"
      },
      {
        "number": 482,
        "question": "Parents of young children often need anticipatory guidance from the nurse. Parents may have little knowledge regarding growth and development. Which of the following toys and activities would the nurse suggest as appropriate for a toddler?",
        "option_a": "Cutting, pasting, string beads, music, dolls",
        "option_b": "Mobiles, rattle, squeeze toys",
        "option_c": "Pull-toys, large ball, dolls, sand and water play, music",
        "option_d": "Simple card games, puzzles, bicycle, television",
        "correct_answer": "C"
      },
      {
        "number": 483,
        "question": "A 5-year-old child was recently diagnosed as having acute lymphoid leukemi",
        "option_a": "She is hospitalized for additional tests and to begin a course of chemotherapy designed to induce a remission. She is scheduled to have a bone marrow aspiration tomorrow. She has had a bone marrow test previously and is apprehensive about having another. Which of the following interventions will be most effective in relieving her anxiety? A. Explain what will take place and what she will see, feel, and hear.",
        "option_b": "Remind her that she has had this procedure before and that it is nothing to be afraid of.",
        "option_c": "Tell her not to worry about it, that it will be over soon and she can join her friends in the playroom.",
        "option_d": "Give her a big hug and tell her that she is a big girl now and that she will do just fine.",
        "correct_answer": "A"
      },
      {
        "number": 484,
        "question": "When caring for a postoperative cholecystectomy client, the nurse assesses patency and documents drainage of the T-tube. The nurse recognizes that the expected amount of drainage during the first 24 hours postoperatively is:",
        "option_a": "50\u2013100 mL",
        "option_b": "200\u2013300 mL",
        "option_c": "300\u2013500 mL",
        "option_d": "1000\u20131200 mL",
        "correct_answer": "C"
      },
      {
        "number": 485,
        "question": "A female client has been hospitalized for several months following major abdominal surgery for a ruptured colon. A colostomy was created, and the large abdominal wound was left open and allowed to heal through granulation. She is receiving gentamicin IV for treatment of wound infection. Knowing this drug is ototoxic, the nurse would implement which of the following measures?",
        "option_a": "Instruct the client to report any signs of tinnitus, dizziness or difficulty hearing.",
        "option_b": "Advise the client to discontinue the drug at the first sign of dizziness.",
        "option_c": "Order audiometric testing in order to determine if hearing loss is caused by an ototoxic drug or other cause.",
        "option_d": "Instruct the client in Valsalva\u2018s maneuver to equalize middle ear pressure and to prevent hearing loss.",
        "correct_answer": "A"
      },
      {
        "number": 486,
        "question": "The physician prescribes phenytoin (Dilantin) for a client with seizure disorders. Phenytoin can only be mixed with which of the following solutions?",
        "option_a": "Ringer\u2018s lactate",
        "option_b": "D5 in water",
        "option_c": "D5 with Ringer\u2018s lactate \u201c",
        "option_d": "Normal saline",
        "correct_answer": "D"
      }
    ]
  },
  {
    "series_number": 15,
    "title": "NCLEX RN Practice Series 15",
    "question_count": 34,
    "questions": [
      {
        "number": 487,
        "question": "A postoperative prostatectomy client is preparing for discharge from the hospital the next morning. The nurse realizes that additional instructions are necessary when he states:",
        "option_a": "\u2015If I drink 10 to 12 glasses of fluids each day, that will help to prevent any clot formation in my urine.\u2016",
        "option_b": "\u2015The isometric exercises will help to strengthen my perineal muscles and help me control my urine.\u2016",
        "option_c": "\u2015If I feel as though I have developed a fever, I will take a rectal temperature, which is the most accurate.\u2016",
        "option_d": "\u2015I do not plan to do any heavy lifting until I visit my doctor again.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 488,
        "question": "The nurse is caring for a client who has diabetes insipidus. The nurse would describe this client\u2018s urine output pattern as:",
        "option_a": "Anuria",
        "option_b": "Oliguria",
        "option_c": "Dysuria",
        "option_d": "Polyuria",
        "correct_answer": "D"
      },
      {
        "number": 489,
        "question": "The most frequent cause of early postpartum hemorrhage is:",
        "option_a": "Hematoma",
        "option_b": "Coagulation disorders \u201c",
        "option_c": "Uterine atony",
        "option_d": "Retained placental fragments",
        "correct_answer": "C"
      },
      {
        "number": 490,
        "question": "A 42-year-old client presents with a diagnosis of paranoid schizophreni",
        "option_a": "She has become increasingly restless and verbally argumentative, and her speech has become pressured. She is exhibiting signs of: A. Depression",
        "option_b": "Agitation",
        "option_c": "Psychotic ideation",
        "option_d": "Anhedonia",
        "correct_answer": "B"
      },
      {
        "number": 491,
        "question": "A client is having a vertical partial laryngectomy, and the nurse is planning his postoperative care. A priority postoperative nursing diagnosis for a client having a vertical partial laryngectomy would be:",
        "option_a": "Activity intolerance",
        "option_b": "Ineffective airway clearance",
        "option_c": "High risk for infection",
        "option_d": "Altered oral mucous membrane",
        "correct_answer": "B"
      },
      {
        "number": 492,
        "question": "A client who is a breast-feeding mother develops mastitis. The clinical signs and symptoms of mastitis include: \u201c",
        "option_a": "Marked engorgement, elevated temperature, chills, and breast pain with an area that is red and hardened",
        "option_b": "Marked engorgement and breast pain",
        "option_c": "Elevated temperature and general malaise",
        "option_d": "Cracked nipple with complaints of soreness",
        "correct_answer": "A"
      },
      {
        "number": 493,
        "question": "A client diagnosed with severe anemia is to receive 2 U of packed red blood cells. Prior to starting the blood transfusion, the nurse must:",
        "option_a": "Take a baseline set of vital signs",
        "option_b": "Hang Ringer\u2018s lactate as the companion fluid",
        "option_c": "Use microdrip tubing for the blood administration",
        "option_d": "Have the registered nurse in charge assume responsibility for verifying the client and blood product information",
        "correct_answer": "A"
      },
      {
        "number": 494,
        "question": "The nurse caring for a client who has pneumonia, which is caused by a gram-positive bacteria, inspects her sputum. Because the client\u2018s pneumonia is caused by a gram-positive bacteria, the nurse experts to find the sputum to be:",
        "option_a": "Bright red with streaks",
        "option_b": "Rust colored",
        "option_c": "Green colored",
        "option_d": "Pink-tinged and frothy",
        "correct_answer": "B"
      },
      {
        "number": 495,
        "question": "A client is experiencing mucosal cell damage secondary to chemotherapy. Because of mucosal ulcers, eating has become increasingly uncomfortable for her. Which of the following interventions would be most effective in getting her to eat?",
        "option_a": "Local anesthetics or mouth washes applied to ulcers 30 minutes prior to meals",
        "option_b": "A bland, moist, soft diet",
        "option_c": "Staying with the client and providing distraction during meals",
        "option_d": "Cleaning the mouth carefully with lemon glycerin swabs and milk of magnesia before meals",
        "correct_answer": "B"
      },
      {
        "number": 496,
        "question": "A client had a hemicolectomy performed 2 days ago. Today, when the nurse assesses the incision, a small part of the abdominal viscera is seen protruding through the incision. This complication of wound healing is known as:",
        "option_a": "Excoriation",
        "option_b": "Dehiscence",
        "option_c": "Decortication",
        "option_d": "Evisceration",
        "correct_answer": "D"
      },
      {
        "number": 497,
        "question": "A client has returned to the unit from the recovery room after having a thyroidectomy. The nurse knows that a major complication after a thyroidectomy is:",
        "option_a": "Respiratory obstruction \u201c",
        "option_b": "Hypercalcemia",
        "option_c": "Fistula formation",
        "option_d": "Myxedema",
        "correct_answer": "A"
      },
      {
        "number": 498,
        "question": "A 48-year-old client is in the surgical intensive care unit after having had three-vessel coronary artery bypass surgery yesterday. She is extubated, awake, alert and talking. She is receiving digitalis for atrial arrhythmias. This morning serum electrolytes were drawn. Which abnormality would require immediate intervention by the nurse after contacting the physician?",
        "option_a": "Serum osmolality is elevated indicating hemoconcentration. The nurse should increase IV fluid rate.",
        "option_b": "Serum sodium is low. The nurse should change IV fluids to normal saline.",
        "option_c": "Blood urea nitrogen is subnormal. The nurse should increase the protein in the client\u2018s diet as soon as possible.",
        "option_d": "Serum potassium is low. The nurse should administer KCl as ordered.",
        "correct_answer": "D"
      },
      {
        "number": 499,
        "question": "A client is going to have a pneumonectomy in the morning. She had a previous negative surgical experience, is talking rapidly, and has an increased pulse and respiratory rate. Nursing interventions for this client should include:",
        "option_a": "Providing opportunities to ask questions and talk about concerns",
        "option_b": "Providing distractors such as reading or watching television",
        "option_c": "Telling her that she should not be so nervous and assuring her that everything will be OK",
        "option_d": "Reminding her that this surgery is not as extensive as her past surgery was",
        "correct_answer": "A"
      },
      {
        "number": 500,
        "question": "Following her surgery, a 5-year-old child will return to the pediatric unit with a long-arm cast. She experienced a supracondylar fracture of the humerus near the elbow. Which nursing action is most essential during the first 24 hours after surgery and cast application?",
        "option_a": "Mobilization of the child",
        "option_b": "Discharge teaching",
        "option_c": "Pain management",
        "option_d": "Assessment of neurovascular status",
        "correct_answer": "D"
      },
      {
        "number": 501,
        "question": "When giving discharge instructions to a 24-year-old client who had a short-arm cast applied for a fractured right ulna, the nurse recognizes the importance of telling him that the drying time for a plaster of Paris cast is approximately:",
        "option_a": "30 minutes",
        "option_b": "1\u20134 hours",
        "option_c": "12\u201324 hours",
        "option_d": "24\u201372 hours",
        "correct_answer": "D"
      },
      {
        "number": 502,
        "question": "A female client has married recently. A month ago she visited her physician with complaints of burning on urination. She was given a prescription for trimethoprim- sulfamethoxazole (Bactrim) DS bid for 10 days. She \u201c",
        "option_a": "\u2015I have not been drinking six to eight glasses of water each day as the nurse had instructed.\u2016",
        "option_b": "\u2015I\u2018m afraid I may have something wrong with my bladder because I have been getting bladder infections frequently since I\u2018ve been married.\u2016",
        "option_c": "\u2015I took the Bactrim for 6 or 7 days. The burning stopped, so I saved the rest of the medication for the next time.\u2016",
        "option_d": "\u2015I recently had the flu, which could be settling in my kidneys now.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 503,
        "question": "Endotracheal tube cuff pressure should never exceed:",
        "option_a": "10 mm Hg",
        "option_b": "20 mm Hg",
        "option_c": "45 mm Hg",
        "option_d": "60 mm Hg",
        "correct_answer": "B"
      },
      {
        "number": 504,
        "question": "Primary nursing diagnoses for the antisocial client are:",
        "option_a": "Alteration in perception and altered self-concept",
        "option_b": "Impaired social interaction, ineffective individual coping, and altered self-concept",
        "option_c": "Altered communication processes and altered recreational patterns",
        "option_d": "Altered body image and altered thought processes",
        "correct_answer": "B"
      },
      {
        "number": 505,
        "question": "A 71-year-old client fell and injured her left leg while cooking in the kitchen. Her husband calls the ambulance, and she is taken to the emergency department at a local hospital. X-ray reports confirm that she has an intertrochanteric fracture of the left femur. Her left leg will require skeletal traction initially and then surgery. The nurse knows that this type of traction will be used:",
        "option_a": "By inserting pins to provide steady pull on the bone",
        "option_b": "To suspend the leg in a sling without pull on the extremity",
        "option_c": "Intermittently to place a pull over the pelvis and lower spine",
        "option_d": "With weights at both ends of the bed to maintain pull on the upper extremity",
        "correct_answer": "A"
      },
      {
        "number": 506,
        "question": "In working with mental health clients who are prescribed medication that must be taken on a routine basis, it is important for education to begin when the drug therapy is initiated. One of the first steps in the teaching process is to:",
        "option_a": "Explain the side effects of the medication",
        "option_b": "Discuss the danger of overmedication",
        "option_c": "Distribute written material to supplement verbal instructions",
        "option_d": "Explore the client\u2018s perception regarding medication therapy",
        "correct_answer": "D"
      },
      {
        "number": 507,
        "question": "A client has been uncomfortable in crowds all her life. After the birth of her child, she has been housebound unless her husband can accompany her to the grocery store and for medical appointments. His schedule will not allow for this, and he has insisted that she must be more independent. Her anxiety has increased to the point of panic. The client has been diagnosed with agoraphobi",
        "option_a": "Which statement is true about this disorder? A. The behavior is not considered disabling.",
        "option_b": "More men suffer from agoraphobia than women.",
        "option_c": "The fears are persistent, and avoidance is used as the coping mechanism.",
        "option_d": "Agoraphobia moves into remission when treated with chlorpromazine.",
        "correct_answer": "C"
      },
      {
        "number": 508,
        "question": "The nurse is planning a reality orientation program for a group of clients with organic brain syndrome at the mental health center. Props that could be used for this program are:",
        "option_a": "Month-old magazines that are provided by volunteers",
        "option_b": "Large maps and posters depicting area of current residence",
        "option_c": "A litter of kittens for the clients to pet",
        "option_d": "A library of biographical books",
        "correct_answer": "B"
      },
      {
        "number": 509,
        "question": "An infant with a congenital heart defect is being discharged with an order for the administration of digoxin elixir every 12 hours. The parents need to be taught when administering digoxin to the infant that:",
        "option_a": "If the infant vomits within 30 minutes of the digoxin administration, repeat the dose",
        "option_b": "They need to mix it with formula so the infant swallows it easily",
        "option_c": "If the infant vomits two or more consecutive doses or becomes listless or anorexic, notify the physician",
        "option_d": "If a dose of digoxin is skipped for more than 6 hours, a new timetable for administration must be developed",
        "correct_answer": "C"
      },
      {
        "number": 510,
        "question": "A 3-year-old child was hospitalized for acute laryngotracheobronchitis. During her hospitalization, the child was placed under an oxygen mist tent. The nurse\u2018s frequent monitoring of the child\u2018s temperature frightened her parents. Which response by the nurse would be most appropriate?",
        "option_a": "Monitoring the temperature prevents undue chilling.",
        "option_b": "Rapid temperature elevations can occur in children.",
        "option_c": "Checking the temperature will prevent febrile seizures.",
        "option_d": "Taking the child\u2018s temperature can prevent airway obstruction.",
        "correct_answer": "A"
      },
      {
        "number": 511,
        "question": "A 72-year-old male client had the Foley catheter that was inserted during the transurethral resection of his prostate removed today. He is concerned about the urinary incontinence he is having since removal of the Foley catheter. The nurse explains that:",
        "option_a": "He should not be concerned about it because it will resolve quickly",
        "option_b": "This is usually temporary",
        "option_c": "The nurse will keep him dry, and he should notify the nurse when this happens",
        "option_d": "This is related to the bladder spasms and will soon stop",
        "correct_answer": "B"
      },
      {
        "number": 512,
        "question": "A 48-year-old client presents with a long history of severedepression unrelieved by medication. He is admitted to the hospital for electroconvulsive therapy. Familymembers are very concerned about this therapy and are requesting information about aftereffects of the treatment. The nurse informs the family that he will:",
        "option_a": "Have transient memory loss, confusion, andheadache",
        "option_b": "Be alert and oriented immediately after the treatment \u201c",
        "option_c": "Have insomnia for the first few days",
        "option_d": "Require no special care after the procedure",
        "correct_answer": "A"
      },
      {
        "number": 513,
        "question": "The nurse who is caring for a client with pneumonia assesses that the client has become increasingly irritable and restless. The nurse realizes that this is a result of:",
        "option_a": "Prolonged bed rest",
        "option_b": "The client\u2018s maintaining a semi-Fowler position",
        "option_c": "Cerebral hypoxia",
        "option_d": "IV fluids of 2.5\u20133 liters in 24 hours",
        "correct_answer": "C"
      },
      {
        "number": 514,
        "question": "A postoperative TURP client returns from the recovery room to the general surgery unit and is in stable condition. One hour later the nurse assesses him and finds him to be confused and disoriented. She recognizes that this is most likely caused by:",
        "option_a": "Hypovolemic shock",
        "option_b": "Hypokalemia",
        "option_c": "Hypernatremia",
        "option_d": "Hyponatremia",
        "correct_answer": "D"
      },
      {
        "number": 515,
        "question": "On an assessment of a client\u2018s mouth, the nurse notices white patches on the buccal mucos",
        "option_a": "The nurse tries to obtain a sample for a culture, but the lesion cannot be rubbed off. The nurse would suspect that this lesion is: A. Xerosteromia",
        "option_b": "Candidiasis",
        "option_c": "Leukoplakia",
        "option_d": "Stomatitis",
        "correct_answer": "C"
      },
      {
        "number": 516,
        "question": "A 28-year-old woman was admitted to the hospital for a thyroidectomy. Postoperatively she is taken to the postanesthesia care unit for several hours. In preparing for the client\u2018s return to her room, which nursing measure best demonstrates the nurse\u2018s thorough understanding of possible postthyroidectomy complications?",
        "option_a": "Dressings are placed at the bedside for dressing changes, which are to be done every 2 hours to best detect postoperative bleeding.",
        "option_b": "Narcotics are readily available and administered when the client returns to her room to prevent excruciating pain.",
        "option_c": "A tracheostomy set, O2, and suction are available at the bedside.",
        "option_d": "The nurse should instruct the client as soon as possible on alternative means of communication.",
        "correct_answer": "C"
      },
      {
        "number": 517,
        "question": "A nurse is taking a maternal history for a client at her first prenatal visit. Her pregnancy test was positive, she has two living children, she had one spontaneous abortion, and one infant died at the age of 3 months. Which of the following best describes the client at the present?",
        "option_a": "Gravida 4, para 2, ab 1 \u201c",
        "option_b": "Gravida 5, para 3, ab 1",
        "option_c": "Gravida 5, para 4, ab 0",
        "option_d": "Gravida 4, para 3, ab 0",
        "correct_answer": "B"
      },
      {
        "number": 518,
        "question": "A common complication of cirrhosis of the liver is prolonged bleeding. The nurse should be prepared to administer?",
        "option_a": "Vitamin C",
        "option_b": "Vitamin K",
        "option_c": "Vitamin E",
        "option_d": "Vitamin A",
        "correct_answer": "B"
      },
      {
        "number": 519,
        "question": "A 40-year-old client is admitted to the coronary care unit with chest pain and shortness of breath. The physician diagnosed an anterior wall myocardial infarction. What tests should the nurse anticipate?",
        "option_a": "Reticulocyte count, creatinine phosphokinase (CPK)",
        "option_b": "Aspartate transaminase, alanine transaminase",
        "option_c": "Sedimentation rate, WBC count",
        "option_d": "Lactic dehydrogenase, CPK",
        "correct_answer": "D"
      },
      {
        "number": 520,
        "question": "A 32-year-old female client is being treated for Guillain- Barr\u00e9 syndrome. She complains of gradually increasing muscle weakness over the past several days. She has noticed an increased difficulty in ambulating and fell yesterday. When conducting a nursing assessment, which finding would indicate a need for immediate \u201c",
        "option_a": "Complaints of a headache",
        "option_b": "Loss of superficial and deep tendon reflexes",
        "option_c": "Complaints of shortness of breath",
        "option_d": "Facial paralysis",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 16,
    "title": "NCLEX RN Practice Series 16",
    "question_count": 34,
    "questions": [
      {
        "number": 521,
        "question": "Following the delivery of a healthy newborn, a client has developed thrombophlebitis and is receiving heparin IV. What are the signs and symptoms of a heparin overdose for which the nurse would need to observe during postpartum care of the client? E. Dysuria F. Epistaxis, hematuria, dysuria G. Vertigo, hematuria, ecchymosis H. Hematuria, ecchymosis, and epistaxis Answer: D Explanation: (A) Dysuria is not a common symptom of heparin overdose. (B) Although epistaxis and hematuria are common symptoms of heparin overdose, dysuria is not. (C) Vertigo is not a common symptom of heparin overdose. (D) Hematuria, ecchymosis, and epistaxis are the most common signs and symptoms of a heparin overdose. Others are thrombocytopenia, elevated liver enzymes, and local injection site complications. QUESTION 522 An obstructing stone in the renal pelvis or upper ureter causes:",
        "option_a": "Radiating pain into the urethra with labia pain experienced in females or testicular pain in males",
        "option_b": "Urinary frequency and dysuria",
        "option_c": "Severe flank and abdominal pain with nausea, vomiting, diaphoresis, and pallor",
        "option_d": "Dull, aching, back pain",
        "correct_answer": "C"
      },
      {
        "number": 523,
        "question": "A 15-year-old client is admitted to the adolescent unit. The nurse recognizes that encouraging a client to speak openly depends on how clearly questions are phrased. Which of the following statements is most desirable in eliciting information from an adolescent client?",
        "option_a": "\u2015Do you get along well with your family?\u2016",
        "option_b": "\u2015Do you communicate with your parents?\u2016",
        "option_c": "\u2015You don\u2018t hate your family, do you?\u2016",
        "option_d": "\u2015What is it like between you and your family?\u2016",
        "correct_answer": "D"
      },
      {
        "number": 524,
        "question": "A client is diagnosed with diabetic ketoacidosis. The nurse should be prepared to administer which of the following IV solutions?",
        "option_a": "D5in normal saline",
        "option_b": "D5W",
        "option_c": "0.9 normal saline",
        "option_d": "D5in lactated Ringer\u2018s",
        "correct_answer": "C"
      },
      {
        "number": 525,
        "question": "As a nurse works with an adolescent with cystic fibrosis, the nurse begins to notice that he appears depressed and talks about suicide and feelings of worthlessness. This is an important factor to consider in planning for his care because:",
        "option_a": "It may be a bid for attention and an indication that more diversionary activity should be planned for him",
        "option_b": "No threat of suicide should be ignored or challenged in any way",
        "option_c": "He needs to be observed carefully for signs that his depression has been relieved",
        "option_d": "He needs to be confronted with his feelings and forced to work through them",
        "correct_answer": "B"
      },
      {
        "number": 526,
        "question": "A 49-year-old obese woman has been admitted to the general surgery unit with choledocholithiasis. As the nurse is admitting her to the unit, she states, \u2015The doctor said I have stones that need to be removed; where are they?\u2016 The nurse knows that the best explanation for this is to tell her that:",
        "option_a": "There are stones present in her gallbladder",
        "option_b": "There are stones present in her kidneys",
        "option_c": "There are stones present in her common bile duct",
        "option_d": "There are no stones, but her gallbladder is irritated and caused her nausea, vomiting, and pain",
        "correct_answer": "C"
      },
      {
        "number": 527,
        "question": "A postoperative TURP client is ordered continuous bladder irrigations. Later in the evening on the first postoperative day, he complains of increasing suprapubic pain. When assessing the client, the nurse notes diminished flow of bloody urine and several large blood clots in the drainage tubing. Which one of the following should be the initial nursing intervention?",
        "option_a": "Call the physician about the problem.",
        "option_b": "Irrigate the Foley catheter.",
        "option_c": "Change the Foley catheter.",
        "option_d": "Administer a prescribed narcotic analgesic.",
        "correct_answer": "B"
      },
      {
        "number": 528,
        "question": "The health team needs to realize that the compulsive concern with cleanliness that a client with severe anxiety exhibits is most likely an attempt to:",
        "option_a": "Reduce his anxiety",
        "option_b": "Avoid going to psychotherapy \u201c",
        "option_c": "Manipulate the health team members",
        "option_d": "Increase his self-image by showing higher standards than the fellow clients",
        "correct_answer": "A"
      },
      {
        "number": 529,
        "question": "A 74-year-old client seen in the emergency room is exhibiting signs of delirium. His family states that he has not slept, eaten, or taken fluids for the past 24 hours. The planning of nursing care for a delirious client is based on which of the following premises?",
        "option_a": "The delirious client is capable of returning to his previous level of functioning.",
        "option_b": "The delirious client is incapable of returning to his previous level of functioning.",
        "option_c": "Delirium entails progressive intellectual and behavioral deterioration.",
        "option_d": "Delirium is an insidious process.",
        "correct_answer": "A"
      },
      {
        "number": 530,
        "question": "A client is experiencing visual problems at school. She has complained of difficulty seeing the blackboard and squinting. She no longer likes to participate in physical activities such as softball. The client has displayed possible classic symptoms of which refractive error?",
        "option_a": "Astigmatism",
        "option_b": "Hyperopia",
        "option_c": "Myopia",
        "option_d": "Amblyopia",
        "correct_answer": "C"
      },
      {
        "number": 531,
        "question": "A 22-year-old client is 16 weeks pregnant. She and her husband are expecting their first baby. The client tells the nurse that her last normal menstrual period was February 16, with 3 days of spotting on February 17, 18, and 19. The nurse calculates her expected date of delivery to be: \u201c",
        "option_a": "November 23rd",
        "option_b": "December 26th",
        "option_c": "September 14th",
        "option_d": "December 9th",
        "correct_answer": "A"
      },
      {
        "number": 532,
        "question": "A female client was employed as a client care technician in a hemodialysis unit. She recently began to experience extreme fatigue, being able to sleep for 16\u201320 hours at a time. She also noted that her urine was tea colored, which she rationalized was a result of the vitamins she began taking to alleviate fatigue. She was diagnosed with hepatitis B. After a brief hospital stay, she is discharged to her parent\u2018s home. Her mother asks the nurse if any precautions are necessary to prevent transmission to the client\u2018s family. The nurse explains necessary precautions, which include:",
        "option_a": "Isolation of the client from the remainder of the family",
        "option_b": "Separate bathroom facilities if possible; if not, then cleansing daily of the facilities with a chloride solution",
        "option_c": "No necessary precautions because she is beyond the contagious phase",
        "option_d": "Laundering clothes separately in cold water with a chloride solution",
        "correct_answer": "B"
      },
      {
        "number": 533,
        "question": "A 30-year-old female client is receiving antineoplastic chemotherapy. Which of the following symptoms should especially concern the nurse when caring for her?",
        "option_a": "Respiratory rate of 16 breaths/min",
        "option_b": "Pulse rate of 80 bpm",
        "option_c": "Complaints of muscle aches",
        "option_d": "A sore throat",
        "correct_answer": "D"
      },
      {
        "number": 534,
        "question": "A female client presents to the obstetric-gynecology clinic for a pregnancy test, the result which turns out to be positive. Her last menstrual period began December 10, 1993. Using N\u00e4gele\u2018s rule, the nurse estimates her date of delivery to be:",
        "option_a": "September 17, 1994",
        "option_b": "September 10, 1994",
        "option_c": "September 3, 1994",
        "option_d": "August 17, 1994",
        "correct_answer": "A"
      },
      {
        "number": 535,
        "question": "A female client has a chest tube placed. It is accidentally pulled out of the intrapleural space when she is ambulating. The first action the nurse should take is to:",
        "option_a": "Instruct the client to cough deeply to re-expand her lung",
        "option_b": "Put on sterile gloves and replace the tube",
        "option_c": "Apply a petrolatum dressing over the site",
        "option_d": "Auscultate the lung to determine if she needs the tube replaced",
        "correct_answer": "C"
      },
      {
        "number": 536,
        "question": "The nurse observes a client crying quietly. She has just experienced a spontaneous abortion at nine weeks\u2018 gestation. An appropriate response by the nurse would be:",
        "option_a": "\u2015It must be God\u2018s will and probably is for the best.\u2016",
        "option_b": "\u2015This must be a difficult time for you. Would you like to talk about it?\u2016",
        "option_c": "\u2015I\u2018m sure your other children will be a comfort for you.\u2016",
        "option_d": "\u2015Don\u2018t worry, you\u2018re still young. If I were you I\u2018d just try again.\u2016 \u201c",
        "correct_answer": "B"
      },
      {
        "number": 537,
        "question": "A client is dilated 8 cm and entering the transition phase of labor. Common behaviors of the laboring woman during transition are:",
        "option_a": "Frustration, vague in communication",
        "option_b": "Seriousness, some difficulty following directions",
        "option_c": "Calmness, follows directions easily",
        "option_d": "Excitement, openness to instructions",
        "correct_answer": "A"
      },
      {
        "number": 538,
        "question": "A 5-year-old has just had a tonsillectomy and adenoidectomy. Which of these nursing measures should be included in the postoperative care?",
        "option_a": "Encourage the child to cough up blood if present.",
        "option_b": "Give warm clear liquids when fully alert.",
        "option_c": "Have child gargle and do toothbrushing to remove old blood.",
        "option_d": "Observe for evidence of bleeding.",
        "correct_answer": "D"
      },
      {
        "number": 539,
        "question": "A primipara is assessed on arrival to the postpartum unit. The nurse finds her uterus to be boggy. The nurse\u2018s first action should be to:",
        "option_a": "Call the physician \u201c",
        "option_b": "Assess her vital signs",
        "option_c": "Give the prescribed oxytocic drug",
        "option_d": "Massage her fundus",
        "correct_answer": "D"
      },
      {
        "number": 540,
        "question": "A 19-year-old primigravida is admitted to the labor and delivery suite of the hospital. Her husband is accompanying her. The couple tells the nurse that this is the first hospital admission for her. The client\u2018s vaginal exam indicates she is 3 cm dilated, 80% effaced, and at _0 station. Based on the vaginal exam, she is in:",
        "option_a": "Stage 2, latent phase",
        "option_b": "Stage 1, active phase",
        "option_c": "Stage 3, transition phase",
        "option_d": "Stage 1, latent phase",
        "correct_answer": "D"
      },
      {
        "number": 541,
        "question": "A 10-year-old boy has been diagnosed with Legg-Calv\u00e9 Perthes disease. Which of the client\u2018s responses would indicate compliance during initial therapy?",
        "option_a": "Drinking large amounts of milk",
        "option_b": "Not bearing weight on affected extremity",
        "option_c": "Walking short distances 3 times/day",
        "option_d": "Putting self on weight reduction diet",
        "correct_answer": "B"
      },
      {
        "number": 542,
        "question": "A 32-year-old male client is a marketing representative. His job requires him to have a tremendous amount of energy during the day. He frequently uses cocaine to sustain his energy level. Lately he has increased his use of cocaine and even experimented with crack cocaine. Realizing he can no longer continue this destructive behavior, he is seeking treatment for cocaine addiction. In planning nursing care for the client\u2018s inpatient stay, which expected outcome is most appropriate?",
        "option_a": "He will attend four consecutive group educational sessions on substance abuse.",
        "option_b": "He will name activities that he would most likely be involved in posttreatment.",
        "option_c": "He will meet with his family in counseling sessions and discuss his feelings.",
        "option_d": "He will be able to deal with his feelings through participation in group therapy sessions.",
        "correct_answer": "D"
      },
      {
        "number": 543,
        "question": "A 12-year-old girl has been diagnosed with insulindependent diabetes mellitus. Which of these principles would best guide her nutritional management?",
        "option_a": "Concentrated sweets are taken during increased activity.",
        "option_b": "Food restriction is imposed to reduce weight.",
        "option_c": "Caloric distribution should be calculated to fit activity patterns.",
        "option_d": "Fat requirements are increased owing to the possibility of ketoacidosis.",
        "correct_answer": "C"
      },
      {
        "number": 544,
        "question": "A female client at 36 weeks\u2018 gestation is experiencing preterm labor. Her physician has prescribed two doses of betamethasone 12 mg IM q24h. The nurse explains that she is receiving this drug to:",
        "option_a": "Treat fetal respiratory distress syndrome",
        "option_b": "Prevent uterine infection \u201c",
        "option_c": "Promote fetal lung maturation",
        "option_d": "Increase uteroplacental circulation",
        "correct_answer": "C"
      },
      {
        "number": 545,
        "question": "A client is pregnant for the fourth time and has had three normal vaginal deliveries. She is in active labor and fully dilated. Suddenly she calls, \u2015Nurse, the baby is coming.\u2016 As the nurse responds to her call, which one of the following observations should the nurse make first?",
        "option_a": "Inspect the perineum.",
        "option_b": "Time the contractions.",
        "option_c": "Prepare a sterile area for delivery.",
        "option_d": "Auscultate for fetal heart rate (FHR).",
        "correct_answer": "A"
      },
      {
        "number": 546,
        "question": "When interviewing parents who are suspected of child abuse, the nurse would use which of the following interview techniques?",
        "option_a": "Be direct, honest, and attentive.",
        "option_b": "Approach them in the emergency room as soon as you suspect abuse to \u2015clear the air\u2016 right away.",
        "option_c": "Ask the parents what they could have done differently to prevent this from happening to the child.",
        "option_d": "After the interview, call child protective services.",
        "correct_answer": "A"
      },
      {
        "number": 547,
        "question": "An 82-year-old former restaurant owner walks to the nursing station and states, \u2015I have to go. The restaurant opens at 11 am.\u2016 Which response by the nurse is the most appropriate?",
        "option_a": "\u2015Go back to your room. You do not own a restaurant.\u2016",
        "option_b": "\u2015You are in the hospital now. Calm down.\u2016",
        "option_c": "\u2015You once owned a restaurant. Tell me about it.\u2016",
        "option_d": "\u2015It is snowing outside. The restaurant is closed.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 548,
        "question": "A female client has been diagnosed with chronic renal failure. She is a candidate for either peritoneal dialysis or hemodialysis and must make a choice between the two. Which information should the nurse give her to help her decide?",
        "option_a": "Hemodialysis involves less time to filter the blood; but the client must consider travel time, distance, and inconvenience.",
        "option_b": "Hemodialysis involves more time to filter the blood than does peritoneal dialysis.",
        "option_c": "Peritoneal dialysis has almost no complications and is less time consuming than hemodialysis. Therefore it is preferred.",
        "option_d": "Peritoneal dialysis requires that a home health nurse prepare and administer the treatments.",
        "correct_answer": "A"
      },
      {
        "number": 549,
        "question": "A 24-year-old graduate student recognizes that he has a phobi",
        "option_a": "He suffers severe anxiety when he is in darkness. It has altered his lifestyle because he is unable to go to a movie theater, concert, and other events that may require absence of light. The client is seeking assistance because he is no longer able to socialize with friends due to his phobi A. The psychologist working with him is using desensitization. He has asked the nursing staff to assist the client in muscle relaxation techniques. What result would indicate client education has been successful? A. He enters a movie theater, sits in his chair, and replaces anxiety with relaxation as the theater darkens.",
        "option_b": "He enters a concert, but as the lights dim, he does not experience anxiety. \u201c",
        "option_c": "He states that he no longer fears dark places.",
        "option_d": "He takes a part-time job as a photographic assistant. His job necessitates his working in a darkroom.",
        "correct_answer": "A"
      },
      {
        "number": 550,
        "question": "A female client is exhibiting signs of respiratory distress. Which of the following signs indicate a possible pneumothorax?",
        "option_a": "Crackles or rales on the affected side",
        "option_b": "Bradypnea and bradycardia",
        "option_c": "Shortness of breath and sharp pain on the affected side",
        "option_d": "Increased breath sounds on the affected side",
        "correct_answer": "C"
      },
      {
        "number": 551,
        "question": "After instructing a female client on circumcision care, the nursery nurse asks her to restate some of the key points covered. Which statement shows that the client will properly care for her son\u2018s circumcision?",
        "option_a": "\u2015I\u2018ll make sure I soak the gauze with warm water first, before I take it off each time.\u2016",
        "option_b": "\u2015I\u2018ll make sure that I report any drainage around where they operated.\u2016",
        "option_c": "\u2015I\u2018ll apply alcohol to the area daily to clean it and prevent any infection.\u2016",
        "option_d": "\u2015I\u2018ll keep a close watch on it for a day or two.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 552,
        "question": "An 11-month-old infant is admitted with a possible diagnosis of pyloric stenosis. Which of the following best describes the characteristic clinical manifestations of pyloric stenosis?",
        "option_a": "Pain, especially when eating",
        "option_b": "Poor appetite and sucking reflex",
        "option_c": "Increased frequency and quantity of stools",
        "option_d": "Palpable olive-shaped mass in the epigastrium just right of the umbilical cord",
        "correct_answer": "D"
      },
      {
        "number": 553,
        "question": "A 15-year-old female adolescent is frequently breaking the rules of the unit. She has left the unit and was found smoking in the bathroom and spending a large amount of time in the male ward. Which statement by the nurse would best explain to the teenager why she must follow the rules of the unit?",
        "option_a": "\u2015It is not easy, but the rules must be followed so that everyone can get a fair chance.\u2016",
        "option_b": "\u2015If you do not follow the rules, you will be transferred to the closed, locked unit.\u2016",
        "option_c": "\u2015You are not being fair to the other clients by getting them involved in your deviant behavior.\u2016",
        "option_d": "\u2015Break the rules, all you want, but don\u2018t get caught again!\u2016",
        "correct_answer": "A"
      },
      {
        "number": 554,
        "question": "A male client is admitted to the medical-surgical unit from the emergency room with a diagnosis of acute pancreatitis. The nurse performs the admission nursing assessment. He is NPO with IV fluids infusing at 100 mL/hour. He is experiencing excruciating abdominal pain. Based on an analysis of these data, which nursing diagnosis would receive the highest priority?",
        "option_a": "Pain related to stimulation of nerve endings associated with obstruction of the pancreatic tract",
        "option_b": "Fluid volume deficit related to vomiting and nasogastric tube drainage",
        "option_c": "Knowledge deficit related to treatment regimen",
        "option_d": "Altered nutrition: less than body requirements, related to inadequate intake associated with current anorexia, nausea, vomiting, and digestive enzyme loss",
        "correct_answer": "A"
      },
      {
        "number": 555,
        "question": "A 20-year-old client presents to the obstetrics-gynecology clinic for the first time. She tells the nurse that she is pregnant and wants to start prenatal care. After collecting some initial assessment data, the nurse measures her fundal height to be at the level of the umbilicus. The nurse estimates the fetal gestational age to be approximately:",
        "option_a": "10 weeks",
        "option_b": "16 weeks",
        "option_c": "20 weeks",
        "option_d": "30 weeks",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 17,
    "title": "NCLEX RN Practice Series 17",
    "question_count": 34,
    "questions": [
      {
        "number": 556,
        "question": "A male client has been an insulin-dependent diabetic for approximately 30 years. He frequently indulges in highsugar foods and forgets to take his insulin. He has not experienced acute diabetic emergencies over the years but is now beginning to demonstrate symptoms of diabetic peripheral neuropathy. This distresses him because dancing is one of his favorite pastimes. He decides to question his wife\u2018s home health nurse about diabetic peripheral neuropathy. The nurse points out his noncompliance to his diabetic diet and insulin regimen. The client answers the nurse, \u2015It has been my experience that the diabetic diet is very difficult to follow. As far as the insulin, isn\u2018t a fellow allowed to forget now and then?\u2016 The client\u2018s actions and response best demonstrate:",
        "option_a": "Depression",
        "option_b": "Anger",
        "option_c": "Denial",
        "option_d": "Bargaining",
        "correct_answer": "C"
      },
      {
        "number": 557,
        "question": "A 10-year-old has been diagnosed with acute poststreptococcal glomerulonephritis. The clinical findings were proteinuria, moderately elevated blood pressure, and periorbital edem",
        "option_a": "Which dietary plan is most appropriate for this client? \u201c",
        "option_b": "Low-sodium diet",
        "option_c": "Increased fluid intake",
        "option_d": "High-cholesterol diet",
        "correct_answer": "B"
      },
      {
        "number": 558,
        "question": "A 50-year-old male client is to receive chemotherapy. The physician\u2018s orders include antiemetics. When planning his care, the nurse should take into consideration that antiemetics are best administered in the following way:",
        "option_a": "Give antiemetics when nausea is experienced and continue on a regular schedule for 12\u201324 hours.",
        "option_b": "Give antiemetics prior to the client receiving chemotherapy and continue on a regular basis for at least 24\u201348 hours after chemotherapy.",
        "option_c": "Give antiemetics one at a time because combinations of antiemetics cause overwhelming side effects.",
        "option_d": "Give antiemetics intermittently during the entire course of chemotherapy.",
        "correct_answer": "B"
      },
      {
        "number": 559,
        "question": "The pediatrician has diagnosed tinea capitis in an 8- year-old girl and has placed her on oral griseofulvin. The nurse should emphasize which of these instructions to the mother and/or child?",
        "option_a": "Administer oral griseofulvin on an empty stomach for best results.",
        "option_b": "Discontinue drug therapy if food tastes funny.",
        "option_c": "May discontinue medication when the child experiences symptomatic relief.",
        "option_d": "Observe for headaches, dizziness, and anorexi A.",
        "correct_answer": "D"
      },
      {
        "number": 560,
        "question": "A female client at 10 weeks\u2018 gestation complains to her physician of slight vaginal bleeding and mild cramps. On examination, her physician determines that her cervix is closed. The client is exhibiting signs of:",
        "option_a": "An inevitable abortion",
        "option_b": "A threatened abortion",
        "option_c": "An incomplete abortion",
        "option_d": "A missed abortion",
        "correct_answer": "B"
      },
      {
        "number": 561,
        "question": "A male infant is to be discharged home this morning. Which instruction related to his cord care should be included in his mother\u2018s discharge teaching plan?",
        "option_a": "Keep the umbilical area moist with Vaseline until the stump falls off.",
        "option_b": "Keep the umbilical area covered at all times with the diaper.",
        "option_c": "Clean the umbilical cord with alcohol at each diaper change.",
        "option_d": "Clean the umbilical cord daily with soap and water during the bath.",
        "correct_answer": "C"
      },
      {
        "number": 562,
        "question": "A male client has heart failure. He has been instructed to gradually increase his activities. Which signs and symptoms of worsening heart failure should the nurse tell him to watch for that would indicate a need for him to lower his activity level?",
        "option_a": "Pain in his legs when he walks \u201c",
        "option_b": "Thirst, weight loss, and polyuria",
        "option_c": "Drowsiness and lethargy after his activities",
        "option_d": "Weight gain, edema in his lower extremities, and shortness of breath",
        "correct_answer": "D"
      },
      {
        "number": 563,
        "question": "The physician has ordered that ampicillin 250 mg IV be given over 30 minutes. The medication is diluted as recommended in 10 mL in the volume control chamber of a set that has a tubing of 12 mL. Which nursing measure is most accurate considering these facts?",
        "option_a": "Infuse volume at 44 mL/hr.",
        "option_b": "Infuse volume at 22 mL/hr.",
        "option_c": "Infuse volume at 10 mL/hr.",
        "option_d": "Infuse volume at 30 mL/hr.",
        "correct_answer": "A"
      },
      {
        "number": 564,
        "question": "A 26-year-old client has no children. She has had an abdominal hysterectomy. In the first 24 hours postoperatively, the nurse would be concerned if the client:",
        "option_a": "Cries easily and says she is having abdominal pain",
        "option_b": "Develops a temperature of 102_F",
        "option_c": "Has no bowel sounds",
        "option_d": "Has a urine output of 200 mL for 4 hours",
        "correct_answer": "B"
      },
      {
        "number": 565,
        "question": "A male client has a history of diverticulosis. He has questions about the foods that he should eat. His nurse gives him the following information:",
        "option_a": "He should be on a high-fiber diet.",
        "option_b": "He should eat a low-residue diet.",
        "option_c": "He should drink minimal amounts of fluids.",
        "option_d": "He does not need to make any modifications.",
        "correct_answer": "A"
      },
      {
        "number": 566,
        "question": "A male client is admitted to the psychiatric unit after experiencing severe depression. He states that he intends to kill himself, but he asks the nurse not to repeat his intentions to other staff members. Which response demonstrates understanding and appropriate action on the part of the nurse?",
        "option_a": "\u2015I understand you\u2018re depressed, but killing yourself is not a reasonable option.\u2016",
        "option_b": "\u2015We need to discuss this further, but right now let\u2018s complete these forms.\u2016",
        "option_c": "\u2015Don\u2018t do that, you have so much to live for. You have a wonderful wife and children. The client in the next room has no one.\u2016",
        "option_d": "\u2015This is very serious. I do not want any harm to come to you. I will have to report this to the rest of the staff.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 567,
        "question": "A term neonate has experienced no distress at birth and has an Apgar score of 9. Her mother has asked to breastfeed her following delivery. Immediately after birth, the neonate was most susceptible to heat loss. The most appropriate intervention to conserve heat loss and promote bonding is to:",
        "option_a": "Place her under the radiant warmer",
        "option_b": "Dry her with blankets",
        "option_c": "Place her to her mother\u2018s breast",
        "option_d": "Place her on a heated pad",
        "correct_answer": "C"
      },
      {
        "number": 568,
        "question": "A 24-year-old male client is admitted with a diagnosis of sickle cell anemi",
        "option_a": "The nurse discusses his disease with him and emphasizes the following information: A. He should monitor his sputum, stools, and urine for signs of bleeding.",
        "option_b": "His daily diet should include a large amount of fluid.",
        "option_c": "He should not be concerned about having to fly on a commuter airplane on a weekly basis.",
        "option_d": "He should not worry about having children because this disease is passed on only by female carriers.",
        "correct_answer": "B"
      },
      {
        "number": 569,
        "question": "An alcoholic client who is completing the inpatient segment of a substance abuse program was placed on disulfiram (Antabuse) drug therapy. What should the nurse include in the discharge instructions?",
        "option_a": "If disulfiram is taken and alcohol ingested, the client experiences nausea, vomiting and elevated blood pressure.",
        "option_b": "Disulfiram is most effective when prescribed as late as possible in a recovery program.",
        "option_c": "Disulfiram works on the desensitization principle.",
        "option_d": "The effects of disulfiram can be triggered by alcohol 5 days to 2 weeks after the drug is discontinued.",
        "correct_answer": "D"
      },
      {
        "number": 570,
        "question": "As soon as a child has been diagnosed as \u2015hearing impaired,\u2016 special education should begin. Which of the \u201c",
        "option_a": "Auditory training",
        "option_b": "Speech",
        "option_c": "Lip reading",
        "option_d": "Signing",
        "correct_answer": "B"
      },
      {
        "number": 571,
        "question": "A female client has just died. Her family is requesting that all nursing staff leave the room. The family\u2018s religious leader has arrived and is ready to conduct a ceremony for the deceased in the room, requesting that only family members be present. The nurse assigned to the client should perform the appropriate nursing action, which might include:",
        "option_a": "Inform the family that it is the hospital\u2018s policy not to conduct religious ceremonies in client rooms.",
        "option_b": "Refuse to leave the room because the client\u2018s body is entrusted in the nurse\u2018s care until it can be brought to the morgue.",
        "option_c": "Tell the family that they may conduct their ceremony in the client\u2018s room; however, the nurse must attend.",
        "option_d": "Respect the client\u2018s family\u2018s wishes.",
        "correct_answer": "D"
      },
      {
        "number": 572,
        "question": "A mother brings a 6-month-old infant and a 4-year-old child to the nursing clinic for routine examination and screening. Which of these plans by the nurse would be most successful?",
        "option_a": "Examine the 4 year old first.",
        "option_b": "Provide time for play and becoming acquainted.",
        "option_c": "Have the mother leave the room with one child, and examine the other child privately.",
        "option_d": "Examine painful areas first to get them \u2015over with.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 573,
        "question": "A 7-year-old girl has been diagnosed with juvenile arthritis and has been placed on daily aspirin. Which statement made by the parent indicates a need for further teaching?",
        "option_a": "\u2015My daughter takes her aspirin with her meals.\u2016",
        "option_b": "\u2015Her gums have been bleeding frequently. Maybe she is brushing too hard.\u2016",
        "option_c": "\u2015I give her aspirin on a regular schedule every day.\u2016",
        "option_d": "\u2015One sign of aspirin toxicity can be ringing in the ears.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 574,
        "question": "A normal 3-year-old child is suspected of having meningitis. The doctor has ordered a lumbar puncture. In light of this procedure and developmental characteristics of this age group, which nursing measure is most appropriate?",
        "option_a": "Emphasize those aspects of the procedure that require cooperation.",
        "option_b": "Tell the child not to cry or yell.",
        "option_c": "Tell the child that he will get a \u2015stick\u2016 in his back.",
        "option_d": "Use medical terminology when explaining the procedure to the client.",
        "correct_answer": "A"
      },
      {
        "number": 575,
        "question": "A 6-year-old girl has been diagnosed with a urinary tract infection secondary to vesicoureteral reflux. Which statement by her mother indicates a need for further teaching?",
        "option_a": "\u2015I have taught her to wipe from front to back after urinating.\u2016",
        "option_b": "\u2015I make sure she drinks plenty of fluids every day.\u2016",
        "option_c": "\u2015She enjoys wearing nylon panties, but I make her change them everyday.\u2016",
        "option_d": "\u2015She tries to empty her bladder completely after she urinates, like I told her.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 576,
        "question": "A female client is admitted to the emergency department complaining of severe right-sided abdominal pain and vaginal spotting. She states that her last menstrual period was about 2 months ago. A positive pregnancy test result and ultrasonography confirm an ectopic pregnancy. The nurse could best explain to the client that her condition is caused by:",
        "option_a": "Abnormal development of the embryo",
        "option_b": "A distended or ruptured fallopian tube",
        "option_c": "A congenital abnormality of the tube",
        "option_d": "A malfunctioning of the placenta",
        "correct_answer": "B"
      },
      {
        "number": 577,
        "question": "The FHR pattern in a laboring client begins to show early decelerations. The nurse would best respond by:",
        "option_a": "Notifying the physician",
        "option_b": "Changing the client to the left lateral position",
        "option_c": "Continuing to monitor the FHR closely",
        "option_d": "Administering O2 at 8 L/min via face mask",
        "correct_answer": "C"
      },
      {
        "number": 578,
        "question": "A female client is anticipating a visit with her parents over the Thanksgiving holidays. She has recently begun experiencing periods of extreme shortness of breath, which her physician has labeled as panic attacks. Which of the following statements by the nurse would enhance therapeutic communication? \u201c",
        "option_a": "\u2015Why do you feel this way?\u2016",
        "option_b": "\u2015Tell me about your dislike for your parents.\u2016",
        "option_c": "\u2015Don\u2018t worry, everything will be all right on your visit with your parents.\u2016",
        "option_d": "\u2015Perhaps you and I can discover what produces your anxiety.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 579,
        "question": "A 28-year-old client comes to the clinic for her first prenatal examination. In relating her obstetrical history, she tells the nurse that she has been pregnant twice before. She had a \u2015miscarriage\u2016 with the first pregnancy after 6 weeks. With the second pregnancy, she delivered twin girls at 31 weeks\u2018 gestation. One of the twins was stillborn and the other twin died at 4 days of age. Using a five-digit system, the nurse records her as being:",
        "option_a": "2-0-2-1-0",
        "option_b": "2-2-2-1-2",
        "option_c": "3-0-1-1-0",
        "option_d": "2-1-1-0-0",
        "correct_answer": "C"
      },
      {
        "number": 580,
        "question": "A murmur has been discovered during the routine physical examination of a 1-year-old child. The parent is extremely concerned about this diagnosis. Which of the following explanations by the nurse indicates understanding of this dysfunction?",
        "option_a": "The blood shifts from the right to the left atrium. \u201c",
        "option_b": "Surgical closure by suture or patch is recommended before school age.",
        "option_c": "Most atrial septal defects close spontaneously.",
        "option_d": "The child can be treated medically with antibiotics to prevent bacterial endocarditis.",
        "correct_answer": "B"
      },
      {
        "number": 581,
        "question": "Seven days ago, a 45-year-old female client had an ileostomy. She is self-sufficient and well otherwise. Which of the following long-term objectives would be unrealistic?",
        "option_a": "She should be able to control evacuation of her bowels.",
        "option_b": "She should be able to return to a regular diet.",
        "option_c": "She should be able to resume sexual activity.",
        "option_d": "She should be able to manage her own care.",
        "correct_answer": "A"
      },
      {
        "number": 582,
        "question": "A female client is concerned that she is in a \u2015high-risk\u2016 group for the development of acquired immunodeficiency syndrome (AIDS). She wants to know about the advisability of donating blood. Which of the following responses is correct?",
        "option_a": "\u2015Individuals who donate blood are at risk of getting the AIDS virus. You should not donate.\u2016",
        "option_b": "\u2015It\u2018s OK for you to donate because the blood bank has a test that is 100% effective.\u2016",
        "option_c": "\u2015You should not donate since it takes time to develop antibodies to the AIDS virus. If you donate blood before you develop the antibody, you could pass it on in the blood.\u2016",
        "option_d": "\u2015It is not a good idea for you to donate. If you have AIDS, the information is made public and could destroy your personal life.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 583,
        "question": "A 40-year-old client has lived for 8 years with an abusive spouse. She married her husband in her senior year of high school after becoming pregnant. Shortly after the baby was born, he began to physically abuse her. She has attempted to leave him several times, but she has always returned. She is unable to support herself financially, and her husband threatens to kill her if she leaves him. This time, her husband has beaten her so badly she cannot stop the bleeding from the gash above her eye. She admits her husband caused her injury. In assessing a person after experiencing spousal abuse, which need has the highest priority?",
        "option_a": "Assess the level of anxiety, coping responses, and support systems.",
        "option_b": "Assess the history of physical abuse.",
        "option_c": "Assess suicide potential.",
        "option_d": "Assess drug and alcohol use.",
        "correct_answer": "C"
      },
      {
        "number": 584,
        "question": "In an interview for suspected child abuse, the child\u2018s mother openly discusses her feelings. She feels her husband is too aggressive in disciplining their child. The child\u2018s father states, \u2015Being a school custodian, I see kids every day that are bad because they did not get enough discipline at home. That will not happen to our child.\u2016 Based on this remark, the nurse would make the following nursing diagnosis:",
        "option_a": "Fear related to retaliation by the father",
        "option_b": "Actual injury related to poor impulse control by the father",
        "option_c": "Ineffective coping",
        "option_d": "Altered family process related to physical abuse",
        "correct_answer": "D"
      },
      {
        "number": 585,
        "question": "A male client is being treated in the burn unit for thirddegree burns on his head, neck, and upper chest received \u201c",
        "option_a": "His weight increases from 165 to 175 lb.",
        "option_b": "His urine output is equal to his total fluid intake.",
        "option_c": "His urine output has been>35 mL/hr for the past 12 hours.",
        "option_d": "His blood pressure is 94/62.",
        "correct_answer": "C"
      },
      {
        "number": 586,
        "question": "A male client is undergoing cardiac tests. He has been instructed to wear a Holter monitor. The nurse knows she has included the appropriate information in her teaching when the client tells her:",
        "option_a": "\u2015He should remove the electrodes for bathing.\u2016",
        "option_b": "\u2015Damage to his heart muscle will be recorded by the monitor.\u2016",
        "option_c": "\u2015He is to keep a record of everything he does during the day.\u2016",
        "option_d": "\u2015He is to refrain from activities that cause chest pain.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 587,
        "question": "A 3-year-old child has had symptoms of influenza including fever, productive cough, nausea, vomiting, and sore throat for the past several days. In caring for a young child with symptoms of influenza, the mother must be cautioned about:",
        "option_a": "Giving aspirin and bismuth subsalicylate (Pepto-Bismol) to treat the symptoms",
        "option_b": "Giving clear liquids too soon",
        "option_c": "Allowing the child to come in contact with other children for 3 days",
        "option_d": "The possibility of pneumonia as a complication",
        "correct_answer": "A"
      },
      {
        "number": 588,
        "question": "A male client has burns over 90% of his body after an automobile accident resulting in a fire. He was trapped inside the auto and pulled out by a bystander. After several months in the hospital and over 20 surgeries, discharge planning has begun. Throughout his hospitalization the nursing staff has been aware of psychological changes the client faces after burns over a large portion of his body resulting in disfigurement. The nursing staff can best foster the client\u2018s self-esteem by:",
        "option_a": "Adhering to a strict schedule of diet, exercise, and wound care",
        "option_b": "Allowing him to go to physical therapy for whirlpool treatment when other clients were not in physical therapy",
        "option_c": "Following a standardized plan of care for burn clients formulated by a world-renowned burn center",
        "option_d": "Allowing him to plan, assist in, and perform his own care whenever possible",
        "correct_answer": "D"
      },
      {
        "number": 589,
        "question": "A female client decides on hemodialysis. She has an internal vascular access device placed. To ensure patency of the device, the nurse must:",
        "option_a": "Assess the site for leakage of blood or fluids",
        "option_b": "Auscultate the site for a bruit",
        "option_c": "Assess the site for bruising or hematoma",
        "option_d": "Inspect the site for color, warmth, and sensation",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 18,
    "title": "NCLEX RN Practice Series 18",
    "question_count": 33,
    "questions": [
      {
        "number": 590,
        "question": "A female client at 30 weeks\u2018 gestation is brought into the emergency department after falling down a flight of stairs. On examination, the physician notes a rigid, boardlike abdomen; FHR in the 160s; and stable vital signs. Considering possible abdominal trauma, which obstetric emergency must be anticipated?",
        "option_a": "Abruptio placentae",
        "option_b": "Ectopic pregnancy",
        "option_c": "Massive uterine rupture \u201c",
        "option_d": "Placenta previa",
        "correct_answer": "A"
      },
      {
        "number": 591,
        "question": "A client has just received an epidural block. She is laboring on her right side. The nurse notes that her blood pressure has dropped from 132/68 to 78/42 mm Hg. The nurse\u2018s first action would be to:",
        "option_a": "Call the physician immediately and give dopamine IM",
        "option_b": "Turn her on her left side and recheck her blood pressure in 5 minutes",
        "option_c": "Administer oxytocin (Pitocin) immediately and increase the rate of IV fluids",
        "option_d": "Increase the rate of IV fluids and start O2 by mask",
        "correct_answer": "D"
      },
      {
        "number": 592,
        "question": "A female client at 36 weeks\u2018 gestation has been treated successfully for premature labor for 4 weeks. She has begun having uterine contractions today and has been admitted to the labor and delivery suite. Her amniocentesis results reveal a lecithin/sphingomyelin (L/S) ratio of 2 and positive phosphatidylglycerol (PG). These lab values indicate:",
        "option_a": "Placental maturity",
        "option_b": "Suspected chronic asphyxia",
        "option_c": "Cord compression",
        "option_d": "Fetal lung maturity",
        "correct_answer": "D"
      },
      {
        "number": 593,
        "question": "The postpartum nurse should include which of the following instructions to breast-feeding mothers?",
        "option_a": "Limit feeding times for several days to avoid nipple soreness.",
        "option_b": "Wash the nipples with soap and water before and after each feeding.",
        "option_c": "Daily caloric intake should be increased by 500 cal.",
        "option_d": "Breast milk is totally digestible by the baby because it contains lactose.",
        "correct_answer": "C"
      },
      {
        "number": 594,
        "question": "A primigravida with a blood type A negative is at 28 weeks\u2018 gestation. Today her physician has ordered a RhoGAM injection. Which statement by the client demonstrates that more teaching is needed related to this therapy?",
        "option_a": "\u2015I\u2018m getting this shot so that my baby won\u2018t develop antibodies against my blood, right?\u2016",
        "option_b": "\u2015I understand that if my baby is Rh positive I\u2018ll be getting another one of these injections.\u2016",
        "option_c": "\u2015This shot should help to protect me in future pregnancies if this baby is Rh positive, like my husband.\u2016",
        "option_d": "\u2015This shot will prevent me from becoming sensitized to Rh-positive blood.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 595,
        "question": "A client has been instructed in how to take her nitroglycerin tablets. The nurse giving her instructions knows the client understands the information when she tells her:",
        "option_a": "\u2015I should contact my physician if I have headaches after I take this medicine.\u2016",
        "option_b": "\u2015I should keep the tablets in the refrigerator.\u2016",
        "option_c": "\u2015I should call the doctor if three doses of the medicine do not relieve my pain.\u2016",
        "option_d": "\u2015I should take these with water but not with milk.\u2016 \u201c",
        "correct_answer": "C"
      },
      {
        "number": 596,
        "question": "At her monthly prenatal visit, a client reports experiencing heartburn. Which nursing measure should be included in her plan of care to help alleviate it?",
        "option_a": "Restrict fluid intake.",
        "option_b": "Use Alka-Seltzer as necessary.",
        "option_c": "Eat small, frequent bland meals.",
        "option_d": "Lie down after eating.",
        "correct_answer": "C"
      },
      {
        "number": 597,
        "question": "A 14-year-old teenager is demonstrating behavior indicative of an obsessive-compulsive disorder. She is obsessed with her appearance. She will not leave her room until her hair, clothes, and makeup are perfect. She always dresses immaculately. Recently, she expressed disgust over her appearance after she gained 5 lb. After observing a marked weight loss over a 2-week period, her mother suspects that she is experiencing bulimi",
        "option_a": "She eats everything on her plate, then runs to the bathroom. In interviewing the teenager, she discusses in great detail all of the events leading to her bulimia, but not her feelings. What defense mechanism is she using? A. Dissociation",
        "option_b": "Intellectualization",
        "option_c": "Rationalization",
        "option_d": "Displacement",
        "correct_answer": "B"
      },
      {
        "number": 598,
        "question": "As a nurse in the emergency room, you receive an outside call from an elderly woman who states she has just been raped. She states, \u2015I know I must come to the hospital, but what do I do next?\u2016 You advise her to call the police, then come to the hospital emergency room. What action by the nurse would indicate an understanding of the examination process once the victim enters the emergency room?",
        "option_a": "Inform the victim not to wash, change clothes, douche, brush teeth, or eat or drink anything.",
        "option_b": "Inform the victim to bring insurance information with her to the hospital so she can be properly cared for.",
        "option_c": "Phone a rape counselor to begin working with the victim as soon as she enters the hospital.",
        "option_d": "Do not leave the victim alone to collect her thoughts.",
        "correct_answer": "A"
      },
      {
        "number": 599,
        "question": "A 15-year-old child is admitted to the pediatric unit with a diagnosis of thalassemi",
        "option_a": "Which of the following would be included in educating the mother and child as part of discharge planning? A. Give oral iron medication every day.",
        "option_b": "Have the child\u2018s blood pressure monitored every week.",
        "option_c": "Know the signs and symptoms of iron overload.",
        "option_d": "Keep exercise at a minimum to reduce stress.",
        "correct_answer": "C"
      },
      {
        "number": 600,
        "question": "A female client was recently diagnosed with gastric cancer. She entered the hospital and had a total gastrectomy with esophagojejunostomy. Her postoperative recovery was uneventful. On conducting discharge teaching, the nurse discusses changes in bodily function and lifestyle changes with the client. In order to prevent pernicious anemia, the nurse stresses that the client must:",
        "option_a": "Receive monthly blood transfusions",
        "option_b": "Increase the amount of iron in her diet",
        "option_c": "Eat small quantities several times daily until she is able to tolerate food in moderate portions",
        "option_d": "Understand the need for Vitamin B12 replacement therapy \u201c",
        "correct_answer": "D"
      },
      {
        "number": 601,
        "question": "An 8-year-old boy has been diagnosed with hemophili",
        "option_a": "Which of the following diagnostic blood studies is characteristically abnormal in this disorder? A. Partial thromboplastin time",
        "option_b": "Platelet count",
        "option_c": "Complete blood count",
        "option_d": "Bleeding time",
        "correct_answer": "A"
      },
      {
        "number": 602,
        "question": "A 44-year-old female client is receiving external radiation to her scapula for metastasis of breast cancer. Teaching related to skin care for the client would include which of the following?",
        "option_a": "Teach her to completely clean the skin to remove all ointments and markings after each treatment.",
        "option_b": "Teach her to cover broken skin in the treated area with a medicated ointment.",
        "option_c": "Encourage her to wear a tight-fitting vest to support her scapul A.",
        "option_d": "Encourage her to avoid direct sunlight on the area being treated.",
        "correct_answer": "D"
      },
      {
        "number": 603,
        "question": "A client has renal failure. Today\u2018s lab values indicate he has an elevated serum potassium. What additional priority information does the nurse need to obtain? \u201c",
        "option_a": "Evaluation of his level of consciousness",
        "option_b": "Evaluation of an electrocardiogram",
        "option_c": "Measurement of his urine output for the past 8 hours",
        "option_d": "Serum potassium lab values for the last several days",
        "correct_answer": "B"
      },
      {
        "number": 604,
        "question": "At 12 hours postvaginal delivery, a female client is without complications. Which of the following assessment findings would warrant further nursing interventions?",
        "option_a": "Apical pulse of 52 bpm",
        "option_b": "Uterine fundus palpable left of midline",
        "option_c": "No bowel movement since delivery",
        "option_d": "Oral temperature of 100.4F",
        "correct_answer": "B"
      },
      {
        "number": 605,
        "question": "During the admitting mental health assessment, a client demonstrates involuntary muscular activity. He has a marked facial tic around the mouth that is distracting to the nurse during the interview. The nurse recognizes the behavior and documents it as:",
        "option_a": "Dyskinesia",
        "option_b": "Akathisia",
        "option_c": "Echopraxia",
        "option_d": "Echolalia",
        "correct_answer": "A"
      },
      {
        "number": 606,
        "question": "A client\u2018s wife is concerned over his behavior in recent months. He has been diagnosed with Parkinson\u2018s disease, and she is telling his nurse that he has been doing \u2015strange things.\u2016 The nurse reassures the wife that the following behavior is normal with Parkinson\u2018s disease:",
        "option_a": "\u2015Your husband will experience some periods of muscle flaccidity. Be sure to make him sit down during these periods.\u2016",
        "option_b": "\u2015Your husband may move his hands in motions that look like he is rolling a pill between his fingers.\u2016",
        "option_c": "\u2015Twitching of the muscles is to be expected and can occur at any time during the day.\u2016",
        "option_d": "\u2015Parkinson\u2018s disease causes severe pain in the joints. You should give your husband Tylenol at those times.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 607,
        "question": "A 45-year-old male client experiences a sense of depression because he has not yet achieved his life\u2018s goals. His career has not been satisfying. He is still looking for the right job. His wife spends too much money, and his children seem to ignore him while being very selfish. He is tired of all of their attitudes and is considering buying a red Corvette convertible. While obtaining these data concerning the client\u2018s feelings about his life, the nurse is able to determine he is experiencing what psychological crisis according to Erikson\u2018s stages?",
        "option_a": "Identity versus role confusion",
        "option_b": "Integrity versus despair",
        "option_c": "Intimacy versus isolation",
        "option_d": "Generativity versus self-absorption",
        "correct_answer": "D"
      },
      {
        "number": 608,
        "question": "To prevent thrombophlebitis in a client on complete bed rest, the nursing care plan should include:",
        "option_a": "Dangle the client\u2018s legs over the edge of the bed every shift.",
        "option_b": "Massage the client\u2018s calves briskly every shift.",
        "option_c": "Keep the client\u2018s legs extended and discourage any movement.",
        "option_d": "Have the client tighten and relax leg muscles several times daily.",
        "correct_answer": "D"
      },
      {
        "number": 609,
        "question": "Which behavior by a female client feeding her newborn demonstrates that she needs more teaching related to safety and infant feeding? E. She uses the bulb syringe to help clear her baby\u2018s nose when milk is regurgitated. F. She places her infant on her right side after feeding her. G. She props the bottle in the crib to feed her baby,which allows her to write birth announcements and feed her baby at the same time. H. She burps her baby by placing her in a sitting position, supporting her head and neck and gently massaging her back. Answer: C Explanation: (A) This practice is the proper use of the bulb syringe to clear the infant\u2018s airway in case of regurgitation. (B) Placing the infant on either side or on the stomach prevents aspiration of regurgitated milk. (C) \u2015Bottle propping\u2016 is an unsafe practice because it increases the likelihood of aspiration. (D) This practice is one correct way of burping an infant. QUESTION 610 A 4 days postpartum client who is gravida 3, para 3, isexamined by the home health nurse during her first postpartum home visit. The nurse notes that she has a pink vaginal discharge with a serosanguineous consistency. The nurse would most accurately chart the client\u2018s lochia as:",
        "option_a": "Rubra",
        "option_b": "Rosa",
        "option_c": "Serosa",
        "option_d": "Alba",
        "correct_answer": "C"
      },
      {
        "number": 611,
        "question": "A male client seeks counseling after his wife of 19 years threatened to divorce him. For most of their marriage, he has physically and verbally abused her. When asked about his behavior in the process of the nursing assessment, the client states, \u2015I was mean to my wife because she insists on cooking meals and wearing clothes that I do not like.\u2016 This defense mechanism is an example of:",
        "option_a": "Repression",
        "option_b": "Regression",
        "option_c": "Reaction formation \u201c",
        "option_d": "Rationalization",
        "correct_answer": "D"
      },
      {
        "number": 612,
        "question": "A female client has experienced varying degrees of depression throughout her life. Now that she is postmenopausal, her depression has increased. She is unable to motivate herself to clean her house or even to get out of bed and get dressed in the morning. The client was begun on fluoxetine (Prozac) therapy. When educating her about fluoxetine, what might the nurse caution her about?",
        "option_a": "A daily dose of fluoxetine may be taken in the morning or evening.",
        "option_b": "Fluoxetine is not sedating; therefore, restrictions on driving and other hazardous activities are not necessary.",
        "option_c": "Rashes or pruritus usually occur early in the therapy and are treatable without discontinuing the medication.",
        "option_d": "It is safe to take over-the-counter or other prescription medications with fluoxetine.",
        "correct_answer": "C"
      },
      {
        "number": 613,
        "question": "A male client is experiencing extreme distress. He begins to pace up and down the corridor. What nursing intervention is appropriate when communicating with the pacing client?",
        "option_a": "Ask him to sit down. Speak slowly and use short, simple sentences.",
        "option_b": "Help him to recognize his anxiety.",
        "option_c": "Walk with him as he paces.",
        "option_d": "Increase the level of his supervision.",
        "correct_answer": "C"
      },
      {
        "number": 614,
        "question": "A 1-year-old child is to receive an IM injection ordered by his pediatrician. He has fallen asleep in his mother\u2018s arms when the nurse approaches. Which approach is most appropriate at this time?",
        "option_a": "Give the injection in the vastus lateralis site before the child awakens.",
        "option_b": "Awaken the child first and give the injection in the ventrogluteal site.",
        "option_c": "Awaken the child first and give the injection in the dorsogluteal site.",
        "option_d": "Ask the mother to place the child on the examination table and leave the room, and then give the injection in an appropriate site.",
        "correct_answer": "B"
      },
      {
        "number": 615,
        "question": "A female client is seeking counseling for personal problems. She admits to being very unhappy lately at both home and work. During the nursing assessment, she uses many defense mechanisms. Which statement or action made by the client is an example of adaptive suppression?",
        "option_a": "\u2015I did not get the raise because my boss does not like me.\u2016",
        "option_b": "\u2015I felt a lump in my breast 2 weeks ago. I put off getting it checked until after my sister\u2018s wedding.\u2016",
        "option_c": "\u2015My son died 3 years ago. I still cannot bring myself to clean out his room.\u2016",
        "option_d": "\u2015My husband told me this morning that he wants a divorce. I am upset, but I cannot discuss the matter with him until after my company\u2018s board meeting today.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 616,
        "question": "A young child has been placed in a spica cast. The chief concern of the nurse during the first few hours is:",
        "option_a": "Prevention of neurovascular complications",
        "option_b": "Prevention of loss of muscle tone",
        "option_c": "Immobilization of the affected limb \u201c",
        "option_d": "Using heated fans to dry the cast",
        "correct_answer": "A"
      },
      {
        "number": 617,
        "question": "Newborns are routinely screened for phenylketonuri",
        "option_a": "The nursery nurse ensures that this screening test is performed: A. Immediately after birth, because the most accurate result is obtained at this time",
        "option_b": "After 2\u20133 days of milk ingestion",
        "option_c": "At 2\u20133 days of age regardless of amount of milk feedings",
        "option_d": "At 1 month, because the biochemical buildup of phenylalanine takes 1 month to detect",
        "correct_answer": "B"
      },
      {
        "number": 618,
        "question": "A female client plans to bottle-feed her newborn. Her physician has ordered bromocriptine (Parlodel) to suppress lactation. Which of the following instructions about bromocriptine should be given by the nurse?",
        "option_a": "Bromocriptine stimulates the production of prolactin.",
        "option_b": "Hypertension is a primary side effect.",
        "option_c": "Bromocriptine is generally taken for 5 days.",
        "option_d": "Her blood pressure must be stable before starting bromocriptine.",
        "correct_answer": "D"
      },
      {
        "number": 619,
        "question": "For the past several months, an elderly female client with Alzheimer\u2018s disease has experienced paranoia; hallucinations; and aggressive, disruptive behavior. The family is utilizing haloperidol as needed to control her behavior. On nursing assessment, you note that the client demonstrates involuntary movements of the tongue \u201c",
        "option_a": "Tardive dyskinesia, which may be a side effect of antipsychotic medication",
        "option_b": "Early symptoms of Parkinson\u2018s disease",
        "option_c": "A more advanced stage of Alzheimer\u2018s disease than previously experienced by the client",
        "option_d": "The need to change her medication from haloperidol to another antipsychotic drug to lessen symptoms",
        "correct_answer": "A"
      },
      {
        "number": 620,
        "question": "A client is receiving peritoneal dialysis. He has been taught to warm the dialyzing fluid prior to instilling it because:",
        "option_a": "Warmed solution helps keep the body temperature maintained within a normal range during instillation",
        "option_b": "Warmed solution helps dilate the peritoneal blood vessels",
        "option_c": "Warmed solution decreases the risk of peritoneal infection",
        "option_d": "Warmed solution promotes a relaxed abdominal muscle",
        "correct_answer": "B"
      },
      {
        "number": 621,
        "question": "A female client comes for her second prenatal visit. The nurse-midwife tells her, \u2015Your blood tests reveal that you do not show immunity to the German measles.\u2016 Which notation will the nurse include in her plan of care for the client? \u2015Will need . . .",
        "option_a": "Rh-immune globulin at the next visit\u2016",
        "option_b": "Rh-immune globulin within 3 days of delivery\u2016",
        "option_c": "Rubella vaccine at the next visit\u2016",
        "option_d": "Rubella vaccine after delivery on the day of discharge\u2016",
        "correct_answer": "D"
      },
      {
        "number": 622,
        "question": "An infant weighing 15 lb has just been treated for severe diarrhea in the hospital. Discharge instructions by the nurse will include maintenance fluid requirements for the pediatric client. Which of the following values best indicates the nurse\u2018s understanding of normal fluid requirements for this infant?",
        "option_a": "240 mL/day",
        "option_b": "680 mL/day",
        "option_c": "330 mL/day",
        "option_d": "960 mL/day",
        "correct_answer": "B"
      },
      {
        "number": 623,
        "question": "A male client tells his nurse that he has had an ulcer in the past and is afraid it is \u2015flaring up again.\u2016 The nurse begins to ask him specific questions about his symptoms. The nurse knows that a symptom that might indicate a serious complication of an ulcer is:",
        "option_a": "Pain in the middle of the night",
        "option_b": "A bowel movement every 3\u20135 days",
        "option_c": "Melena",
        "option_d": "Episodes of nausea and vomiting",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 19,
    "title": "NCLEX RN Practice Series 19",
    "question_count": 33,
    "questions": [
      {
        "number": 624,
        "question": "A 78-year-old female client has a total hip arthroplasty. Her nurse should know that which of the following is contraindicated?",
        "option_a": "Encourage exercises in the unaffected extremities.",
        "option_b": "Encourage her to cross and uncross her legs.",
        "option_c": "Check neurological and circulatory status of the affected leg hourly.",
        "option_d": "Place a trochanter roll along the upper thigh of the affected leg.",
        "correct_answer": "B"
      },
      {
        "number": 625,
        "question": "A female client has been recently diagnosed as bipolar. She has taken lithium for the past several weeks to control mani",
        "option_a": "What must be included in client education regarding lithium toxicity? A. Maintain a normal diet; however, limit salt intake to no more than 3 g/day.",
        "option_b": "Take lithium between meals to increase absorption.",
        "option_c": "Withhold lithium if experiencing diarrhea, vomiting, or diaphoresis.",
        "option_d": "For pain or fever, avoid aspirin or acetaminophen (Tylenol). Nonsteroidal anti-inflammatory drugs are preferred.",
        "correct_answer": "C"
      },
      {
        "number": 626,
        "question": "A 48-hour-old male infant is ordered to have phototherapy. When his mother questions the nurse about its purpose, the nurse explains that phototherapy:",
        "option_a": "Prevents the development of ophthalmia neonatorum",
        "option_b": "Assists the baby\u2018s clotting mechanism",
        "option_c": "Breaks down bilirubin in the skin into substances that can be excreted in stool or urine",
        "option_d": "Increases levels of unconjugated bilirubin, thereby preventing kernicterus (brain damage)",
        "correct_answer": "C"
      },
      {
        "number": 627,
        "question": "A 4-week-old infant is admitted to the emergency room in respiratory distress. Which of the following statements indicates the nurse\u2018s knowledge of the anatomy of the respiratory system in pediatric clients?",
        "option_a": "The diameter of the trachea is much smaller in children than in adults.",
        "option_b": "The tongue is proportionally smaller in children than in adults. \u201c",
        "option_c": "The pediatric airway is more rigid than that of the adults.",
        "option_d": "The length of the pediatric airway is longer in children than in adults.",
        "correct_answer": "A"
      },
      {
        "number": 628,
        "question": "A client has chronic obstructive pulmonary disease. She is slowly losing weight, and her daughter is very concerned about increasing her nutrition. The nurse helps the daughter devise a plan of care for her mother. The plan of care should include which of the following interventions to promote nutrition?",
        "option_a": "Offer her oral hygiene before and after meals.",
        "option_b": "Encourage her to consume milk products.",
        "option_c": "Encourage her to engage in an activity before a meal to stimulate her appetite.",
        "option_d": "Restrict her fluid intake to three glasses of water a day.",
        "correct_answer": "A"
      },
      {
        "number": 629,
        "question": "A female client at 37 weeks\u2018 gestation has just undergone a nonstress test. The results were two fetal movements with a corresponding increase in fetal heart rate (FHR) of 15 bpm lasting 15 seconds within a 20minute period. Her results would be classified as:",
        "option_a": "Reactive; needs follow-up contraction stress test",
        "option_b": "Reactive; no contraction stress test required",
        "option_c": "Non-reactive; needs follow-up contraction stress test",
        "option_d": "Non-reactive; no contraction stress test required",
        "correct_answer": "B"
      },
      {
        "number": 630,
        "question": "A client who is gravida 1 para 1 vaginally delivered a 7- lb girl. She received a midline episiotomy at delivery. When assessing the level of her uterus immediately following delivery, the nurse would expect the fundus to be located:",
        "option_a": "At the umbilicus",
        "option_b": "At the symphysis pubis",
        "option_c": "Midway between the umbilicus and the xiphoid process",
        "option_d": "Midway between the umbilicus and the symphysis pubis",
        "correct_answer": "D"
      },
      {
        "number": 631,
        "question": "A client is a victim of domestic violence. She is now receiving assistance at a shelter for battered women. She tells the nurse about the cycle of violence that she has been experiencing in her relationship with her husband of 5 years. In the \u2015tension-building phase,\u2016 the nurse might expect the client to describe which of the following?",
        "option_a": "Promises of gifts that her husband made to her",
        "option_b": "Acute battering of the client, characterized by his volatile discharge of tension",
        "option_c": "Minor battering incidents, such as the throwing of food or dishes at her",
        "option_d": "A period of tenderness between the couple",
        "correct_answer": "C"
      },
      {
        "number": 632,
        "question": "The physician of a client diagnosed with alcoholism orders neomycin 0.5 g q6h to prevent hepatic com",
        "option_a": "Neomycin decreases serum ammonia levels by: A. Decreasing nitrogen-forming bacteria in the intestines",
        "option_b": "Acidifying colon contents by causing ammonia retention in the colon",
        "option_c": "Decreasing the uptake of vitamin D, thereby drawing more water into the colon",
        "option_d": "Irritating the bowel and promoting evacuation of stool",
        "correct_answer": "A"
      },
      {
        "number": 633,
        "question": "A 6-year-old girl is visiting the outpatient clinic because she has a fever and a rash. The doctor diagnoses chickenpox. Her mother asks the nurse how many baby aspirins her daughter can have for fever. The nurse should:",
        "option_a": "Advise the mother not to give her aspirin",
        "option_b": "Ask if the client is allergic to aspirin before giving further information",
        "option_c": "Assess the function of the client\u2018s cranial nerve VIII",
        "option_d": "Check the aspirin bottle label to determine milligrams per tablet",
        "correct_answer": "A"
      },
      {
        "number": 634,
        "question": "The healthcare team determines that an elderly client has had progressive changes in memory over the last 2 years that have interfered with her personal, social, or occupational functioning. Her memory, learning, attention, and judgment have all been affected in some way. These symptoms describe which of the following conditions?",
        "option_a": "Dementia",
        "option_b": "Parkinsonism",
        "option_c": "Delirium",
        "option_d": "Mania",
        "correct_answer": "A"
      },
      {
        "number": 635,
        "question": "A 48-year-old male client is hospitalized with mild ascites, bruising, and jaundice. He has a 20-year history of alcohol abuse. The client is diagnosed with cirrhosis. His serum ammonia level is high, indicating hepatic encephalopathy. He has esophageal varices. Which of the following may cause the varices to rupture? \u201c",
        "option_a": "Lifting heavy objects",
        "option_b": "Walking briskly",
        "option_c": "Ingestion of barbiturates",
        "option_d": "Ingestion of antacids",
        "correct_answer": "A"
      },
      {
        "number": 636,
        "question": "After 7 hours in restraints and a total of 30-mg haloperidol in divided doses, a client complains of stiffness in his neck and his tongue \u2015pulling to one side.\u2016 These extrapyramidal symptoms (EPS) will most likely be relieved by the administration of:",
        "option_a": "Lorazepam (Ativan)",
        "option_b": "Benztropine (Cogentin)",
        "option_c": "Thiothixene (Navane)",
        "option_d": "Flurazepan (Dalmane)",
        "correct_answer": "B"
      },
      {
        "number": 637,
        "question": "A chronic alcoholic client\u2018s condition deteriorates, and he begins to exhibit signs of hepatic com",
        "option_a": "Which of the following is an early sign of impending hepatic coma? A. Hiccups",
        "option_b": "Anorexia",
        "option_c": "Mental confusion",
        "option_d": "Fetor hepaticus",
        "correct_answer": "C"
      },
      {
        "number": 638,
        "question": "A client who has been diagnosed with anorexia nervosa refuses to eat lunch. The most therapeutic response by the nurse to her refusal is:",
        "option_a": "\u2015Okay, missing one meal won\u2018t hurt.\u2016",
        "option_b": "\u2015You\u2018ll have to eat lunch, or we\u2018ll force-feed you.\u2016",
        "option_c": "\u2015It\u2018s not appropriate for you to try to manipulate the staff into granting your wishes.\u2016",
        "option_d": "\u2015We will not allow you to starve yourself. You may choose to eat voluntarily or be fed.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 639,
        "question": "A client is resting comfortably after delivering her first child. When assessing her pulse rate, the nurse would recognize the following finding to be typical: E. Thready pulse F. Irregular pulse G. Tachycardia H. Bradycardia Answer: D Explanation: (A) A thready pulse is indicative of hypotension and excessive blood loss and is often rapid. (B) Pulse irregularities or dysrhythmias do not occur in the normal postpartal woman. (C) Tachycardia occurs less frequently than bradycardia and is related to increased blood loss or prolonged difficult labor and/or birth. (D) Puerperal bradycardia with rates of 50\u201370 bpm commonly occurs during the first 6\u201310 days of the postpartal period. It may be related to decreased cardiac strain, decreased blood volume, contraction of the uterus, and increased stroke volume. QUESTION 640 The nurse is caring for a 2-year-old girl with a subdural hematoma of the temporal area as a result of falling out of bed and notices that she has a runny nose. The nurse should:",
        "option_a": "Call the doctor immediately",
        "option_b": "Help her to blow her nose carefully",
        "option_c": "Test the discharge for sugar",
        "option_d": "Turn her to her side",
        "correct_answer": "C"
      },
      {
        "number": 641,
        "question": "A client delivered a term infant 1 hour ago. Her uterus on assessment is boggy and is U +1 in contrast to the previous assessment of U _2. The immediate nursing response is to:",
        "option_a": "Administer methergine IM",
        "option_b": "Remove the retained placental fragments",
        "option_c": "Assist the client to the bathroom and provide cues to stimulate urination",
        "option_d": "Massage the fundus until firm",
        "correct_answer": "D"
      },
      {
        "number": 642,
        "question": "A 64-year-old client is admitted to the hospital with benign prostatic hypertrophy (BPH). He has a history of adult-onset diabetes and hypertension and is scheduled to undergo a resection of the prostate. When recording his health history, the nurse asks about his chief complaint. The most serious symptom that may accompany BPH is:",
        "option_a": "Acute urinary retention",
        "option_b": "Hesitancy in starting urination",
        "option_c": "Increased frequency of urination",
        "option_d": "Decreased force of the urinary stream",
        "correct_answer": "A"
      },
      {
        "number": 643,
        "question": "Following TURP, which of the following instructions would be appropriate to prevent or alleviate anxiety concerning the client\u2018s sexual functioning?",
        "option_a": "\u2015You may resume sexual intercourse in 2 weeks.\u2016",
        "option_b": "\u2015Many men experience impotence following TURP.\u2016",
        "option_c": "\u2015A transurethral resection does not usually cause impotence.\u2016 \u201c",
        "option_d": "\u2015Check with your doctor about resuming sexual activity.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 644,
        "question": "Before giving methergine postpartum, the nurse should assess the client for:",
        "option_a": "Decreased amount of lochial flow",
        "option_b": "Elevated blood pressure",
        "option_c": "Flushing",
        "option_d": "Afterpains",
        "correct_answer": "B"
      },
      {
        "number": 645,
        "question": "A male client is experiencing auditory hallucinations. His nurse enters the room and he tells her that his mother is talking to him, and he will take his medicine after she leaves. The nurse looks around the room and sees that she and the client are the only ones in the room. The nurse\u2018s most therapeutic response will be:",
        "option_a": "\u2015I don\u2018t see your mother in the room. Let\u2018s talk about how you\u2018re feeling.\u2016",
        "option_b": "\u2015OK, I\u2018ll come back later when you\u2018re feeling more like taking your medicine.\u2016",
        "option_c": "\u2015She may be here, but I can\u2018t see her.\u2016",
        "option_d": "\u2015Why don\u2018t you finish talking to her, and I\u2018ll wait.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 646,
        "question": "Degenerative disorders are attributed to many factors. As a nurse assigned to a convalescent home, one must often educate families about how such conditions occur. Which of the following statements might the nurse \u201c",
        "option_a": "\u2015Some folks believe that aging causes this, Mother.\u2016",
        "option_b": "\u2015Perhaps, it\u2018s the way your parents used those double- bind messages, Mother.\u2016",
        "option_c": "\u2015I know some people who are having this problem and they were exposed to chemicals at work, Mother.\u2016",
        "option_d": "\u2015It can be caused by lots of things, toxic agents and even alcohol, Mother.\u2016",
        "correct_answer": "B"
      },
      {
        "number": 647,
        "question": "A 42-year-old male client has been treated at an alcoholic rehabilitation center for physiological alcohol dependence. The nurse will be able to determine that he is preparing for discharge and is effectively coping with his problem when he shares with her the following information:",
        "option_a": "\u2015I know that I will not ever be able to socially drink alcohol again and will need the support of the AA group.\u2016",
        "option_b": "\u2015I know that I can only drink one or two drinks at social gatherings in the future, but at least I don\u2018t have to continue AA.\u2016",
        "option_c": "\u2015I really wasn\u2018t addicted to alcohol when I came here, I just needed some help dealing with my divorce.\u2016",
        "option_d": "\u2015It really wasn\u2018t my fault that I had to come here. If my wife hadn\u2018t left, I wouldn\u2018t have needed those drinks.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 648,
        "question": "A client at 9 weeks\u2018 gestation comes for an initial prenatal visit. On assessment, the nurse discovers this is her second pregnancy. Her first pregnancy resulted in a spontaneous abortion. She is 28 years old, in good health, and works full-time as an elementary school teacher. This information alerts the nurse to which of the following:",
        "option_a": "An increased risk in maternal adaptation to pregnancy",
        "option_b": "The need for anticipatory guidance regarding the pregnancy",
        "option_c": "The need for teaching regarding family planning",
        "option_d": "An increased risk for subsequent abortions",
        "correct_answer": "B"
      },
      {
        "number": 649,
        "question": "A client is admitted to the psychiatric unit after lavage and stabilization in the emergency room for an overdose of antidepressants. This is her third attempt in 2 years. The highest priority intervention at this time is to:",
        "option_a": "Assess level of consciousness",
        "option_b": "Assess suicide potential",
        "option_c": "Observe for sedation and hypotension",
        "option_d": "Orient to her room and unit rules",
        "correct_answer": "B"
      },
      {
        "number": 650,
        "question": "A seventh grader lost consciousness after being hit in the head with a basketball. In the emergency room his vital signs are stable, and he demonstrates no neurologic deficit. He will not be admitted to the hospital. It is most important that you advise his mother to:",
        "option_a": "Encourage him to drink plenty of fluids",
        "option_b": "Expect him to have nausea with vomiting",
        "option_c": "Keep him awake for the next 12 hours",
        "option_d": "Wake him up every 1\u20132 hours during the night",
        "correct_answer": "D"
      },
      {
        "number": 651,
        "question": "A newborn girl\u2018s father expresses concern that the newborn does not have good control of her hands and arms. It is important for the father to realize certain neurological patterns that characterize the newborn:",
        "option_a": "Mild hypotonia is expected in the upper extremities.",
        "option_b": "Purposeless, uncoordinated movements of the arms are indicative of neurological dysfunction.",
        "option_c": "Function progresses in a head-to-toe, proximal-distal fashion.",
        "option_d": "Asymmetrical movement of the extremities is not unusual and will disappear with maturation of the central \u201c",
        "correct_answer": "C"
      },
      {
        "number": 652,
        "question": "A 2-year-old child with a scalp laceration and subdural hematoma of the temporal area as a result of falling out of bed should be prevented from:",
        "option_a": "Crying",
        "option_b": "Falling asleep",
        "option_c": "Rolling from his back to his tummy",
        "option_d": "Sucking his thumb",
        "correct_answer": "A"
      },
      {
        "number": 653,
        "question": "The client will be more comfortable and the results more accurate when the nurse prepares the client for Leopold\u2018s maneuvers by having her:",
        "option_a": "Empty her bladder",
        "option_b": "Lie on her left side",
        "option_c": "Place her arms over her head",
        "option_d": "Force fluids 1 hour prior to procedure",
        "correct_answer": "A"
      },
      {
        "number": 654,
        "question": "In counseling a client, the nurse emphasizes the danger signals during pregnancy. On the next visit, the client identifies which of the following as a danger signal that should be reported immediately? \u201c",
        "option_a": "Backache",
        "option_b": "Leaking of clear yellow fluid from breasts",
        "option_c": "Constipation with hemorrhoids",
        "option_d": "Visual changes",
        "correct_answer": "D"
      },
      {
        "number": 655,
        "question": "A female client with major depression stated that \u2015life is hopeless and not worth living.\u2016 The nurse should place highest priority on which of the following questions?",
        "option_a": "\u2015How has your appetite been recently?\u2016",
        "option_b": "\u2015Have you thought about hurting yourself?\u2016",
        "option_c": "\u2015How is your relationship with your husband?\u2016",
        "option_d": "\u2015How has your depression affected your daily livingactivities?\u2016",
        "correct_answer": "B"
      },
      {
        "number": 656,
        "question": "A 35-year-old primigravida comes to the clinic for her first prenatal visit. The midwife, on examining the client, suspects that she is approximately 11 weeks pregnant. The pregnancy is positively confirmed by finding:",
        "option_a": "Chadwick\u2018s sign",
        "option_b": "FHR by ultrasound",
        "option_c": "Enlargement of the uterus",
        "option_d": "Breast tenderness and enlargement",
        "correct_answer": "B"
      },
      {
        "number": 657,
        "question": "A family is experiencing changes in their lifestyle in many ways. The invalid grandmother has moved in with them. The couple have a 2-year-old son by their marriage, and the wife has two children by her previous marriage. The older children are in high school. In applying systems theory to this family, it is important for the nurse to remember which of the following principles?",
        "option_a": "The parts of a system are only minimally related.",
        "option_b": "Dysfunction in one part affects every other part.",
        "option_c": "A family system has no boundaries.",
        "option_d": "Healthy families are enmeshed.",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 20,
    "title": "NCLEX RN Practice Series 20",
    "question_count": 33,
    "questions": [
      {
        "number": 658,
        "question": "In healthcare settings, nurses must be familiar with primary, secondary, and tertiary levels of care. As a nurse in the community, which of the following interventions might be a primary prevention strategy?",
        "option_a": "Crisis intervention with an intoxicated teenager whose mother just committed suicide",
        "option_b": "Referring a client who has been on a detoxification unit to a rehabilitation center",
        "option_c": "Teaching fifth-grade children the harmful effects of substance abuse",
        "option_d": "Counseling a client with post-traumatic stress disorder",
        "correct_answer": "C"
      },
      {
        "number": 659,
        "question": "A client\u2018s prenatal screening indicated that she has no immunity to rubell",
        "option_a": "She is now 10 weeks pregnant. The best time to immunize her is: A. In the immediate postpartum period",
        "option_b": "After the first trimester",
        "option_c": "At 28 weeks\u2018 gestation",
        "option_d": "Within 72 hours postpartum",
        "correct_answer": "A"
      },
      {
        "number": 660,
        "question": "When assessing the client 6 hours postpartum, the fundus is found to be U +3, displaced to the right of midline, and slightly boggy. The nurse would first:",
        "option_a": "Increase the IV oxytocin drip rate",
        "option_b": "Give methergine IM",
        "option_c": "Assess for a full bladder",
        "option_d": "Grasp the uterus and massage vigorously Explanation: (A) Oxytocin may not be necessary if the bladder is emptied and if the uterus remains firm, midline, and at about U11 after massage. (B) The same rationale as for answer \u2015A\u2016 applies. (C) A full bladder is the most common cause of uterine atony. If the bladder is full, it should be emptied and the uterus reassessed before further intervention. (D) If the bladder is full, the uteruswill not stay contracted or return to a normal position. Overly vigorous massage also encourages uterine atony. QUESTION 661 The nurse in the mental health center is instructing a depressed client about the dietary restrictions necessary in taking her medication, which is a monoamine oxidase (MAO) inhibitor. Which of the following is she restricting from the client\u2018s diet? A. Cream cheese B. Fresh fruits C. Aged cheese D. Yeast bread",
        "correct_answer": "C"
      },
      {
        "number": 662,
        "question": "Two weeks after a client\u2018s admission for depression, the physician orders a consult for electroconvulsive therapy (ECT). Which of the following conditions, if present, would be a contraindication for ECT?",
        "option_a": "Brain tumor or other space-occupying lesion",
        "option_b": "History of mitral valve prolapse",
        "option_c": "Surgically repaired herniated lumbar disk",
        "option_d": "History of frequent urinary tract infections",
        "correct_answer": "A"
      },
      {
        "number": 663,
        "question": "A 20-year-old female client delivers a stillborn infant. Following the delivery, an appropriate response by the labor nurse to the question, \u2015Why did this happen to my baby?\u2016 is:",
        "option_a": "\u2015It\u2018s God\u2018s will. It was probably for the best. There was something probably wrong with your baby.\u2016",
        "option_b": "\u2015You\u2018re young. You can have other children later.\u2016",
        "option_c": "\u2015I know your other children will be a great comfort to you.\u2016",
        "option_d": "\u2015I can see you\u2018re upset. Would you like to see and hold your baby?\u2016",
        "correct_answer": "D"
      },
      {
        "number": 664,
        "question": "An 18-year-old girl is admitted to the hospital with a depressed skull fracture as a result of a car accident. If the nurse were to observe a rising pulse rate and lowering blood pressure, the nurse would suspect that the client:",
        "option_a": "Has a sudden and severe increase in intracranial pressure",
        "option_b": "Has sustained an internal injury in addition to the head injury",
        "option_c": "Is beginning to experience a dangerously high level of anxiety",
        "option_d": "Is having intracranial bleeding",
        "correct_answer": "B"
      },
      {
        "number": 665,
        "question": "A client is placed in five-point restraints after exhibiting sudden violence after illegal drug use, and haloperidol (Haldol) 5 mg IM is administered. After 1 hour, his behavior is more subdued, but he tells the nurse, \u2015The devil followed me into this room, I see him standing in the corner with a big knife. When you leave the room, he\u2018s going to cut out my heart.\u2016 The nurse\u2018s best response is: \u201c",
        "option_a": "\u2015I know you\u2018re feeling frightened right now, but I want you to know that I don\u2018t see anyone in the corner.\u2016",
        "option_b": "\u2015You\u2018ll probably see strange things for a while until the PCP wears off.\u2016",
        "option_c": "\u2015Try to sleep. When you wake up, the devil will be gone.\u2016",
        "option_d": "\u2015You\u2018re probably feeling guilty because you used illegal drugs tonight.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 666,
        "question": "A client has had amniocentesis. One of the tests performed on the amniotic fluid is a lecithin/sphingomyelin (L/S) ratio. The results show a ratio of 1:1. This is indicative of:",
        "option_a": "Lung immaturity",
        "option_b": "Intrauterine growth retardation (IUGR)",
        "option_c": "Intrauterine infection",
        "option_d": "Neural tube defect",
        "correct_answer": "A"
      },
      {
        "number": 667,
        "question": "While the nurse is taking a male client\u2018s blood pressure, he makes flirtatious remarks to her. The nurse will handle this effectively if she:",
        "option_a": "Politely tells the client, \u2015Keep your hands off \u2016",
        "option_b": "Ignores the remarks and hopes he will not try it again",
        "option_c": "Confronts the remarks but attempts not to reject the client",
        "option_d": "Leaves the room in order to compose herself",
        "correct_answer": "C"
      },
      {
        "number": 668,
        "question": "Which of the following blood values would require further nursing action in a newborn who is 4 hours old?",
        "option_a": "Hemoglobin 17.2 g/dL",
        "option_b": "Platelets 250,000/mm3",
        "option_c": "Serum glucose 30 mg/dL",
        "option_d": "White blood cells 18,000/mm3",
        "correct_answer": "C"
      },
      {
        "number": 669,
        "question": "A violent client remains in restraints for several hours. Which of the following interventions is most appropriate while he is in restraints?",
        "option_a": "Give fluids if the client requests them.",
        "option_b": "Assess skin integrity and circulation of extremities before applying restraints and as they are removed.",
        "option_c": "Measure vital signs at least every 4 hours.",
        "option_d": "Release restraints every 2 hours for client to exercise.",
        "correct_answer": "D"
      },
      {
        "number": 670,
        "question": "A husband and wife and their two children, age 9 and age 5, are requesting family therapy. Which of the following strategies is most therapeutic for the nurse to use during the initial interaction with a family?",
        "option_a": "Always allow the most vocal person to state the problem first.",
        "option_b": "Encourage the mother to speak for the children.",
        "option_c": "Interpret immediately what seems to be going on within the family.",
        "option_d": "Allow family members to assume the seats as they choose.",
        "correct_answer": "D"
      },
      {
        "number": 671,
        "question": "In acute episodes of mania, lithium is effective in 1\u20132 weeks, but it may take up to 4 weeks, or even a few months, to treat symptoms fully. Sometimes an antipsychotic agent is prescribed during the first few days or weeks of an acute episode to manage severe behavioral excitement and acute psychotic symptoms. In addition to the lithium, which one of the following medications might the physician prescribe?",
        "option_a": "Diazepam (Valium)",
        "option_b": "Haloperidol (Haldol)",
        "option_c": "Sertraline (Zoloft)",
        "option_d": "Alprazolam (Xanax)",
        "correct_answer": "B"
      },
      {
        "number": 672,
        "question": "A client is admitted to the labor room. She is dilated 4 cm. She is placed on electric fetal monitoring. Which of the following observations necessitates notifying the physician?",
        "option_a": "Contractions every 2 minutes, lasting 100 seconds",
        "option_b": "Fetal heart decelerations during a contraction",
        "option_c": "Beat-to-beat variability between contractions",
        "option_d": "Fetal heart decelerations at the beginning of contractions",
        "correct_answer": "A"
      },
      {
        "number": 673,
        "question": "On admission to the postpartal unit, the nurse\u2018s assessment identifies the client\u2018s fundus to be soft, 2 fingerbreadths above the umbilicus, and deviated to the right. This is most likely an indication of:",
        "option_a": "Normal involution",
        "option_b": "A full bladder",
        "option_c": "An infection pain",
        "option_d": "A hemorrhage \u201c",
        "correct_answer": "B"
      },
      {
        "number": 674,
        "question": "A 28-year-old multigravida has class II heart disease. At her prenatal visit at 34 weeks\u2018 gestation, all of the following observations are made. Which would require intervention?",
        "option_a": "Weight gain of 2 kg in 4 weeks",
        "option_b": "Blood pressure of 128/78",
        "option_c": "Subjective data: shortness of breath after showering",
        "option_d": "Ankle edema reported present in late afternoon and evenings",
        "correct_answer": "C"
      },
      {
        "number": 675,
        "question": "A client suspected of having anorexia nervosa is placed on bed rest with an IV infusion and a high-carbohydrate liquid diet. Within 72 hours, the results of her lab work show a return to normal limits. She is transferred to the psychiatric service for further treatment. A behavior modification plan is initiated. Three days after her transfer, the client tells the nurse, \u2015I haven\u2018t exercised in 6 days. I won\u2018t be eating lunch today.\u2016 This statement by her most likely reflects:",
        "option_a": "Her lack of internal awareness about the outcome of the behavior",
        "option_b": "Increased knowledge about personal exercise plans",
        "option_c": "A manipulative technique to trick the nurse into allowing her to miss a meal",
        "option_d": "A true desire to stay fit while in the hospital",
        "correct_answer": "A"
      },
      {
        "number": 676,
        "question": "The doctor has ordered a restricted fluid intake for a 2- year-old child with a head injury. Normal fluid intake for a child of 2 years is:",
        "option_a": "900 mL/24 hr",
        "option_b": "1300 mL/24 hr",
        "option_c": "1600 mL/24 hr",
        "option_d": "2000 mL/24 hr",
        "correct_answer": "C"
      },
      {
        "number": 677,
        "question": "When discussing the relationship between exercise and insulin requirements, a 26-year-old client with IDDM should be instructed that:",
        "option_a": "When exercise is increased, insulin needs are increased",
        "option_b": "When exercise is increased, insulin needs are decreased",
        "option_c": "When exercise is increased, there is no change in insulin needs",
        "option_d": "When exercise is decreased, insulin needs are decreased",
        "correct_answer": "B"
      },
      {
        "number": 678,
        "question": "Blood work reveals the following lab values for a client who has been diagnosed with anorexia nervosa: hemoglobin 9.6 g/dL, hemocrit 27%, potassium 2.7 mEq/L, sodium 126 mEq/L. The greatest danger to her at this time is:",
        "option_a": "Hypoglycemia from low-carbohydrate intake",
        "option_b": "Possible cardiac dysrhythmias secondary to hypokalemia",
        "option_c": "Dehydration from vomiting",
        "option_d": "Anoxia secondary to anemia",
        "correct_answer": "B"
      },
      {
        "number": 679,
        "question": "A 14-year-old boy has a head injury with laceration of his scalp over his ear. The nurse should call the physician to report:",
        "option_a": "Blood pressure increase from 100/80 to 115/85 after lunch",
        "option_b": "Headache that is unresponsive to acetaminophen (Tylenol)",
        "option_c": "Pulse rate ranges between 68 bpm and 76 bpm",
        "option_d": "Temperature rise to 102_F rectally",
        "correct_answer": "D"
      },
      {
        "number": 680,
        "question": "A 2-year-old boy is in the hospital outpatient department for observation after falling out of his crib and hitting his head. The nurse calls the physician to report:",
        "option_a": "Evidence of perineal irritation",
        "option_b": "Pulse fell from 102 to 96",
        "option_c": "Pulse increased from 96 to 102",
        "option_d": "Temperature rose to 102_F rectally",
        "correct_answer": "D"
      },
      {
        "number": 681,
        "question": "A client has been in labor 10 hours and is becoming very tired. She has dilated to 7 cm and is at 0 station with the fetus in a right occipitoposterior position. She is complaining of severe backache with each contraction. One comfort measure the nurse can employ is to:",
        "option_a": "Place her in knee-chest position during the contraction",
        "option_b": "Use effleurage during the contraction",
        "option_c": "Apply strong sacral pressure during the contraction",
        "option_d": "Have her push with each contraction \u201c",
        "correct_answer": "C"
      },
      {
        "number": 682,
        "question": "The nurse is admitting an infant with bacterial meningitis and is prepared to manage the following possible effects of meningitis:",
        "option_a": "Constipation",
        "option_b": "Hypothermia",
        "option_c": "Seizure",
        "option_d": "Sunken fontanelles",
        "correct_answer": "C"
      },
      {
        "number": 683,
        "question": "The nurse explains perineal hygiene self-care postpartum to the client. She should be instructed to:",
        "option_a": "Wear gloves for the procedure",
        "option_b": "Place and adjust the pad from back to front",
        "option_c": "Cleanse and wipe the perineum from front to back",
        "option_d": "Protect the outer surface of the pad from contamination",
        "correct_answer": "C"
      },
      {
        "number": 684,
        "question": "On morning rounds, the nurse found a manic-depressive client who is taking lithium in a confused mental state, vomiting, twitching, and exhibiting a coarse hand tremor. Which one of the following nursing actions is essential at this time?",
        "option_a": "Administer her next dosage of lithium, and then call the physician.",
        "option_b": "Withhold her lithium, and report her symptoms to the physician.",
        "option_c": "Place her on NPO to decrease the excretion of lithium from her body, and call the physician.",
        "option_d": "Contact the lab and request a lithium level in 30 minutes, and call the physician. \u201c",
        "correct_answer": "B"
      },
      {
        "number": 685,
        "question": "A registered nurse is trying to determine the appropriate care that she should provide for her obstetrical clients. Which of the following documents is considered the legal standard of practice?",
        "option_a": "State nursing practice act",
        "option_b": "AWHONN Standards for the Nursing Care of Women and Newborns",
        "option_c": "American Nurses\u2018 Association Standards of Maternal- Child Health Nursing",
        "option_d": "International Council of Nurses\u2018 Code",
        "correct_answer": "A"
      },
      {
        "number": 686,
        "question": "A 26-year-old female client presents at 10 weeks\u2018 gestation. She currently is a G3 1-0-1-1. Her mother and grandmother have heart disease. Her grandmother also has insulin-dependent diabetes. The client\u2018s previous delivery was a term female infant weighing 9 lb 13 oz. The client is 5 ft 6 inches tall and her current weight is 130 lb. Based on her history, she is at risk for developing diabetes in pregnancy. Which of the following factors places her at risk for gestational diabetes?",
        "option_a": "Age>25 years",
        "option_b": "Maternal weight",
        "option_c": "Previous birth of an infant weighing>9 lb",
        "option_d": "Family history of heart disease",
        "correct_answer": "C"
      },
      {
        "number": 687,
        "question": "A client\u2018s membranes have just ruptured spontaneously. Which of the following nursing actions should take priority?",
        "option_a": "Assess quantity of fluid.",
        "option_b": "Assess color and odor of fluid.",
        "option_c": "Document on fetal monitor strip and chart.",
        "option_d": "Assess fetal heart rate (FHR).",
        "correct_answer": "D"
      },
      {
        "number": 688,
        "question": "After several days, an IDDM client\u2018s serum glucose stabilizes, and the registered nurse continues client teaching in preparation for his discharge. The nurse helps him plan an American Diabetes Association diet and explains how foods can be substituted on the exchange list. He can substitute 1 oz of poultry for:",
        "option_a": "One frankfurter",
        "option_b": "One ounce of ham",
        "option_c": "Two slices of bacon",
        "option_d": "One-fourth cup dry cottage cheese",
        "correct_answer": "D"
      },
      {
        "number": 689,
        "question": "An IDDM client\u2018s condition stabilizes. He begins to receive a daily injection of NPH insulin at 6:30 AM. The nurse can most likely expect a hypoglycemic reaction to occur that same day at:",
        "option_a": "8:30 AM\u201310:30 AM",
        "option_b": "2:30 PM\u20134:30 PM",
        "option_c": "7:30 PM\u20139:30 PM \u201c",
        "option_d": "10:30 PM\u201311:30 PM",
        "correct_answer": "B"
      },
      {
        "number": 690,
        "question": "A husband asks if he can visit with his wife on her ECT treatment days and what to expect after the initial treatment. The nurse\u2018s best response is:",
        "option_a": "\u2015You\u2018ll have to get permission from the physician to visit. Clients are pretty sick after the first treatment.\u2016",
        "option_b": "\u2015Visitors are not allowed. We will telephone you to inform you of her progress.\u2016",
        "option_c": "\u2015There\u2018s really no need to stay with her. She\u2018s going to sleep for several hours after the treatment.\u2016",
        "option_d": "\u2015Yes, you may visit. She may experience temporary drowsiness, confusion, or memory loss after each treatment.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 691,
        "question": "A female client admitted to the labor and delivery unit thinks her bag of water \u2015broke\u2016 approximately 2 hours ago. She is having mild contractions 5 minutes apart. The most immediate nursing intervention would be to:",
        "option_a": "Note the color and amount of fluid on her clothes.",
        "option_b": "Assess the FHR.",
        "option_c": "Notify the physician.",
        "option_d": "Place the nitrazine test paper at the cervical os and note the color change.",
        "correct_answer": "B"
      }
    ]
  },
  {
    "series_number": 21,
    "title": "NCLEX RN Practice Series 21",
    "question_count": 33,
    "questions": [
      {
        "number": 692,
        "question": "Medication is administered to a client who has been placed in restraints after a sudden violent episode, and his EPSs subside. Restraints can be removed when:",
        "option_a": "The physician orders it",
        "option_b": "A therapeutic alliance has been established, and violent behavior subsides",
        "option_c": "The violent behavior subsides, and the client agrees to behave",
        "option_d": "The nurse deems that removal of restraints is necessary",
        "correct_answer": "B"
      },
      {
        "number": 693,
        "question": "The nurse assesses a client\u2018s monitor strip and finds the following: uterine contractions every 3\u20134 minutes, lasting 60\u201370 seconds; FHR baseline 134\u2013146 bpm, with accelerations to 158 bpm with fetal movement. Which nursing intervention is appropriate?",
        "option_a": "Notify physician of nonreassuring FHR pattern.",
        "option_b": "Turn the client to her left side.",
        "option_c": "Start IV for fetal distress and administer O2 at 6\u20138 liters by mask.",
        "option_d": "Evaluate to see if the monitor strip is reassuring.",
        "correct_answer": "D"
      },
      {
        "number": 694,
        "question": "A 14-year-old boy fell off his bike while \u2015popping a wheelie\u2016 on the dirt trails. He has sustained a head injury with laceration of his scalp over his temporal lobe. If he were to complain of headache during the first 24 hours of his hospitalization, the nurse would:",
        "option_a": "Ask the physician to order a sedative \u201c",
        "option_b": "Have the client describe his headache every 15 minutes",
        "option_c": "Increase his fluid intake to 3000 mL/24 hr",
        "option_d": "Offer diversionary activities",
        "correct_answer": "D"
      },
      {
        "number": 695,
        "question": "A client at 6 months\u2018 gestation complains of tiredness and dizziness. Her hemoglobin level is 10 g/dL, and her hematocrit value is 32%. Her nutritional intake is assessed as sufficient. The most likely diagnosis is:",
        "option_a": "Iron-deficiency anemia",
        "option_b": "Physiological anemia",
        "option_c": "Fatigue due to stress",
        "option_d": "No problem indicated",
        "correct_answer": "A"
      },
      {
        "number": 696,
        "question": "A baby is circumcised. Immediate postoperative care should include:",
        "option_a": "Applying a loose diaper",
        "option_b": "Keeping the baby NPO for 4 hours to avoid vomiting",
        "option_c": "Changing the dressing frequently using dry, sterile gauze",
        "option_d": "Taking the baby to his mother for cuddling",
        "correct_answer": "D"
      },
      {
        "number": 697,
        "question": "A client who has been diagnosed with anorexia nervosa reluctantly agrees to eat all prescribed meals. The most important intervention in monitoring her dietary compliance would be to: \u201c",
        "option_a": "Allow her privacy at mealtimes",
        "option_b": "Praise her for eating everything",
        "option_c": "Observe behavior for 1\u20132 hours after meals to prevent vomiting",
        "option_d": "Encourage her to eat in moderation, choose foods that she likes, and avoid foods that she dislikes",
        "correct_answer": "C"
      },
      {
        "number": 698,
        "question": "The nurse has been caring for a 16-year-old female who recently experienced date rape. After having had crisis intervention and been hospitalized for 2 weeks, the nurse knows that the client is effectively coping with the rape when she tells the nurse:",
        "option_a": "\u2015I know it was my fault that it happened, because I shouldn\u2018t have been out so late.\u2016",
        "option_b": "\u2015If I had not worn that sexy dress that night, he wouldn\u2018t have raped me.\u2016",
        "option_c": "\u2015I know my date just had so much passion he couldn\u2018t handle me saying \u2017no.\u2018 \u2016",
        "option_d": "\u2015I know now that it was not my fault, but I want to continue counseling after my discharge.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 699,
        "question": "A 24-year-old woman who is gravida 1 reports, \u2015I can\u2018t take iron pills because they make me sick.\u2016 She continues, \u2015My bowels aren\u2018t moving either.\u2016 In counseling her based on these complaints, the nurse\u2018s most appropriate response would be, \u2015It would be beneficial for you to eat . . .",
        "option_a": "prunes.\u2016",
        "option_b": "green leafy vegetables.\u2016",
        "option_c": "red meat.\u2016",
        "option_d": "eggs.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 700,
        "question": "The physician of an alcoholic client places him on a low-protein, high-carbohydrate diet. When choosing his menu, the client\u2018s best choice from the items below would be:",
        "option_a": "Liver and onions, macaroni and cheese, tea with sugar",
        "option_b": "Baked chicken, baked potato with bacon bits, milk",
        "option_c": "Waffles with butter and honey, orange juice",
        "option_d": "Cheese omelette with ham and mushrooms, milk",
        "correct_answer": "C"
      },
      {
        "number": 701,
        "question": "In evaluating the effectiveness of magnesium sulfate (MgSO4), which of the following might indicate that the client was developing MgSO4 toxicity?",
        "option_a": "A 31 patellar tendon reflex",
        "option_b": "Respirations of 12 breaths/min",
        "option_c": "Urine output of 40 mL/hr",
        "option_d": "A 21 proteinuria value",
        "correct_answer": "B"
      },
      {
        "number": 702,
        "question": "Assessment of a client reveals a 30% loss of preillness weight, lanugo, and cessation of menses for 3 months. Her vital signs are BP 90/50, P 96 bpm, respirations 30, and temperature 97 F. She admits to the nurse that she has induced vomiting 3 times this morning, but she had to continue exercising to lose \u2015just 5 more lb.\u2016 Her symptoms are consistent with:",
        "option_a": "Pregnancy",
        "option_b": "Bulimia",
        "option_c": "Gastritis",
        "option_d": "Anorexia nervosa \u201c",
        "correct_answer": "D"
      },
      {
        "number": 703,
        "question": "A 16-year-old female client is admitted to the hospital because she collapsed at home while exercising with videotaped workout instructions. Her mother reports that she has been obsessed with losing weight and staying slim since cheerleader try-outs 6 months ago, when she lost out to two of her best friends. The client is 5\u20184\u2016 and weighs 92 lb, which represents a weight loss of 28 lb over the last 4 months. The most important initial intervention on admission is to:",
        "option_a": "Obtain an accurate weight",
        "option_b": "Search the client\u2018s purse for pills",
        "option_c": "Assess vital signs",
        "option_d": "Assign her to a room with someone her own age",
        "correct_answer": "C"
      },
      {
        "number": 704,
        "question": "A new mother experiences strong uterine contractions while breast-feeding her baby. She excitedly rings for the nurse. When the nurse arrives the mother tells her, \u2015Something is wrong. This is like my labor.\u2016 Which reply by the nurse identifies the physiological response of the client?",
        "option_a": "\u2015Your breasts are secreting a hormone that enters your bloodstream and causes your abdominal muscles to contract.\u2016",
        "option_b": "\u2015Prolactin increases the blood supply to your uterus, and you are feeling the effects of this blood vessel engorgement.\u2016",
        "option_c": "\u2015The same hormone that is released in response to the baby\u2018s sucking, causing milk to flow, also causes the uterus to contract.\u2016",
        "option_d": "\u2015There is probably a small blood clot or placental fragment in your uterus, and your uterus is contracting to expel it.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 705,
        "question": "A client presented herself to the mental health center, describing the following symptoms: a weight loss of 20 lb in the past 2 months, difficulty concentrating, repeated absences from work due to \u2015fatigue,\u2016 and not wanting to get dressed in the morning. She leaves her recorded message on her telephone and has lost interest in answering the phone or doorbell. The nurse\u2018s assessment of her behavior would most likely be:",
        "option_a": "Deep depression",
        "option_b": "Psychotic depression",
        "option_c": "Severe anxiety",
        "option_d": "Severe depression",
        "correct_answer": "D"
      },
      {
        "number": 706,
        "question": "A client\u2018s record from the ED indicates that she overdosed on phenelzine sulfate (Nardil), a monoamine oxidase (MAO) inhibitor. Which diet would be the most appropriate at this time?",
        "option_a": "High carbohydrate, low cholesterol",
        "option_b": "High protein, high carbohydrate",
        "option_c": "1 g sodium",
        "option_d": "Tyramine-free",
        "correct_answer": "D"
      },
      {
        "number": 707,
        "question": "Which of the following symptoms might the nurse observe in a client with a lithium blood level over 2.0?",
        "option_a": "Fine hand tremor, headache, mental dullness",
        "option_b": "Vomiting, impaired consciousness, decreased blood pressure",
        "option_c": "Polyuria, polydipsia, edema",
        "option_d": "Gastric irritation, nausea, diarrhea \u201c",
        "correct_answer": "B"
      },
      {
        "number": 708,
        "question": "A client with IDDM is given IV insulin for a blood glucose level of 520 mg/dL. Life-threatening complications may occur initially, so the nurse will monitor him closely for serum:",
        "option_a": "Chloride level of 99 mEq/L",
        "option_b": "Sodium level of 136 mEq/L",
        "option_c": "Potassium level of 3.1 mEq/L",
        "option_d": "Potassium level of 6.3 mEq/L",
        "correct_answer": "D"
      },
      {
        "number": 709,
        "question": "The nurse and prenatal client discuss the effects of cigarette smoking on pregnancy. It would be correct for the nurse to explain that with cigarette smoking there is increased risk that the baby will have:",
        "option_a": "A low birth weight",
        "option_b": "A birth defect",
        "option_c": "Anemia",
        "option_d": "Nicotine withdrawal",
        "correct_answer": "A"
      },
      {
        "number": 710,
        "question": "A 26-year-old male client is brought by his wife to the emergency department (ED) unconscious. Blood is drawn for a stat blood count (CBC), fasting blood sugar level, and electrolytes. An indwelling urinary catheter is inserted. He has a history of type 1 diabetes (insulindependent diabetes mellitus [IDDM]). A diagnosis of ketoacidosis is made. Stat lab values reveal a blood sugar level of 520 mg/dL. Which of the following should \u201c",
        "option_a": "D50W by IV push",
        "option_b": "NPH insulin SC",
        "option_c": "Regular insulin by IV infusion",
        "option_d": "Sweetened grape juice by mouth",
        "correct_answer": "C"
      },
      {
        "number": 711,
        "question": "In teaching the client about proper umbilical cord care, the nurse recommends that:",
        "option_a": "Petrolatum be placed around the cord after the sponge bath",
        "option_b": "A belly binder be applied to prevent umbilical hernia",
        "option_c": "The area be cleansed at diaper changes with alcohol and inspected for redness or drainage",
        "option_d": "The cord clamp be left on until the cord stump separates",
        "correct_answer": "C"
      },
      {
        "number": 712,
        "question": "A 24-hours\u2018 postpartum client complains of discomfort at the episiotomy site. On assessment, the nurse notes the episiotomy is without signs of infection. To relieve the discomfort, the nurse should first:",
        "option_a": "Assist her with a sitz bath",
        "option_b": "Administer the prescribed medication for pain",
        "option_c": "Teach her Kegel exercises",
        "option_d": "Apply an ice pack",
        "correct_answer": "A"
      },
      {
        "number": 713,
        "question": "Due to his prolonged history of alcohol abuse, an alcoholic client will most likely have deficiencies of which of the following nutrients?",
        "option_a": "Vitamin C and zinc",
        "option_b": "Folic acid and niacin",
        "option_c": "Vitamin A and biotin",
        "option_d": "Thiamine and pyroxidine",
        "correct_answer": "D"
      },
      {
        "number": 714,
        "question": "A female client has been treated since childhood for mitral valve prolapse. The antibiotic of choice for her during pregnancy would be:",
        "option_a": "Sulfa",
        "option_b": "Tetracycline",
        "option_c": "Hydralazine",
        "option_d": "Erythromycin",
        "correct_answer": "D"
      },
      {
        "number": 715,
        "question": "A client is being admitted to the labor and delivery unit. She has had previous admissions for \u2015false labor.\u2016 Which clinical manifestation would be most indicative of true labor?",
        "option_a": "Increased bloody show",
        "option_b": "Progressive dilatation and effacement of the cervix",
        "option_c": "Uterine contractions",
        "option_d": "Decreased discomfort with ambulation",
        "correct_answer": "B"
      },
      {
        "number": 716,
        "question": "A 2-year-old boy fell out of bed and has a subdural hematom",
        "option_a": "When his mother leaves him for the first time, you will expect the child to: A. Be comforted when he is held",
        "option_b": "Cry",
        "option_c": "Not notice that his mother has left",
        "option_d": "Withdraw and become listless",
        "correct_answer": "B"
      },
      {
        "number": 717,
        "question": "A client undergoes a transurethral resection, prostate (TURP). He returns from surgery with a three-way continuous Foley irrigation of normal saline in progress. The purpose of this bladder irrigation is to prevent:",
        "option_a": "Bladder spasms",
        "option_b": "Clot formation",
        "option_c": "Scrotal edema",
        "option_d": "Prostatic infection",
        "correct_answer": "B"
      },
      {
        "number": 718,
        "question": "A 2-year-old child is recovering from surgery. Considering growth and development according to Erikson, the nurse identifies which of the following play activities as most appropriate?",
        "option_a": "Assembling a puzzle with large pieces",
        "option_b": "Being taken for a wheelchair ride",
        "option_c": "Listening to a story about the Muppets",
        "option_d": "Watching Sesame Street on television",
        "correct_answer": "A"
      },
      {
        "number": 719,
        "question": "A 30-year-old client in the third trimester of her pregnancy asks the nurse for advice about upper respiratory discomforts. She complains of nasal stuffiness and epistaxis, most noticeable on the left side. Which reply by the nurse is correct?",
        "option_a": "\u2015It sounds as though you are coming down with a bad cold. I\u2018ll ask the doctor to prescribe a decongestant for relief of symptoms.\u2016",
        "option_b": "\u2015A good vaporizer will help; avoid the cool air kind. Also, try saline nose drops, and spend less time on your left side.\u2016",
        "option_c": "\u2015These discomforts are all a result of increased blood supply; one of the pregnancy hormones, estrogen, causes them.\u2016",
        "option_d": "\u2015This is most unusual. I\u2018m sure your obstetrician will want you to see an ENT (ear, nose, throat) specialist.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 720,
        "question": "The nurse is caring for a 6-week-old girl with meningitis. To help her develop a sense of trust, the nurse should:",
        "option_a": "Give her a small soft blanket to hold",
        "option_b": "Give her good perineal care after each diaper change",
        "option_c": "Leave the door open to her room",
        "option_d": "Pick her up when she cries",
        "correct_answer": "D"
      },
      {
        "number": 721,
        "question": "Early in her ninth month of pregnancy, a client has been diagnosed as having mild preeclampsi",
        "option_a": "In counseling her about her diet, the nurse must emphasize the importance of: E. Decreasing her sodium intake F. Decreasing her fluids G. Increasing her carbohydrate intake \u201c",
        "option_b": "Determination of gross anomalies",
        "option_c": "Determination of placental location",
        "option_d": "Determination of fetal age",
        "correct_answer": "C"
      },
      {
        "number": 723,
        "question": "The nurse is caring for a 3-month-old girl with meningitis. She has a positive Kernig\u2018s sign. The nurse expects her to react to discomfort if she:",
        "option_a": "Dorsiflexes her ankle",
        "option_b": "Flexes her spine",
        "option_c": "Plantiflexes her wrist",
        "option_d": "Turns her head to the side",
        "correct_answer": "B"
      },
      {
        "number": 724,
        "question": "On the third postpartum day, a client complains of extremely tender breasts. On palpation, the nurse notes a very firm, shiny appearance to the breasts and some milk leakage. She is bottle feeding. The nurse should initially recommend to her to:",
        "option_a": "Take 2 ibuprofen (Motrin) tablets by mouth now because the baby will be returning for feeding in 20 minutes",
        "option_b": "Allow the infant to breast-feed at the next feeding time to empty the breasts",
        "option_c": "Apply ice packs to the breasts and wear a supportive, well-fitting bra",
        "option_d": "Take a warm shower and express milk from both breasts until empty",
        "correct_answer": "C"
      },
      {
        "number": 725,
        "question": "A psychiatric nurse is providing an orientation to a new staff nurse. She reminds the nurse that psychiatrists often use categories of medications and that it is important that she recall that some categories of medications have synonyms. Another name used to describe minor tranquilizers is which of the following?",
        "option_a": "Antipsychotic medications",
        "option_b": "Antidepressant medications",
        "option_c": "Antianxiety medications",
        "option_d": "Antimania medication",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 22,
    "title": "NCLEX RN Practice Series 22",
    "question_count": 33,
    "questions": [
      {
        "number": 726,
        "question": "A client is medically cleared for ECT and is tentatively scheduled for six treatments over a 2-week period. Her husband asks, \u2015Isn\u2018t that a lot?\u2016 The nurse\u2018s best response is:",
        "option_a": "\u2015Yes, that does seem like a lot.\u2016",
        "option_b": "\u2015You\u2018ll have to talk to the doctor about that. The physician knows what\u2018s best for the client.\u2016",
        "option_c": "\u2015Six to 10 treatments are common. Are you concerned about permanent effects?\u2016",
        "option_d": "\u2015Don\u2018t worry. Some clients have lots more than that.\u2016 \u201c",
        "correct_answer": "C"
      },
      {
        "number": 727,
        "question": "A client is pleased about being pregnant, yet states, \u2015It is really not the best time, but I guess it will be OK.\u2016 The nurse\u2018s assessment of this response is:",
        "option_a": "Initial maternal-infant bonding may be poor.",
        "option_b": "Client may have a poor relationship with her husband.",
        "option_c": "This response is normal in the first trimester.",
        "option_d": "This response is abnormal, to be re-evaluated at the next visit.",
        "correct_answer": "C"
      },
      {
        "number": 728,
        "question": "A client suffering from schizophrenia has been taking chlorpromazine (Thorazine) for 6 months. On one of his follow-up visits to the mental health center, the nurse reports to the physician that he has developed tardive dyskinesi",
        "option_a": "Which of the following symptoms might she have observed in the client to support this conclusion? A. High fever, tachycardia, stupor, renal failure",
        "option_b": "Lip smacking, chewing, blinking, lateral jaw movements",
        "option_c": "Photosensitivity, orthostatic hypotension, dry mouth",
        "option_d": "Constipation, blurred vision, drowsiness",
        "correct_answer": "B"
      },
      {
        "number": 729,
        "question": "A pregnant client complains of varicosities in the third trimester. Which of the following activities should she be advised to avoid? E. Sitting with legs crossed at ankles F. Wearing thromboembolic disease (TED) stockings G. Wearing support pantyhose H. Wearing knee-high stockings Answer: D Explanation: (A) Sitting with the legs crossed at the ankles does not interfere with circulation or create pressure points. (B) TED stockings will help to reduce the varicosity by supporting the vein. Stockings must be applied with legs elevated. (C) Support pantyhose help to reduce the varicosity by supporting the vein. They also provide support to the uterus and allow for better return circulation. Hose must be applied like TED stockings. (D) Knee-high stockings create constriction and pressure points that interfere with circulation in the lower extremities. QUESTION 730 The nurse is trying to help a mother understand what is happening with her son who has recently been diagnosed with paranoid schizophreni",
        "option_a": "At present, he is experiencing hallucinations and delusions of persecution and suffers from poor hygiene. The nurse can best help her understand her son\u2018s condition by which of the following statements? A. \u2015Sometimes these symptoms are caused by an overstimulation of a chemical called dopamine in the brain.\u2016",
        "option_b": "\u2015Has anyone in your family ever had schizophrenia?\u2016",
        "option_c": "\u2015If your son has a twin, he probably will eventually develop schizophrenia, too.\u2016",
        "option_d": "\u2015Some of his symptoms may be a result of his lack of a strong mother-child bonding relationship.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 731,
        "question": "A couple is experiencing difficulties conceiving a baby. The nurse explains basal body temperature (BBT) by instructing the female client to take her temperature:",
        "option_a": "Orally in the morning and at bedtime",
        "option_b": "Only one time during the day as long as it is always at the same time of day",
        "option_c": "Rectally at bedtime",
        "option_d": "As soon as she awakens, prior to any activity",
        "correct_answer": "D"
      },
      {
        "number": 732,
        "question": "A 23-year-old male client is admitted to the chemical dependency unit with a medical diagnosis of alcoholism. He reports that the last time he drank was 3 days ago, and that now he is starting to \u2015feel kind of shaky.\u2016 Based on the information given above, nursing care goals for this client will initially focus on:",
        "option_a": "Self-concept problems",
        "option_b": "Interpersonal issues",
        "option_c": "Ineffective coping skills",
        "option_d": "Physiological stabilization",
        "correct_answer": "D"
      },
      {
        "number": 733,
        "question": "Often children are monitored with pulse oximeter. The pulse oximeter measures the:",
        "option_a": "O2 content of the blood",
        "option_b": "Oxygen saturation of arterial blood",
        "option_c": "PO2",
        "option_d": "Affinity of hemoglobin for O2",
        "correct_answer": "B"
      },
      {
        "number": 734,
        "question": "The nurse writes the following nursing diagnosis for a client in acute renal failure\u2014Impaired gas exchange related to:",
        "option_a": "Decreased red blood cell production",
        "option_b": "Increased levels of vitamin D",
        "option_c": "Increased red blood cell production",
        "option_d": "Decreased production of renin",
        "correct_answer": "A"
      },
      {
        "number": 735,
        "question": "In caring at home for a child who just ingested a caustic alkali, the nurse would immediately tell the mother to:",
        "option_a": "Give vinegar, lemon juice, or orange juice",
        "option_b": "Phone the doctor",
        "option_c": "Take the child to the emergency room",
        "option_d": "Induce vomiting",
        "correct_answer": "A"
      },
      {
        "number": 736,
        "question": "A client hospitalized with a medical diagnosis of adjustment disorder versus personality disorder states, \u2015Nobody cares about the clients.\u2016 The nurse\u2018s most effective response would be:",
        "option_a": "\u2015How can you say that I don\u2018t care? We just met.\u2016",
        "option_b": "\u2015What makes you think the nurses don\u2018t care?\u2016",
        "option_c": "\u2015You will feel differently about us in a few days.\u2016",
        "option_d": "\u2015You seem angry. Tell me more about how you feel.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 737,
        "question": "A 6-month-old infant who was diagnosed at 4 weeks of age with a ventricular septal defect, was admitted today with a diagnosis of failure to thrive. His mother stated that he had not been eating well for the past month. A cardiac catheterization reveals congestive heart failure. All of the following nursing diagnoses are appropriate. Which nursing diagnosis should have priority? \u201c",
        "option_a": "Altered nutrition: less than body requirements related to inability to take in adequate calories",
        "option_b": "Altered growth and development related to decreased intake of food",
        "option_c": "Activity intolerance related to imbalance between oxygen supply and demand",
        "option_d": "Decreased cardiac output related to ineffective pumping action of the heart",
        "correct_answer": "D"
      },
      {
        "number": 738,
        "question": "One of the most reliable assessment tools for adequacy of fluid resuscitation in burned children is:",
        "option_a": "Blood pressure",
        "option_b": "Level of consciousness",
        "option_c": "Skin turgor",
        "option_d": "Fluid intake",
        "correct_answer": "B"
      },
      {
        "number": 739,
        "question": "A 35-year-old client is receiving psychopharmacological treatment of his major depression with tranylcypromine sulfate (Parnate), a monoamine oxidase (MAO) inhibitor. The nurse teaches the client that while he is taking this type of antidepressant, he needs to restrict his dietary intake of:",
        "option_a": "Potassium-rich foods",
        "option_b": "Tryptophan",
        "option_c": "Tyramine",
        "option_d": "Saturated fats",
        "correct_answer": "C"
      },
      {
        "number": 740,
        "question": "A 19-month-old child is admitted to the hospital for surgical repair of patent ductus arteriosus. The child is being given digoxin. Prior to administering the medication, the nurse should:",
        "option_a": "Not give the digoxin if the pulse is_60",
        "option_b": "Not give the digoxin if the pulse is_100",
        "option_c": "Take the apical pulse for a full minute",
        "option_d": "Monitor for visual disturbances, a side effect of digoxin",
        "correct_answer": "C"
      },
      {
        "number": 741,
        "question": "Two hours after the second injection of haloperidol, a client complains to the nurse of a stiff neck and inability to sit still. He is experiencing symptoms consistent with:",
        "option_a": "Parkinsonism and dystonia",
        "option_b": "Dystonia and akathisia",
        "option_c": "Akathisia and parkinsonism",
        "option_d": "Neuroleptic malignant syndrome",
        "correct_answer": "B"
      },
      {
        "number": 742,
        "question": "Three hours postoperatively, a 27-year-old client complains of right leg pain after knee reduction. The first action by the nurse will be to:",
        "option_a": "Assess vital signs",
        "option_b": "Elevate the extremity",
        "option_c": "Perform a lower extremity neurovascular check",
        "option_d": "Remind the client that he has a client-controlled analgesic pump, and reinstruct him on its use",
        "correct_answer": "C"
      },
      {
        "number": 743,
        "question": "A 4-year-old boy is brought to the emergency room with bruises on his head, face, arms, and legs. His mother states that he fell down some steps. The nurse suspects that he may have been physically abused. In accordance with the law, the nurse must:",
        "option_a": "Tell the physician her concerns",
        "option_b": "Report her suspicions to the authorities",
        "option_c": "Talk to the child\u2018s father",
        "option_d": "Confront the child\u2018s mother",
        "correct_answer": "B"
      },
      {
        "number": 744,
        "question": "Parents of a child with rheumatic fever express concern that she will always be arthritic. The nurse discusses their concerns and tells them the joint pain usually:",
        "option_a": "Subsides in<3 weeks",
        "option_b": "Is relieved by aspirin",
        "option_c": "Is responsive to ibuprofen (Motrin)",
        "option_d": "Subsides in 3\u20136 days",
        "correct_answer": "A"
      },
      {
        "number": 745,
        "question": "A child is admitted with severe headache, fever, vomiting, photophobia, drowsiness, and stiff neck associated with viral meningitis. She will be more comfortable if the nurse:",
        "option_a": "Dims the lights in her room",
        "option_b": "Encourages her to breathe slowly and deeply",
        "option_c": "Offers sips of warm liquids",
        "option_d": "Places a large, soft pillow under her head \u201c",
        "correct_answer": "A"
      },
      {
        "number": 746,
        "question": "Which stage of labor lasts from delivery of the baby to delivery of the placenta?",
        "option_a": "Second",
        "option_b": "Third",
        "option_c": "Fourth",
        "option_d": "Fifth",
        "correct_answer": "B"
      },
      {
        "number": 747,
        "question": "A 3-year-old female client is brought into the pediatric clinic because she limps. She has not been to the clinic since she was 9 months old. The nurse practitioner describes the limp as a \u2015Trendelenburg gait.\u2016 This gait is characteristic of:",
        "option_a": "Scoliosis",
        "option_b": "Dislocated hip",
        "option_c": "Fractured femur",
        "option_d": "Fractured pelvis",
        "correct_answer": "B"
      },
      {
        "number": 748,
        "question": "A 16-year-old diabetic girl has been selected as a cheerleader at her school. She asks the nurse whether she should increase her insulin when she is planning to attend cheerleading practice sessions lasting from 8 to 11 AM. The most appropriate answer would be:",
        "option_a": "\u2015You should ask your doctor about this.\u2016",
        "option_b": "\u2015Yes, increase your insulin by 1 U for each hour of practice because exercise causes the body to need more insulin.\u2016 \u201c",
        "option_c": "\u2015No, do not increase your insulin. Exercise will not affect your insulin needs.\u2016",
        "option_d": "\u2015No, do not increase your insulin, but eating a snack prior to practice exercise will make insulin more effective and move more glucose into the cells.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 749,
        "question": "A 14-year-old teenager is hospitalized for anorexia nervos",
        "option_a": "She is admitted to the adolescent mental health unit and placed on a behavior modification program. Nursing interventions for the teenager will most likely include: A. Establishing routine tasks and activities around mealtimes",
        "option_b": "Administering medications such as lithium",
        "option_c": "Requiring the client to eat more during meals",
        "option_d": "Checking the client\u2018s room frequently",
        "correct_answer": "A"
      },
      {
        "number": 750,
        "question": "A 47-year-old male client is admitted for colon surgery. Intravenous antibiotics are begun 2 hours prior to surgery. He has no known infection. The rationale for giving antibiotics prior to surgery is to:",
        "option_a": "Provide cathartic action within the colon",
        "option_b": "Reduce the risk of wound infection from anaerobic bacteria",
        "option_c": "Relieve the client\u2018s concern regarding possible infection",
        "option_d": "Reduce the risk of intraoperative fever",
        "correct_answer": "B"
      },
      {
        "number": 751,
        "question": "A 23-year-old female client is brought to the emergency room by her roommate for repeatedly making superficial cuts on her wrists and experiencing wide mood swings. She is very angry and hostile. Her medical diagnosis is adjustment disorder versus borderline personality disorder. The client comments to the nurse, \u2015Nobody in here seems to really care about the clients. I thought nurses cared about people!\u2016 The client is exhibiting the ego defense mechanism:",
        "option_a": "Reaction formation",
        "option_b": "Rationalization",
        "option_c": "Splitting",
        "option_d": "Sublimation",
        "correct_answer": "C"
      },
      {
        "number": 752,
        "question": "A 38-year-old female client with a history of chronic schizophrenia, paranoid type, is currently an outpatient at the local mental health and mental retardation clinic. The client comes in once a week for medication evaluation and/or refills. She self-administers haloperidol 5 mg twice a day and benztropine 1 mg once a day. During a recent clinic visit, she says to the nurse, \u2015I can\u2018t stay still at night. I toss and turn and can\u2018t fall asleep.\u2016 The nurse suspects that she may be experiencing:",
        "option_a": "Akathisia",
        "option_b": "Akinesia",
        "option_c": "Dystonia",
        "option_d": "Opisthotonos",
        "correct_answer": "A"
      },
      {
        "number": 753,
        "question": "Which of the following nursing orders has the highest priority for a child with epiglottitis? \u201c",
        "option_a": "Vital signs every shift",
        "option_b": "Tracheostomy set at bedside",
        "option_c": "Intake and output",
        "option_d": "Specific gravity every shift",
        "correct_answer": "B"
      },
      {
        "number": 754,
        "question": "Four days after admission for cirrhosis of the liver, the nurse observes the following when assessing a male client: increased irritability, asterixis, and changes in his speech pattern. Which of the following foods would be appropriate for his bedtime snack?",
        "option_a": "Fresh fruit",
        "option_b": "A milkshake",
        "option_c": "Saltine crackers and peanut butter",
        "option_d": "A ham and cheese sandwich",
        "correct_answer": "A"
      },
      {
        "number": 755,
        "question": "Four days after admission for cirrhosis of the liver, the nurse observes the following when assessing a male client: increased irritability, asterixis, and changes in his speech pattern. Which of the following foods would be appropriate for his bedtime snack?",
        "option_a": "Fresh fruit",
        "option_b": "A milkshake",
        "option_c": "Saltine crackers and peanut butter",
        "option_d": "A ham and cheese sandwich",
        "correct_answer": "B"
      },
      {
        "number": 756,
        "question": "Which of the following physician\u2018s orders would the nurse question on a client with chronic arterial insufficiency?",
        "option_a": "Neurovascular checks every 2 hours",
        "option_b": "Elevate legs on pillows",
        "option_c": "Arteriogram in the morning",
        "option_d": "No smoking",
        "correct_answer": "B"
      },
      {
        "number": 757,
        "question": "In planning daily care for a client with multiple sclerosis, the nurse would take into consideration that multiple sclerosis:",
        "option_a": "Becomes progressively debilitating without remission",
        "option_b": "Has unpredictable remissions and exacerbations",
        "option_c": "Is rapidly fatal",
        "option_d": "Responds quickly to antimicrobial therapy",
        "correct_answer": "B"
      },
      {
        "number": 758,
        "question": "The nurse assesses a postoperative mastectomy client and notes that breath sounds are diminished in both posterior bases. The nurse\u2018s action should be to:",
        "option_a": "Encourage coughing and deep breathing each hour",
        "option_b": "Obtain arterial blood gases",
        "option_c": "Increase O2 from 2\u20133 L/min",
        "option_d": "Remove the postoperative dressing to check for bleeding",
        "correct_answer": "A"
      },
      {
        "number": 759,
        "question": "A 6-year-old child returned to the surgical floor 20 hours ago after an appendectomy for a gangrenous appendix. His mother tells the nurse that he is becoming more restless and is anxious. Assessment findings indicate that the child has atelectasis. Appropriate nursing actions would include:",
        "option_a": "Allowing the child to remain in the position of comfort, preferably semi-or high-Fowler position",
        "option_b": "Administering analgesics as ordered",
        "option_c": "Having the child turn, cough, and deep breathe every 1\u20132 hours",
        "option_d": "Remaining with the child and keeping as calm and quiet as possible",
        "correct_answer": "C"
      }
    ]
  },
  {
    "series_number": 23,
    "title": "NCLEX RN Practice Series 23",
    "question_count": 33,
    "questions": [
      {
        "number": 760,
        "question": "Prior to his discharge from the hospital, a cardiac client is started on digoxin (Lanoxin) 25 mg po qd. The nurse initiates discharge teaching. Which of the following statements by the client would validate an understanding of his medication?",
        "option_a": "\u2015I would notify my physician immediately if I experience nausea, vomiting, and double vision.\u2016",
        "option_b": "\u2015I could stop taking this medication when I begin to feel better.\u2016",
        "option_c": "\u2015I should only take the medication if my heart rate is greater than 100 bpm.\u2016",
        "option_d": "\u2015I should always take this medication with an antacid.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 761,
        "question": "Cystic fibrosis is transmitted as an autosomal recessive trait. This means that:",
        "option_a": "Mothers carry the gene and pass it to their sons",
        "option_b": "Fathers carry the gene and pass it to their daughters \u201c",
        "option_c": "Both parents must have the disease for a child to have the disease",
        "option_d": "Both parents must be carriers for a child to have the disease",
        "correct_answer": "D"
      },
      {
        "number": 762,
        "question": "On the third postpartum day, the nurse would expect the lochia to be:",
        "option_a": "Rubra",
        "option_b": "Serosa",
        "option_c": "Alba",
        "option_d": "Scant",
        "correct_answer": "A"
      },
      {
        "number": 763,
        "question": "The mother of a preschooler reports to the nurse that he frequently tells lies. The admission assessment of the child indicates possible child abuse. The nurse knows that his:",
        "option_a": "Behavior is not normal, and a child psychiatrist should be consulted.",
        "option_b": "Mother is lying to protect herself.",
        "option_c": "Lying is normal behavior for a preschool child who is learning to separate fantasy from reality.",
        "option_d": "Behavior indicates a developmental delay, because preschoolers should be able to tell right from wrong.",
        "correct_answer": "C"
      },
      {
        "number": 764,
        "question": "The initial focus when providing nursing care for a child with rheumatic fever during the acute phase of the illness should be to:",
        "option_a": "Maintain contact with her parents",
        "option_b": "Provide for physical and psychological rest",
        "option_c": "Provide a nutritious diet \u201c",
        "option_d": "Maintain her interest in school",
        "correct_answer": "B"
      },
      {
        "number": 765,
        "question": "A 30-year-old client has been admitted to the psychiatric service with the diagnosis of schizophreni",
        "option_a": "He tells the nurse that when the woman he had been dating broke up with him, the CIA had replaced her with an identical twin. The client is experiencing: A. Grandiose delusions",
        "option_b": "Paranoid delusions",
        "option_c": "Auditory hallucinations",
        "option_d": "Visual hallucinations",
        "correct_answer": "B"
      },
      {
        "number": 766,
        "question": "The mother of a client is apprehensive about taking home her 2 year old who was diagnosed with asthma after being admitted to the emergency room with difficulty breathing and cyanosis. She asks the nurse what symptoms she should look for so that this problem will not happen again. The nurse instructs her to watch for the following early symptoms:",
        "option_a": "Fever, runny nose, and hyperactivity",
        "option_b": "Changes in breathing pattern, moodiness, fatigue, and edema of eyes",
        "option_c": "Fatigue, dark circles under the eyes, changes in breathing pattern, glassy eyes, and moodiness",
        "option_d": "Fever, cough, paleness, and wheezing",
        "correct_answer": "C"
      },
      {
        "number": 767,
        "question": "During the active phase of rheumatic fever, the nurse teaches parents of a child with acute rheumatic fever to assist in minimizing joint pain and promoting healing by:",
        "option_a": "Putting all joints through full range-of-motion twice daily \u201c",
        "option_b": "Massaging the joints briskly with lotion or liniment after bath",
        "option_c": "Immobilizing the joints in functional position using splints, rolls, and pillows",
        "option_d": "Applying warm water bottle or heating pads over involved joints",
        "correct_answer": "C"
      },
      {
        "number": 768,
        "question": "To prevent transmission of bacterial meningitis, the nurse would instruct an infected baby\u2018s mother to:",
        "option_a": "Avoid touching the baby while in the room.",
        "option_b": "Stay outside of the baby\u2018s room.",
        "option_c": "Wear a gown and gloves and wash her hands before and after leaving the room.",
        "option_d": "Wear a mask while in the room.",
        "correct_answer": "C"
      },
      {
        "number": 769,
        "question": "A female client is started on warfarin (Coumadin) 5 mg po bid. To adequately evaluate the effectiveness of the warfarin therapy, the nurse must know that this medication:",
        "option_a": "Dissolves any clots already formed in the arteries",
        "option_b": "Prevents the conversion of prothrombin to thrombin",
        "option_c": "Interferes with the synthesis of vitamin K-dependent clotting factors",
        "option_d": "Stimulates the manufacturing of platelets",
        "correct_answer": "C"
      },
      {
        "number": 770,
        "question": "A psychiatric client has been stabilized and is to be discharged. The nurse will recognize client insight and behavioral change by which of the following client statements?",
        "option_a": "\u2015When I get home, I will need to take my medicines and call my therapist if I have any side effects or begin to hear voices.\u2016 \u201c",
        "option_b": "\u2015If I have any side effects from my medicines, I will take an extra dose of Cogentin.\u2016",
        "option_c": "\u2015When I get home, I should be able to taper myself off the Haldol because the voices are gone now.\u2016",
        "option_d": "\u2015As soon as I leave here, I\u2018m throwing away my medicines. I never thought I needed them anyway.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 771,
        "question": "A 44-year-old client had an emergency cholecystectomy 3 days ago for a ruptured gallbladder. She complains of severe abdominal pain. Assessment reveals abdominal rigidity and distention, increased temperature, and tachycardi",
        "option_a": "Diagnostic testing reveals an elevated WBC count. The nurse suspects that the client has developed: A. Gastritis",
        "option_b": "Evisceration",
        "option_c": "Peritonitis",
        "option_d": "Pulmonary embolism",
        "correct_answer": "C"
      },
      {
        "number": 772,
        "question": "A client is to be discharged from the hospital and is to continue taking warfarin 2.5 mg po bid. Which of the following should be included in her discharge teaching concerning the warfarin therapy?",
        "option_a": "\u2015If you forget to take your morning dose, double the night time dose.\u2016",
        "option_b": "\u2015You should take aspirin instead of acetaminophen (Tylenol) for headaches.\u2016",
        "option_c": "\u2015Carry a medications alert card with you at all times.\u2016",
        "option_d": "\u2015You should use a straight-edge razor when shaving your arms and legs.\u2016",
        "correct_answer": "C"
      },
      {
        "number": 773,
        "question": "A client tells the nurse that he has been hearing voices that tell him to kill his girlfriend because she is a spy. He further states that he is having difficulty not obeying the voices because, if he does not, his house will be burned down. The highest priority nursing diagnosis for him at this time is:",
        "option_a": "Sensory-perceptual alteration: auditory command hallucinations",
        "option_b": "Alteration in thought processes: paranoid delusions",
        "option_c": "Potential for violence directed at others",
        "option_d": "Impaired verbal communication: loose associations",
        "correct_answer": "C"
      },
      {
        "number": 774,
        "question": "The physician orders medication for a client\u2018s unpleasant side effects from the haloperidol. The most appropriate drug at this time is:",
        "option_a": "Lorazepam",
        "option_b": "Triazolam (Halcion)",
        "option_c": "Benztropine",
        "option_d": "Thiothixene",
        "correct_answer": "C"
      },
      {
        "number": 775,
        "question": "The nurse is admitting a client with folic acid deficiency anemi",
        "option_a": "Which of the following questions is most important for the nurse to ask the client? A. \u2015Do you take aspirin on a regular basis?\u2016",
        "option_b": "\u2015Do you drink alcohol on a regular basis?\u2016",
        "option_c": "\u2015Do you eat red meat?\u2016",
        "option_d": "\u2015Have your stools been normal?\u2016 \u201c",
        "correct_answer": "B"
      },
      {
        "number": 776,
        "question": "Forty-eight hours after a thyroidectomy, a female client complains of numbness and tingling of the toes and fingers. The nurse notes upper arm and facial twitching. The nurse needs to:",
        "option_a": "Report the findings to the physician",
        "option_b": "Assist the client to do range of motion exercises",
        "option_c": "Check the client\u2018s potassium level",
        "option_d": "Administer the as-needed dose of phenytoin (Dilantin)",
        "correct_answer": "A"
      },
      {
        "number": 777,
        "question": "Parents should be taught not to prop the bottle when feeding their infants. In addition to the risk of choking, it puts the infant at risk for:",
        "option_a": "Otitis media",
        "option_b": "Asthma",
        "option_c": "Conjunctivitis",
        "option_d": "Tonsillitis",
        "correct_answer": "A"
      },
      {
        "number": 778,
        "question": "A pregnant client is having a nonstress test (NST). It is noted that the fetal heart beat rises 20 bpm, lasting 20 seconds, every time the fetus moves. The nurse explains that:",
        "option_a": "The test is inconclusive and should be repeated",
        "option_b": "Further testing is needed",
        "option_c": "The test is normal and the fetus is reacting appropriately",
        "option_d": "The fetus is distressed \u201c",
        "correct_answer": "C"
      },
      {
        "number": 779,
        "question": "The nurse is teaching a client how to perform monthly testicular self-examination (TSE) and states that it is best to perform the procedure right after showering. This statement is made by the nurse based on the knowledge that:",
        "option_a": "The client is more likely to remember to perform the TSE when in the nude",
        "option_b": "When the scrotum is exposed to cool temperatures, the testicles become large and bulky",
        "option_c": "The scrotum will be softer and more relaxed after a warm shower, making the testicles easier to palpate",
        "option_d": "The examination will be less painful at this time",
        "correct_answer": "C"
      },
      {
        "number": 780,
        "question": "When assessing a client, the nurse notes the typical skin rash seen with systemic lupus erythematosus. Which of the following descriptions correctly describes this rash?",
        "option_a": "Small round or oval reddish brown macules scattered over the entire body",
        "option_b": "Scattered clusters of macules, papules, and vesicles over the body",
        "option_c": "Bright red appearance of the palmar surface of the hands",
        "option_d": "Reddened butterfly shaped rash over the cheeks and nose",
        "correct_answer": "D"
      },
      {
        "number": 781,
        "question": "The nurse is interviewing a client with a diagnosis of possible abdominal aortic aneurysm. Which of the following statements will be reflected in the client\u2018s chief complaint?",
        "option_a": "\u2015I\u2018ve been having a dull pain at the upper left shoulder.\u2016",
        "option_b": "\u2015My legs have been numb for three months.\u2016 \u201c",
        "option_c": "\u2015I\u2018ve only been urinating three times a day lately.\u2016",
        "option_d": "\u2015I don\u2018t remember anything in particular, I just haven\u2018t felt well.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 782,
        "question": "Which of the following nursing care goals has the highest priority for a child with epiglottitis?",
        "option_a": "Sleep or lie quietly 10 hr/day.",
        "option_b": "Consume foods from all four food groups.",
        "option_c": "Be afebrile throughout her hospital stay.",
        "option_d": "Participate in play activities 4 hr/day.",
        "correct_answer": "A"
      },
      {
        "number": 783,
        "question": "The nurse notes multiple bruises on the arms and legs of a newly admitted client with lupus. The client states, \u2015I get them whenever I bump into anything.\u2016 The nurse would expect to note a decrease in which of the following laboratory tests?",
        "option_a": "Number of platelets",
        "option_b": "WBC count",
        "option_c": "Hemoglobin level",
        "option_d": "Number of lymphocytes",
        "correct_answer": "A"
      },
      {
        "number": 784,
        "question": "When preparing insulin for IV administration, the nurse identifies which kind of insulin to use?",
        "option_a": "NPH \u201c",
        "option_b": "Human or pork",
        "option_c": "Regular",
        "option_d": "Long acting",
        "correct_answer": "C"
      },
      {
        "number": 785,
        "question": "A client is having episodes of hyperventilation related to her surgery that is scheduled tomorrow. Appropriate nursing actions to help control hyperventilating include:",
        "option_a": "Administering diazepam (Valium) 10\u201315 mg po q4h and q1h prn for hyperventilating episode",
        "option_b": "Keeping the temperature in the client\u2018s room at a high level to reduce respiratory stimulation",
        "option_c": "Having the client hold her breath or breathe into a paper bag when hyperventilation episodes occur",
        "option_d": "Using distraction to help control the client\u2018s hyperventilation episodes",
        "correct_answer": "C"
      },
      {
        "number": 786,
        "question": "Which of the following lab data is representative of a client with aplastic anemia?",
        "option_a": "Hemoglobin 9.2, hematocrit 27, red blood cells 3.2 million",
        "option_b": "White blood cells 4000, erythrocytes 2.5 million, thrombocytes 100,000",
        "option_c": "White blood cells 3000, hematocrit 27, red blood cells 2.8 million",
        "option_d": "Red blood cells 1 million, white blood cells 1500, thrombocytes 16,000",
        "correct_answer": "D"
      },
      {
        "number": 787,
        "question": "The physician orders haloperidol 5 mg IM stat for a client and tells the nurse that the dose can be repeated in 1\u2013 2 hours if needed. The most likely rationale for this order is:",
        "option_a": "The client will settle down more quickly if he thinks the staff is medicating him",
        "option_b": "The medication will sedate the client until the physician arrives \u201c",
        "option_c": "Haloperidol is a minor tranquilizer and will not oversedate the client",
        "option_d": "Rapid neuroleptization is the most effective approach to care for the violent or potentially violent client",
        "correct_answer": "D"
      },
      {
        "number": 788,
        "question": "During the assessment, the nurse observes a client scratching his skin. He has been admitted to rule out Laennec\u2018s cirrhosis of the liver. The nurse knows the pruritus is directly related to:",
        "option_a": "A loss of phagocytic activity",
        "option_b": "Faulty processing of bilirubin",
        "option_c": "Enhanced detoxification of drugs",
        "option_d": "The formation of collateral circulation",
        "correct_answer": "B"
      },
      {
        "number": 789,
        "question": "Nursing assessment of early evidence of septic shock in children at risk includes:",
        "option_a": "Fever, tachycardia, and tachypnea",
        "option_b": "Respiratory distress, cold skin, and pale extremities",
        "option_c": "Elevated blood pressure, hyperventilation, and thready pulses",
        "option_d": "Normal pulses, hypotension, and oliguria",
        "correct_answer": "A"
      },
      {
        "number": 790,
        "question": "When assessing a female child for Turner\u2018s syndrome, the nurse observes for which of the following symptoms?",
        "option_a": "Tall stature",
        "option_b": "Amenorrhea \u201c",
        "option_c": "Secondary sex characteristics",
        "option_d": "Gynecomastia",
        "correct_answer": "B"
      },
      {
        "number": 791,
        "question": "A 2-year-old toddler is hospitalized with epiglottitis. In assessing the toddler, the nurse would expect to find:",
        "option_a": "A productive cough",
        "option_b": "Expiratory stridor",
        "option_c": "Drooling",
        "option_d": "Crackles in the lower lobes",
        "correct_answer": "C"
      },
      {
        "number": 792,
        "question": "A client is receiving IV morphine 2 days after colorectal surgery. Which of the following observations indicate that he may be becoming drug dependent?",
        "option_a": "The client requests pain medicine every 4 hours.",
        "option_b": "He is asleep 30 minutes after receiving the IV morphine.",
        "option_c": "He asks for pain medication although his blood pressure and pulse rate are normal.",
        "option_d": "He is euphoric for about an hour after each injection.",
        "correct_answer": "D"
      }
    ]
  },
  {
    "series_number": 24,
    "title": "NCLEX RN Practice Series 24",
    "question_count": 33,
    "questions": [
      {
        "number": 793,
        "question": "The nurse is teaching a child\u2018s parents how to protect the child from lead poisoning. The nurse knows that a common source of lead poisoning in children is:",
        "option_a": "Dandelion leaves",
        "option_b": "Pencils",
        "option_c": "Old paint",
        "option_d": "Stuffing from toy animals \u201c",
        "correct_answer": "C"
      },
      {
        "number": 794,
        "question": "A family by court order undergoes treatment by a family therapist for child abuse. The nurse, who is the child\u2018s case manager knows that treatment has been effective when:",
        "option_a": "The child is removed from the home and placed in foster care",
        "option_b": "The child\u2018s parents identify the ways in which he is different from the rest of the family",
        "option_c": "The child\u2018s father is arrested for child abuse",
        "option_d": "The child\u2018s parents can identify appropriate behaviors for children in his age group",
        "correct_answer": "D"
      },
      {
        "number": 795,
        "question": "A 4 year old has an imaginary playmate, which concerns the mother. The nurse\u2018s best response would be:",
        "option_a": "\u2015I understand your concern and will assist you with a referral.\u2016",
        "option_b": "\u2015Try not to worry because you will just upset your child.\u2016",
        "option_c": "\u2015Just ignore the behavior and it should disappear by age 8.\u2016",
        "option_d": "\u2015This is appropriate behavior for a preschooler and should not be a concern.\u2016",
        "correct_answer": "D"
      },
      {
        "number": 796,
        "question": "A 9-week-old female infant has a diagnosis of bilateral cleft lip and cleft palate. She has been admitted to the pediatric unit after surgical repair of the cleft lip. Which of the following nursing interventions would be appropriate during the first 24 hours?",
        "option_a": "Position on side or abdomen.",
        "option_b": "Maintain elbow restraints in place unless she is being directly supervised.",
        "option_c": "Clean suture line every shift. \u201c",
        "option_d": "Offer pacifier when she cries.",
        "correct_answer": "B"
      },
      {
        "number": 797,
        "question": "In discussing the plan of care for a child with chronic nephrosis with the mother, the nurse identifies that the purpose of weighing the child is to:",
        "option_a": "Measure adequacy of nutritional management",
        "option_b": "Check the accuracy of the fluid intake record",
        "option_c": "Impress the child with the importance of eating well",
        "option_d": "Determine changes in the amount of edema",
        "correct_answer": "D"
      },
      {
        "number": 798,
        "question": "A client had a cardiac catheterization with angiography and thrombolytic therapy with streptokinase. The nurse should initiate which of the following interventions immediately after he returns to his room?",
        "option_a": "Place him on NPO restriction for 4 hours.",
        "option_b": "Monitor the catheterization site every 15 minutes.",
        "option_c": "Place him in a high Fowler position.",
        "option_d": "Ambulate him to the bathroom to void.",
        "correct_answer": "B"
      },
      {
        "number": 799,
        "question": "A child has a nursing diagnosis of fluid volume excess related to compromised regulatory mechanisms. Which of the following nursing interventions is the most accurate measure to include in his care?",
        "option_a": "Weigh the child twice daily on the same scale.",
        "option_b": "Monitor intake and output.",
        "option_c": "Check urine specific gravity of each voiding. \u201c",
        "option_d": "Observe for edem A.",
        "correct_answer": "A"
      },
      {
        "number": 800,
        "question": "Loss of appetite for a child with leukemia is a major recurrent problem. The plan of care should be designed to: E. Reinforce attempts to eat F. Help the child gain weight G. Increase his appetite H. Make mealtimes pleasant Answer: A Explanation: (A) Ignoring refusals to eat and rewarding eating attempts are the most successful means of increasing intake. (B) This goal is not specific enough or related to the loss of appetite. (C) This goal is not possible at this time based on his illness. (D) This goal is helpful, but alone will not address his loss of appetite. QUESTION 801 A client develops complications following a hysterectomy. Blood cultures reveal Pseudomonas aeruginos",
        "option_a": "The nurse expects that the physician would order an appropriate antibiotic to treat P. aeruginosa such as: A. Cefoperazone (Cefobid)",
        "option_b": "Clindamycin (Cleocin)",
        "option_c": "Dicloxacillin (Dycill)",
        "option_d": "Erythromycin (Erythrocin)",
        "correct_answer": "A"
      },
      {
        "number": 802,
        "question": "A 45-year-old client diagnosed with major depression is scheduled for electroconvulsive therapy (ECT) in the morning. Which of the following medications are routinely administered either before or during ECT?",
        "option_a": "Thioridazine (Mellaril), lithium, and benztropine",
        "option_b": "Atropine, sodium brevitol, and succinylcholine chloride (Anectine) \u201c",
        "option_c": "Sodium, potassium, and magnesium",
        "option_d": "Carbamazepine (Tegretol), haloperidol, and trihexyphenidyl (Artane)",
        "correct_answer": "B"
      },
      {
        "number": 803,
        "question": "A 25-year-old client is admitted for a tonsillectomy. She tells the nurse that she has had episodes of muscle cramps, weakness, and unexplained temperature elevation. Many years ago her father died shortly after surgery after developing a high fever. She further tells the nurse that her surgeon is having her take dantrolene sodium (Dantrium) prophylactically prior to her tonsillectomy. Dantrolene sodium is ordered preoperatively to reduce the risk or prevent:",
        "option_a": "Infection postoperatively",
        "option_b": "Malignant hyperthermia",
        "option_c": "Neuroleptic malignant syndrome",
        "option_d": "Fever postoperatively",
        "correct_answer": "B"
      },
      {
        "number": 804,
        "question": "A 3-year-old child is in the burn unit following a home accident. The first sign of sepsis in burned children is:",
        "option_a": "Disorientation",
        "option_b": "Low-grade fever",
        "option_c": "Diarrhea",
        "option_d": "Hypertension",
        "correct_answer": "A"
      },
      {
        "number": 805,
        "question": "The parents of a 9-year-old child with acute lymphocytic leukemia expressed concern about his alopecia from \u201c",
        "option_a": "Alopecia is an unavoidable side effect.",
        "option_b": "There are several wig makers for children.",
        "option_c": "Most children select a favorite hat to protect their heads.",
        "option_d": "His hair will grow back in a few months.",
        "correct_answer": "D"
      },
      {
        "number": 806,
        "question": "The family member of a child scheduled for heart surgery states, \u2015I just don\u2018t understand this open-heart or closed-heart business. I\u2018m so confused! Can you help me understand it?\u2016 The nurse explains that patent ductus arteriosus repair is:",
        "option_a": "Open-heart surgery. The child will be placed on a heart-lung machine while the surgery is being performed.",
        "option_b": "Closed-heart surgery. It does not require that the child be placed on the heart-lung machine while the surgery is being performed.",
        "option_c": "A pediatric version of the coronary artery bypass graft surgery performed on adults. It is an open-heart surgery.",
        "option_d": "A pediatric version of percutaneous transluminal coronary angioplasty performed on adults. It is a closedheart surgery.",
        "correct_answer": "B"
      },
      {
        "number": 807,
        "question": "A child with celiac disease is being discharged from the hospital. The mother demonstrates knowledge of nutritional needs of her child when she is able to state the foods which are included in a:",
        "option_a": "Lactose-restricted diet",
        "option_b": "Gluten-restricted diet",
        "option_c": "Phenylalanine-restricted diet",
        "option_d": "Fat-restricted diet",
        "correct_answer": "B"
      },
      {
        "number": 808,
        "question": "The pediatric nurse charts that the parents of a 4-yearold child are very anxious. Which observation would indicate to the nurse unhealthy coping by these parents:",
        "option_a": "Discussing their needs with the nursing staff",
        "option_b": "Discussing their needs with other family members",
        "option_c": "Seeking support from their minister",
        "option_d": "Refusing to participate in the child\u2018s care",
        "correct_answer": "D"
      },
      {
        "number": 809,
        "question": "A client with a head injury asks why he cannot have something for his headache. The nurse\u2018s response is based on the understanding that analgesics could:",
        "option_a": "Counteract the effects of antibiotics",
        "option_b": "Elevate the blood pressure",
        "option_c": "Mask symptoms of increasing intracranial pressure",
        "option_d": "Stimulate the central nervous system",
        "correct_answer": "C"
      },
      {
        "number": 810,
        "question": "Which of the following findings would necessitate discontinuing an IV potassium infusion in an adult with ketoacidosis?",
        "option_a": "Urine output 22 mL/hr for 2 hours",
        "option_b": "Serum potassium level of 3.7",
        "option_c": "Small T wave of ECG",
        "option_d": "Serum glucose level of 180",
        "correct_answer": "A"
      },
      {
        "number": 811,
        "question": "A male client is considering having laser abdominal surgery and asks the nurse if there is any advantage in having this type of surgery? The nurse will respond based on the knowledge that laser surgery:",
        "option_a": "Has a smaller postoperative infection rate than routine surgery",
        "option_b": "Will eliminate the need for preoperative sedation",
        "option_c": "Will result in less operating time",
        "option_d": "Generally eliminates problems with complications Explanation: (A) A lower postoperative infection has been documented as a result of laser therapy versus routine surgery. (B) Clients will still need preoperative sedation to facilitate anxiety reduction. (C) Operating time may actually increase in some laser surgeries. (D) The client must still be observed for postoperative complications. QUESTION 812 The physician decides to prescribe both a short-acting insulin and an intermediate-acting insulin for a newly diagnosed 8-year-old diabetic client. An example of a short-acting insulin is: A. Novolin Regular B. Humulin NPH C. Lente Beef D. Protamine zinc insulin",
        "correct_answer": "A"
      },
      {
        "number": 813,
        "question": "A male client is scheduled to have angiography of his left leg. The nurse needs to include which of the following when preparing the client for this procedure?",
        "option_a": "Validate that he is not allergic to iodine or shellfish.",
        "option_b": "Instruct him to start active range of motion of his left leg immediately following the procedure.",
        "option_c": "Inform him that he will not be able to eat or drink anything for 4 hours after the procedure.",
        "option_d": "Inform him that vital signs will be taken every hour for 4 hours after the procedure.",
        "correct_answer": "A"
      },
      {
        "number": 814,
        "question": "The nurse will be alert to the most potentially lifethreatening side effect associated with the administration of monoamine oxidase (MAO) inhibitor. This is:",
        "option_a": "Oculogyric crisis",
        "option_b": "Hypertensive crisis",
        "option_c": "Orthostatic hypotension",
        "option_d": "Tardive dyskinesia",
        "correct_answer": "B"
      },
      {
        "number": 815,
        "question": "A client reports to the nurse that the voices are practically nonstop and that he needs to leave the hospital immediately to find his girlfriend and kill her. The best verbal response to the client by the nurse at this time is:",
        "option_a": "\u2015I understand that the voices are real to you, but I want you to know I don\u2018t hear them. They are a symptom of your illness.\u2016",
        "option_b": "\u2015Just don\u2018t pay attention to the voices. They\u2018ll go away after some medication.\u2016",
        "option_c": "\u2015You can\u2018t leave here. This unit is locked and the doctor has not ordered your discharge.\u2016",
        "option_d": "\u2015We will have to put you in seclusion and restraints for a while. You could hurt someone with thoughts like that.\u2016",
        "correct_answer": "A"
      },
      {
        "number": 816,
        "question": "Discharge teaching for the client who has a total gastrectomy should include which of the following?",
        "option_a": "Need for the client to increase fluid intake to 3000 mL/day",
        "option_b": "Follow-up visits every 3 weeks for the first 6 months",
        "option_c": "B12 injections needed for the rest of the client\u2018s life \u201c",
        "option_d": "Need to eat three full meals with plenty of fiber per day",
        "correct_answer": "C"
      },
      {
        "number": 817,
        "question": "The nurse is collecting a nutritional history on a 28- year-old female client with iron-deficiency anemia and learns that the client likes to eat white chalk. When implementing a teaching plan, the nurse should explain that this practice:",
        "option_a": "Will bind calcium and therefore interfere with its metabolism",
        "option_b": "Will cause more premenstrual cramping",
        "option_c": "Interferes with iron absorption because the iron precipitates as an insoluble substance",
        "option_d": "Causes competition at iron-receptor sites between iron and vitamin B1",
        "correct_answer": "C"
      },
      {
        "number": 818,
        "question": "The nurse knows that children are more susceptible to respiratory tract infections owing to physiological differences. These childhood differences, when compared to an adult, include:",
        "option_a": "Fewer alveoli, slower respiratory rate",
        "option_b": "Diaphragmatic breathing, larger volume of air",
        "option_c": "Larger number of alveoli, diaphragmatic breathing",
        "option_d": "Rounded shape of chest, smaller volume of air",
        "correct_answer": "D"
      },
      {
        "number": 819,
        "question": "A client delivered a stillborn male at term. An appropriate action of the nurse would be to:",
        "option_a": "State, \u2015You have an angel in heaven.\u2016 \u201c",
        "option_b": "Saline will reduce the risk of severe, colicky abdominal pain during NG irrigation.",
        "option_c": "Water is not isotonic and will increase restlessness and insomnia in the immediate postoperative period.",
        "option_d": "Saline will increase peristalsis in the bowel.",
        "correct_answer": "A"
      },
      {
        "number": 821,
        "question": "A 29-year-old client is admitted for a hysterectomy. She has repeatedly told the nurses that she is worried about having this surgery, has not slept well lately, and is afraid that her husband will not find her desirable after the surgery. Shortly into the preoperative teaching, she complains of a tightness in her chest, a feeling of suffocation, lightheadedness, and tingling in her hands. Her respirations are rapid and deep. Assessment reveals that the client is:",
        "option_a": "Having a heart attack",
        "option_b": "Wanting attention from the nurses",
        "option_c": "Suffering from complete upper airway obstruction",
        "option_d": "Hyperventilating",
        "correct_answer": "D"
      },
      {
        "number": 822,
        "question": "On assessment, the nurse learns that a chronic paranoid schizophrenic has been taking \u2015the blue pill\u2016 (haloperidol) in the morning and evening, and \u2015the white pill\u2016 (benztropine) right before bedtime. The nurse might suggest to the client that she try:",
        "option_a": "Doubling the daily dose of benztropine",
        "option_b": "Decreasing the haloperidol dosage for a few days",
        "option_c": "Taking the benztropine in the morning",
        "option_d": "Taking her medication with food or milk",
        "correct_answer": "C"
      },
      {
        "number": 823,
        "question": "The mother of a child taking phenytoin will need to plan appropriate mouth care and gingival stimulation. When tooth-brushing is contraindicated, the next most effective cleansing and gingival stimulation technique would be:",
        "option_a": "Using a water pik",
        "option_b": "Rinsing with water",
        "option_c": "Rinsing with hydrogen peroxide",
        "option_d": "Rinsing with baking soda",
        "correct_answer": "A"
      },
      {
        "number": 824,
        "question": "A client has been taking lithium 300 mg po bid for the past two weeks. This morning her lithium level was 1 mEq/L. The nurse should:",
        "option_a": "Notify the physician immediately",
        "option_b": "Hold the morning lithium dose and continue to observe the client",
        "option_c": "Administer the morning lithium dose as scheduled",
        "option_d": "Obtain an order for benztropine (Cogentin)",
        "correct_answer": "C"
      },
      {
        "number": 825,
        "question": "A client admitted with a diagnosis of possible myocardial infarction is admitted to the unit from the emergency room. The nurse\u2018s first action when admitting the client will be to:",
        "option_a": "Obtain vital signs",
        "option_b": "Connect the client to the cardiac monitor",
        "option_c": "Ask the client if he is still having chest pain",
        "option_d": "Complete the history profile",
        "correct_answer": "B"
      },
      {
        "number": 826,
        "question": "The nurse is developing a plan of care for a client with an electrolyte imbalance and identifies a nursing diagnosis of decreased physical mobility. Which alteration is most likely the etiology?",
        "option_a": "Hypernatremia",
        "option_b": "Hypocalcemia",
        "option_c": "Hypokalemia",
        "option_d": "Hypomagnesemia",
        "correct_answer": "C"
      },
      {
        "number": 827,
        "question": "The nurse discovers that a 78-year-old client who received hydralazine (Apresoline) 20 mg 45 minutes ago has a blood pressure of 70/40 mm Hg. The client has been on this dose of the medication for 3 years. Which of the following data is most likely significant in relation to the cause of the low blood pressure?",
        "option_a": "Pedal pulses 11 (weak) \u201c",
        "option_b": "Twenty-four-hour intake 1000 mL/day for past 2 days",
        "option_c": "Serum potassium 3.3",
        "option_d": "Pulse rate 150 bpm",
        "correct_answer": "B"
      },
      {
        "number": 828,
        "question": "The nurse notes scattered crackles in both lungs and 1+ pitting edema when assessing a cardiac client. The physician is notified and orders furosemide (Lasix) 80 mg IV push stat. Which of the following diagnostic studies is monitored to assess for a major complication of this therapy?",
        "option_a": "Serum electrolytes",
        "option_b": "Arterial blood gases",
        "option_c": "Complete blood count",
        "option_d": "12-Lead ECG",
        "correct_answer": "A"
      }
    ]
  },
  {
    "series_number": 25,
    "title": "NCLEX RN Practice Series 25",
    "question_count": 33,
    "questions": [
      {
        "number": 829,
        "question": "A client is admitted to the hospital with a diagnosis of aplastic anemia and placed on isolation. The nurse notices a family member entering the room without applying the appropriate apparel. The nurse will approach the family member using the following information as a basis for discussion:",
        "option_a": "The risks of exposure of the visitor to infectious organisms is great.",
        "option_b": "Hospital regulations mandate that everyone in the facility adhere to appropriate codes.",
        "option_c": "The client is at extreme risk of acquiring infections.",
        "option_d": "Adherence to the guidelines are the latest Centers for Disease Control and Prevention recommendations on use of protective apparel.",
        "correct_answer": "C"
      },
      {
        "number": 830,
        "question": "The nurse enters the room of a client on which a \u2015do not resuscitate\u2016 order has been written and discovers that she is not breathing. Once the husband realizes what has occurred he yells, \u2015please save her!\u2016 The nurse\u2018s action would be:",
        "option_a": "Call the physician and inform him that the client has expired.",
        "option_b": "Remind the husband that the physician wrote an order not to resuscitate.",
        "option_c": "Discuss with the husband that these orders are written only on clients who are not likely to recover with resuscitative efforts.",
        "option_d": "Call a code and proceed with cardiopulmonary resuscitation.",
        "correct_answer": "D"
      },
      {
        "number": 831,
        "question": "Goal setting for a client with Meniere\u2018s disease should include which of the following?",
        "option_a": "Frequent ambulation",
        "option_b": "Prevention of a fall injury",
        "option_c": "Consumption of three meals per day",
        "option_d": "Prevention of infection",
        "correct_answer": "B"
      },
      {
        "number": 832,
        "question": "A 40-year-old client has been admitted to the hospital with severe substernal chest pain radiating down his left arm. The nurse caring for the client establishes the following priority nursing diagnosis\u2014Alteration in comfort, pain related to:",
        "option_a": "Increased excretion of lactic acid due to myocardial hypoxia",
        "option_b": "Increased blood flow through the coronary arteries",
        "option_c": "Decreased stimulation of the sympathetic nervous system",
        "option_d": "Decreased secretion of catecholamines secondary to anxiety",
        "correct_answer": "A"
      },
      {
        "number": 833,
        "question": "A 20-year-old male client is being treated for protein deficiency. If he likes all of the following foods, which one would the nurse recommend to increase in the diet?",
        "option_a": "Cantaloupe",
        "option_b": "Rice",
        "option_c": "Chicken",
        "option_d": "Green beans",
        "correct_answer": "C"
      },
      {
        "number": 834,
        "question": "A client is started on prednisone 2.5 mg po bid. Which of the following instructions should be included in her discharge teaching specific to this medication?",
        "option_a": "Increase your oral intake of fluids to at least 4000 mL every day.",
        "option_b": "Avoid contact with people who have contagious illnesses.",
        "option_c": "Brush your teeth at least 4 times a day with a firm toothbrush.",
        "option_d": "Immediately stop taking the prednisone if you feel depressed.",
        "correct_answer": "B"
      },
      {
        "number": 835,
        "question": "During discharge planning, parents of a child with rheumatic fever should be able to identify which of the following as toxic symptoms of sodium salicylate?",
        "option_a": "Tinnitus and nausea",
        "option_b": "Dermatitis and blurred vision",
        "option_c": "Unconsciousness and acetone odor of the breath \u201c",
        "option_d": "Chills and an elevation of temperature",
        "correct_answer": "A"
      },
      {
        "number": 836,
        "question": "A 33-year-old client is diagnosed with bipolar disorder, acute phase. This is her first psychiatric hospitalization, and she is being evaluated for treatment with lithium. Which of the following diagnostic tests are essential prior to the initiation of lithium therapy with this client?",
        "option_a": "Hematocrit, hemoglobin, and white blood cell (WBC) count",
        "option_b": "Blood urea nitrogen, electrolytes, and creatinine",
        "option_c": "Glucose, glucose tolerance test, and random blood sugar",
        "option_d": "X-rays, electroencephalogram, and electrocardiogram (ECG)",
        "correct_answer": "B"
      },
      {
        "number": 837,
        "question": "A 52-year-old female client is admitted to the hospital in acute renal failure. She has been on hemodialysis for the past 2 years. Stat arterial blood gases are drawn on the client yielding the following results: pH 7.30, PCO2 51 mm Hg, HCO3, 18 mEq/L, PaO2, 84 mm Hg. The nurse would interpret these results as:",
        "option_a": "Compensated metabolic alkalosis",
        "option_b": "Respiratory acidosis",
        "option_c": "Partially compensated metabolic alkalosis",
        "option_d": "Combined respiratory and metabolic acidosis",
        "correct_answer": "D"
      },
      {
        "number": 838,
        "question": "The nurse is assessing breath sounds in a bronchovesicular client. She should expect that: \u201c",
        "option_a": "Inspiration is longer than expiration",
        "option_b": "Breath sounds are high pitched",
        "option_c": "Breath sounds are slightly muffled",
        "option_d": "Inspiration and expiration are equal",
        "correct_answer": "D"
      },
      {
        "number": 839,
        "question": "Stat serum electrolytes ordered for a client in acute renal failure revealed a serum potassium level of 6.4. The physician is immediately notified and orders 50 mL of dextrose and 10 U of regular insulin IV push. The nurse administering these drugs knows the Rationale for this therapy is to:",
        "option_a": "Remove the potassium from the body by renin exchange",
        "option_b": "Protect the myocardium from the effects of hypokalemia",
        "option_c": "Promote rapid protein catabolism",
        "option_d": "Drive potassium from the serum back into the cells",
        "correct_answer": "D"
      },
      {
        "number": 840,
        "question": "A 9-year-old child was in the garage with his father, who was repairing a lawnmower. Some gasoline ignited and caused an explosion. His father was killed, and the child has splitthickness and full-thickness burns over 40% of his upper body, face, neck, and arms. All of the following nursing diagnoses are included on his care plan. Which of these nursing diagnoses should have top priority during the first 24\u201348 hours postburn?",
        "option_a": "Pain related to tissue damage from burns",
        "option_b": "Potential for infection related to contamination of wounds",
        "option_c": "Fluid volume deficit related to increased capillary permeability",
        "option_d": "Potential for impaired gas exchange related to edema of respiratory tract",
        "correct_answer": "D"
      },
      {
        "number": 841,
        "question": "When planning care for a 9-year-old client, the nurse uses which of the most effective means of helping siblings cope with their feelings about a brother who is terminally ill?",
        "option_a": "Open discussion and understanding",
        "option_b": "Play-acting out feelings in different roles",
        "option_c": "Storytelling",
        "option_d": "Drawing pictures",
        "correct_answer": "B"
      },
      {
        "number": 842,
        "question": "The following nursing diagnosis is written for a comatose client with cirrhosis of the liver and secondary splenomegaly\u2014High risk for injury: Increased susceptibility to bleeding related to:",
        "option_a": "Increased absorption of vitamin K",
        "option_b": "Thrombocytopenia due to hypersplenism",
        "option_c": "Diminished function of the Kupffer cells",
        "option_d": "Increased synthesis of the clotting factors",
        "correct_answer": "B"
      },
      {
        "number": 843,
        "question": "A 27-year-old male client is admitted to the acute care mental health unit for observation. He has recently lost his job, and his wife told him yesterday that she wants a divorce. The client is placed on suicide precautions. In assessing suicide potential, the nurse should pay close attention to the client\u2018s:",
        "option_a": "Level of insight",
        "option_b": "Thought processes",
        "option_c": "Mood and affect",
        "option_d": "Abstracting abilities",
        "correct_answer": "C"
      },
      {
        "number": 844,
        "question": "A 35-year-old client has returned to her room following surgery on her right femur. She has an IV of D5 in onehalf normal saline infusing at 125 mL/hr and is receiving morphine sulfate 10\u201315 mg IM q4h prn for pain. She last voided 51/2 hours ago when she was given her preoperative medication. In monitoring and promoting return of urinary function after surgery, the nurse would:",
        "option_a": "Provide food and fluids at the client\u2018s request",
        "option_b": "Maintain IV, increasing the rate hourly until the client voids",
        "option_c": "Report to the surgeon if the client is unable to void within 8 hours of surgery",
        "option_d": "Hold morphine sulfate injections for pain until the client voids, explaining to her that morphine sulfate can cause urinary retention",
        "correct_answer": "C"
      },
      {
        "number": 845,
        "question": "An 80-year-old male client with a history of arteriosclerosis is experiencing severe pain in his left leg that started approximately 20 minutes ago. When performing the admission assessment, the nurse would expect to observe which of the following:",
        "option_a": "Both lower extremities warm to touch with 2_pedal pulses",
        "option_b": "Both lower extremities cyanotic when placed in a dependent position",
        "option_c": "Decreased or absent pedal pulse in the left leg",
        "option_d": "The left leg warmer to touch than the right leg",
        "correct_answer": "C"
      },
      {
        "number": 846,
        "question": "A woman diagnosed with multiple sclerosis is disturbed with diplopi",
        "option_a": "The nurse will teach her to: E. Limit activities which require focusing (close vision) F. Take more frequent naps G. Use artificial tears H. Wear a patch over one eye Answer: D Explanation: (A) Limiting activities requiring close vision will not alleviate the discomfort of double vision. (B) Frequent naps may be comforting, but they will not prevent double vision. (C) Artificial tears are necessary in the absence of a corneal reflex, but they have no effect on diplopi A. (D) An eye patch over either eye will eliminate the effects of double vision during the time the eye patch is worn. An eye patch is safe for a person with an intact corneal reflex. QUESTION 847 A 14-year-old boy has had diabetes for 7 years. He takes 30 U of NPH insulin and 10 U of regular insulin every morning at 7 AM. He eats breakfast at 7:30 AM and lunch at noon. What time should he expect the greatest risk for hypoglycemia? A. 9 AM",
        "option_b": "1 PM",
        "option_c": "11 AM",
        "option_d": "3 PM",
        "correct_answer": "C"
      },
      {
        "number": 848,
        "question": "A child is to receive atropine 0.15 mg (1/400 g) as part of his preoperative medication. A vial containing atropine 0.4 mg (1/150 g)/mL is on hand. How much atropine should be given?",
        "option_a": "0.06 mL",
        "option_b": "0.38 mL",
        "option_c": "2.7 mL",
        "option_d": "Information given insufficient to determine the amount of atropine to be administered",
        "correct_answer": "B"
      },
      {
        "number": 849,
        "question": "Morphine sulfate 4 mg IV push q2h prn for chest pain was ordered for a client in the emergency room with severe chest pain. The nurse administering the morphine sulfate knows which of the following therapeutic actions is related to the morphine sulfate?",
        "option_a": "Increased level of consciousness",
        "option_b": "Increased rate and depth of respirations",
        "option_c": "Increased peripheral vasodilation",
        "option_d": "Increased perception of pain",
        "correct_answer": "C"
      },
      {
        "number": 850,
        "question": "A female baby was born with talipes equinovarus. Her mother has requested that the nurse assigned to the baby come to her room to discuss the baby\u2018s condition. The nurse knows that the pediatrician has discussed the baby\u2018s condition with her mother and that an orthopedist has been consulted but has not yet seen the baby. What should the nurse do first?",
        "option_a": "Call the orthopedist and request that he come to see the baby now.",
        "option_b": "Question the mother and find out what the pediatrician has told her about the baby\u2018s condition.",
        "option_c": "Tell the mother that this is not a serious condition.",
        "option_d": "Tell the mother that this condition has been successfully treated with exercises, casts, and/or braces.",
        "correct_answer": "B"
      },
      {
        "number": 851,
        "question": "A client states to his nurse that \u2015I was told by the doctor not to take one of my drugs because it seems to have caused decreasing blood cells.\u2016 Based on this information, which drug might the nurse expect to be discontinued?",
        "option_a": "Prednisone",
        "option_b": "Timolol maleate (Blocadren) \u201c",
        "option_c": "Garamycin (Gentamicin)",
        "option_d": "Phenytoin (Dilantin)",
        "correct_answer": "D"
      },
      {
        "number": 852,
        "question": "The nurse is in the hallway and one of the visitors faints. The nurse should:",
        "option_a": "Sit the victim up and lightly slap his face",
        "option_b": "Elevate the victim\u2018s legs",
        "option_c": "Apply a cool cloth to the victim\u2018s neck and forehead until he recovers",
        "option_d": "Sit the victim up and place the head between the knees",
        "correct_answer": "B"
      },
      {
        "number": 853,
        "question": "A client with cirrhosis of the liver becomes comatose and is started on neomycin 300 mg q6h via nasogastric tube. The rationale for this therapy is to:",
        "option_a": "Prevent systemic infection",
        "option_b": "Promote diuresis",
        "option_c": "Decrease ammonia formation",
        "option_d": "Acidify the small bowel",
        "correct_answer": "C"
      },
      {
        "number": 854,
        "question": "Diabetes mellitus is a disorder that affects 3.1 out of every 1000 children younger than 20 years old. It is characterized by an absence of, or marked decrease in, circulating insulin. When teaching a newly diagnosed diabetes client, the nurse includes information on the functions of insulin: \u201c",
        "option_a": "Transport of glucose into body cells and storage of glycogen in the liver",
        "option_b": "Glycogenolysis and facilitation of glucose use for energy",
        "option_c": "Glycogenolysis and catabolism",
        "option_d": "Catabolism and hyperglycemia",
        "correct_answer": "A"
      },
      {
        "number": 855,
        "question": "Following a gastric resection, a 70-year-old client is admitted to the postanesthesia care unit. He was extubated prior to leaving the suite. On arrival at the postanesthesia care unit, the nurse should:",
        "option_a": "Check airway, feeling for amount of air exchange noting rate, depth, and quality of respirations",
        "option_b": "Obtain pulse and blood pressure readings noting rate and quality of pulse",
        "option_c": "Reassure the client that his surgery is over and that he is in the recovery room",
        "option_d": "Review physician\u2018s orders, administering medications as ordered",
        "correct_answer": "A"
      },
      {
        "number": 856,
        "question": "A client is scheduled for a magnetic resonance imaging (MRI) to locate a cerebral lesion. It is important for the nurse to find out if he has a(n):",
        "option_a": "Allergy to seafood",
        "option_b": "History of seizures",
        "option_c": "Movable metal implant",
        "option_d": "Pin or screw in any bone",
        "correct_answer": "C"
      },
      {
        "number": 857,
        "question": "A measurable outcome criterion in the nursing care of an adolescent with anorexia nervosa would be:",
        "option_a": "Accepting her present body image",
        "option_b": "Verbalizing realistic feelings about her body",
        "option_c": "Having an improved perception of her body image",
        "option_d": "Exhibiting increased self-esteem",
        "correct_answer": "B"
      },
      {
        "number": 858,
        "question": "Which of the following should the nurse anticipate receiving as an as-needed order for a postoperative carotid endarterectomy client?",
        "option_a": "Nifedipine 10 mg SL for B/P 140/90",
        "option_b": "Furosemide 20 mg/PO for decreased urine output",
        "option_c": "Magnesium salicylate to decrease inflammation",
        "option_d": "Nitroglycerin gr 1/150 for chest pain",
        "correct_answer": "A"
      },
      {
        "number": 859,
        "question": "An 18-month-old child has been playing in the garage. His mother brings him to a nurse\u2018s home complaining of his mouth being sore. His lips and mouth are soapy and white, with small ulcerated areas beginning to form. The child begins to vomit. His pulse is rapid and weak. The nurse suspects that the child has:",
        "option_a": "Inhaled gasoline fumes",
        "option_b": "Ingested a caustic alkali",
        "option_c": "Eaten construction chalk",
        "option_d": "Lead poisoning",
        "correct_answer": "B"
      },
      {
        "number": 860,
        "question": "A 35-year-old client is admitted to the hospital for elective tubal ligation. While the nurse is doing preoperative teaching, the client says, \u2015The anesthesiologist said she was going to give me balanced anesthesi",
        "option_a": "What exactly is that?\u2016 The best explanation for the nurse to give the client would be that balanced anesthesia: A. Is a type of regional anesthesia",
        "option_b": "Uses equal amounts of inhalation agents and liquid agents",
        "option_c": "Does not depress the central nervous system",
        "option_d": "Is a combination of several anesthetic agents or drugs producing a smooth induction and minimal complications",
        "correct_answer": "D"
      },
      {
        "number": 861,
        "question": "One afternoon 3 weeks into his alcohol treatment program, a client says to the nurse, \u2015It\u2018s really not all my fault that I have a drinking problem. Alcoholism runs in my family. Both my grandfather and father were heavy drinkers.\u2016 The nurse\u2018s best response would be:",
        "option_a": "\u2015That might be a problem. Tell me more about them.\u2016",
        "option_b": "\u2015Risk factors can often be controlled by self-responsibility.\u2016",
        "option_c": "\u2015It sounds like you\u2018re intellectualizing your drinking problem.\u2016",
        "option_d": "\u2015Your grandfather and father were both alcoholics?\u2016",
        "correct_answer": "B"
      },
      {
        "number": 862,
        "question": "The most important goal in the care plan for a child who was hospitalized with an accidental overdose would be to:",
        "option_a": "Determine child\u2018s activity pattern",
        "option_b": "Reduce mother\u2018s sense of guilt",
        "option_c": "Instruct parents in use of ipecac \u201c",
        "option_d": "Teach parents appropriate safety precautions",
        "correct_answer": "D"
      }
    ]
  }
];

// Call this from admin seed page
async function runSeed() {
  const btn = document.getElementById('seed-btn');
  const log = document.getElementById('seed-log');
  if (btn) btn.disabled = true;
  if (log) log.innerHTML = '';
  const addLog = (msg) => { if(log) log.innerHTML += msg + '<br>'; console.log(msg); };
  addLog('Starting seed...');
  try {
    await Seed.insertSeriesAndQuestions(QUESTIONS_DATA);
    addLog('✅ All done!');
  } catch(e) {
    addLog('❌ Error: ' + e.message);
  }
  if (btn) btn.disabled = false;
}
