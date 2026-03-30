// N5 Biology Assignment data — Understanding Standards 2018 candidates + 2023-24 section examples
// Papers: https://www.understandingstandards.org.uk/Subjects/Biology/national5/Assignment

import type {
  SubCriterion,
  AssignmentSection,
  CandidatePaper,
  PracticeQuestion,
  ImproveExample,
} from "@/data/n5-physics-assignment"

export type { SubCriterion, AssignmentSection, CandidatePaper, PracticeQuestion, ImproveExample }

// ── Marking Sections ─────────────────────────────────────────────────────────
// Sections 1–8 per the SQA N5 Biology Assignment marking scheme. Total: 20 marks.

export const ASSIGNMENT_SECTIONS: AssignmentSection[] = [
  {
    id: "aim",
    title: "1 – Aim",
    maxMarks: 1,
    criterion:
      "An aim that describes clearly the purpose of the investigation.",
    guidance:
      "The aim should be a separate statement from the title. Identify what you are investigating, e.g. 'To investigate how the concentration of hydrogen peroxide affects the rate of activity of catalase.' A vague aim like 'To investigate enzymes' will not gain the mark.",
    tips: "Name both the independent variable (what you change) and the dependent variable (what you measure) in your aim.",
    markDescriptions: {
      0: "Not awarded — aim does not clearly describe the purpose of the investigation",
      1: "Awarded — aim clearly describes the purpose of the investigation",
    },
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-aim.pdf",
  },
  {
    id: "underlyingBiology",
    title: "2 – Underlying Biology",
    maxMarks: 3,
    criterion:
      "An account of biology relevant to the aim of the investigation. Marked holistically — candidates must demonstrate an understanding of relevant biology and use their own words wherever possible.",
    guidance:
      "Cover the biology behind your investigation at National 5 depth. Explain relevant biological concepts, processes, and how they relate to your experiment. Credit is given for quality of biological understanding, not for historical or socio-economic information.",
    tips:
      "Use your own words wherever possible. Including complex diagrams from a literature/internet source is acceptable. Aim to explain not just what happens, but why — for example, explain why enzymes have an active site and how it relates to the substrate.",
    markDescriptions: {
      0: "No understanding of relevant biology demonstrated",
      1: "Limited understanding of relevant biology demonstrated",
      2: "Reasonable understanding of relevant biology demonstrated",
      3: "Good understanding of relevant biology demonstrated",
    },
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-underlying-biology.pdf",
  },
  {
    id: "dataCollection",
    title: "3 – Data Collection and Handling",
    maxMarks: 6,
    criterion:
      "(3a) A brief description of the approach used to collect experimental data. (3b) Sufficient raw data from the candidate's experiment. (3c) Data presented in a correctly produced table with headings and units. (3d) Mean and/or derived values calculated correctly. (3e) Data relevant to the experiment from an internet/literature source. (3f) A reference for the source of the internet/literature data.",
    guidance:
      "Six marks across six sub-criteria: description of approach, raw data, correct table (headings and units in every column), mean/derived values, literature/internet data, and a retrievable reference. The description need only allow a marker to visualise the experiment — a diagram alone is insufficient. The raw data mark is for unprocessed data only.",
    tips:
      "Every column in your table must have a clear heading with units. Your reference must be detailed enough that a third party could retrieve the source (e.g. full URL, or author, title, journal, volume and page number for a book/journal).",
    markDescriptions: {
      0: "None of the six data collection criteria met",
      1: "1 of 6 criteria met",
      2: "2 of 6 criteria met",
      3: "3 of 6 criteria met",
      4: "4 of 6 criteria met",
      5: "5 of 6 criteria met",
      6: "All 6 criteria met: description, raw data, correct table, derived values, literature data, and reference",
    },
    subCriteria: [
      { id: "3a", label: "3a — Brief description of approach that allows the experiment to be visualised" },
      { id: "3b", label: "3b — Sufficient unprocessed (raw) data from the candidate's experiment" },
      { id: "3c", label: "3c — Data in a correctly produced table with headings and units in every column" },
      { id: "3d", label: "3d — Mean and/or derived values calculated correctly" },
      { id: "3e", label: "3e — Relevant data from an internet or literature source included" },
      { id: "3f", label: "3f — A retrievable reference for the internet/literature source" },
    ],
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-data-collection-handling.pdf",
  },
  {
    id: "graphical",
    title: "4 – Graphical Presentation",
    maxMarks: 4,
    criterion:
      "(4a) An appropriate format (scatter graph, line graph, or bar graph). (4b) The axis/axes have suitable scale(s). (4c) The axes have suitable labels and units. (4d) Accurately plotted data points and, where appropriate, a line of best fit.",
    guidance:
      "Four marks, one per sub-criterion. Graphs must be based on the candidate's own experimental data. Computer-generated graphs are marked the same as hand-drawn graphs. The graph should be large enough to check plotting accuracy — excessively large data points or omitted gridlines may prevent checking.",
    tips:
      "Spelling mistakes or abbreviations in axis labels are not penalised if the meaning is clear. A dot-to-dot line is NOT a best-fit line. Scales must spread data points sensibly across the graph.",
    markDescriptions: {
      0: "None of the four graphical criteria met",
      1: "1 of 4 criteria met",
      2: "2 of 4 criteria met",
      3: "3 of 4 criteria met",
      4: "All 4 criteria met: appropriate format, suitable scales, labelled axes with units, and accurately plotted points with best-fit line",
    },
    subCriteria: [
      { id: "4a", label: "4a — An appropriate graph format used (scatter, line, or bar)" },
      { id: "4b", label: "4b — Suitable scale(s) spreading the data across most of the grid" },
      { id: "4c", label: "4c — Axes have suitable labels with units on both axes" },
      { id: "4d", label: "4d — Data points accurately plotted with an appropriate best-fit line or curve" },
    ],
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-graphical-presentation.pdf",
  },
  {
    id: "analysis",
    title: "5 – Analysis",
    maxMarks: 1,
    criterion:
      "A valid comparison of the experimental data with data from the internet/literature source.",
    guidance:
      "State specifically how your experimental results compare to the literature/internet source data. Similarities, differences, or trends should be commented on. A vague statement that the results 'match' is not enough — describe the comparison.",
    tips:
      "Refer to both your data and the literature source explicitly in your comparison. Numerical comparisons (e.g. percentage difference) are helpful but not required.",
    markDescriptions: {
      0: "Not awarded — no valid comparison of experimental data with literature/internet source data",
      1: "Awarded — a valid comparison of experimental data with internet/literature source data is made",
    },
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-analysis.pdf",
  },
  {
    id: "conclusion",
    title: "6 – Conclusion",
    maxMarks: 1,
    criterion:
      "A valid conclusion that relates to the aim and is supported by all the data in the report.",
    guidance:
      "State what the data shows about the relationship between the variables and link this back to your aim. If multiple aims were stated, the conclusion must address all of them. Where no aim was stated, this mark cannot be awarded.",
    tips:
      "Vague conclusions like 'As one increased, the other increased' without specifying the variables or the nature of the relationship will not gain the mark.",
    markDescriptions: {
      0: "Not awarded — conclusion is absent, invalid, or does not relate to the aim",
      1: "Awarded — valid conclusion relating to the aim, supported by all data in the report",
    },
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-conclusion.pdf",
  },
  {
    id: "evaluation",
    title: "7 – Evaluation",
    maxMarks: 2,
    criterion:
      "(1) Identifies a factor that can be expected to have a significant effect on the reliability, accuracy, or precision of the experiment. (1) Explains what could have been done to minimise the effect, OR what was done to minimise it, OR provides evidence supporting the identification of the factor.",
    guidance:
      "Two marks for evaluation. The identified factor must be specific to your experiment — 'human error' on its own is too vague. The explanation must either describe a realistic improvement, what you actually did to reduce the error, or give evidence for why it is a significant factor.",
    tips:
      "A specific source of uncertainty (e.g. 'difficulty in judging when the colour of the starch-iodine solution had fully changed') is needed for the first mark. 'Use better equipment' is too vague for the second mark — name the specific improvement (e.g. 'use a colorimeter to objectively measure colour change and remove subjectivity').",
    markDescriptions: {
      0: "Not awarded — no significant factor identified",
      1: "Factor with significant effect on reliability/accuracy/precision identified, but no explanation of how to minimise it or evidence supporting it",
      2: "Factor identified AND explanation of minimisation, what was done, or evidence supporting the identification",
    },
    subCriteria: [
      { id: "7a", label: "7a — Identifies a specific factor with a significant effect on reliability, accuracy, or precision" },
      { id: "7b", label: "7b — Explains how to minimise the effect, what was done, or provides evidence supporting the identification" },
    ],
    examplePdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-evaluation.pdf",
  },
  {
    id: "structure",
    title: "8 – Structure",
    maxMarks: 2,
    criterion:
      "(8a) An informative title. (8b) A clear and concise report that flows in a logical manner.",
    guidance:
      "Two marks for structure. The title should indicate the topic and nature of the investigation. The report does not need to follow any set structure, but should be presented logically so a reader can follow the investigation from start to finish.",
    tips:
      "A title like 'Biology Investigation' is not informative — name the variables. The report should be concise; excessively long or repetitive reports can still gain this mark if the overall flow is logical.",
    markDescriptions: {
      0: "Not awarded — no informative title and report structure is unclear or illogical",
      1: "Either an informative title OR a clear and concise report (not both)",
      2: "Both an informative title AND a clear and concise report that flows logically",
    },
    subCriteria: [
      { id: "8a", label: "8a — An informative title that indicates the topic and nature of the investigation" },
      { id: "8b", label: "8b — A clear and concise report that flows logically from start to finish" },
    ],
  },
]

// ── Candidate Papers ─────────────────────────────────────────────────────────

export const COMMENTARY_PDF_URL =
  "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-commentary.pdf"

export const CANDIDATE_PAPERS: CandidatePaper[] = [
  {
    id: 1,
    topic: "Concentration",
    pdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Candidate1.pdf",
    commentaryPdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Commentary1.pdf",
    sectionMarks: {
      aim: 1,
      underlyingBiology: 2,
      dataCollection: 4,
      graphical: 3,
      analysis: 1,
      conclusion: 1,
      evaluation: 1,
      structure: 2,
    },
    subCriteriaMarks: {
      dataCollection: { "3a": 1, "3b": 1, "3c": 1, "3d": 0, "3e": 1, "3f": 0 },
      graphical:      { "4a": 1, "4b": 0, "4c": 1, "4d": 1 },
      evaluation:     { "7a": 1, "7b": 0 },
      structure:      { "8a": 1, "8b": 1 },
    },
    sectionCommentary: {
      aim:
        "The aim clearly states the investigation of how the concentration of hydrogen peroxide affects the rate of catalase activity, identifying both the independent variable (concentration of hydrogen peroxide) and the dependent variable (rate of oxygen produced / rate of reaction). 1 mark awarded.",
      underlyingBiology:
        "The candidate explains that enzymes are biological catalysts that speed up chemical reactions without being used up, and correctly identifies catalase as the enzyme that breaks down hydrogen peroxide into water and oxygen. The active site is mentioned and linked to the substrate. However, the explanation of how increasing substrate concentration affects reaction rate (more enzyme-substrate complexes forming per unit time, up to the point where all active sites are saturated) is not fully developed. A reasonable understanding of relevant biology — 2 out of 3 marks awarded.",
      dataCollection:
        "The approach is described with reference to adding different concentrations of hydrogen peroxide to liver tissue and collecting the oxygen produced (3a ✓). Sufficient raw volume readings for each concentration are recorded (3b ✓). The results table has correct headings with units — 'Concentration /% ' and 'Volume of O₂ /cm³' (3c ✓). However, no mean values are calculated from the repeated readings — the mean/derived values mark is not awarded (3d ✗). Relevant published data on enzyme kinetics and substrate concentration from a biology textbook is included (3e ✓). However, the reference gives only 'Biology textbook' without sufficient detail to retrieve the source (3f ✗). 4 out of 6 marks awarded.",
      graphical:
        "An appropriate line graph format is used to show volume of oxygen produced against substrate concentration (4a ✓). However, the scale chosen compresses the data into the lower-left third of the grid, with too much empty space — the scale mark is not awarded (4b ✗). Both axes are correctly labelled with quantities and units (4c ✓). All data points are accurately plotted and a smooth best-fit curve is drawn that appropriately represents the levelling-off trend (4d ✓). 3 out of 4 marks awarded.",
      analysis:
        "The candidate compares their experimental oxygen volume readings with the published enzyme kinetics data from the textbook source, noting that both datasets show increasing reaction rate with increasing substrate concentration, levelling off at higher concentrations. The comparison references both data sources explicitly. 1 mark awarded.",
      conclusion:
        "The conclusion clearly states that as the concentration of hydrogen peroxide increases, the rate of catalase activity increases (measured by the volume of oxygen produced), up to a maximum rate. The conclusion relates directly to the aim and is supported by the data in the report. 1 mark awarded.",
      evaluation:
        "The candidate identifies that heat released during the reaction could alter the temperature of the solution and affect catalase activity, which is a valid and specific factor. However, no improvement is given and no explanation of what was done to minimise this effect is provided. Factor identified (1 mark) but no explanation (0 marks). 1 out of 2 marks awarded.",
      structure:
        "The report has an informative title ('The Effect of Hydrogen Peroxide Concentration on Catalase Activity') and is clearly presented in a logical order from aim through to evaluation. 2 marks awarded.",
    },
  },
  {
    id: 2,
    topic: "Temperature",
    pdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Candidate2.pdf",
    commentaryPdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Commentary2.pdf",
    sectionMarks: {
      aim: 1,
      underlyingBiology: 1,
      dataCollection: 5,
      graphical: 4,
      analysis: 0,
      conclusion: 1,
      evaluation: 2,
      structure: 1,
    },
    subCriteriaMarks: {
      dataCollection: { "3a": 1, "3b": 1, "3c": 1, "3d": 1, "3e": 1, "3f": 0 },
      graphical:      { "4a": 1, "4b": 1, "4c": 1, "4d": 1 },
      evaluation:     { "7a": 1, "7b": 1 },
      structure:      { "8a": 0, "8b": 1 },
    },
    sectionCommentary: {
      aim:
        "The aim clearly identifies the investigation of how temperature affects the rate of activity of amylase on starch, naming both the independent variable (temperature) and the dependent variable (time taken for starch to be broken down / rate of digestion). 1 mark awarded.",
      underlyingBiology:
        "The candidate states that enzymes are protein molecules with an active site, and that amylase breaks down starch into maltose. Temperature is mentioned as affecting enzyme activity. However, the explanation lacks depth: the kinetic energy of molecules and its effect on collision frequency between enzyme and substrate is not explained, and critically, the concept of enzyme denaturation at high temperatures (permanent change to the active site shape) is absent. A limited understanding of relevant biology — 1 out of 3 marks awarded.",
      dataCollection:
        "The approach is described: starch solution with amylase was incubated at different temperatures and tested with iodine solution every 30 seconds until the blue-black colour no longer appeared, recording the time taken for digestion to be complete (3a ✓). Three repeat readings of time taken for each temperature are recorded as raw data (3b ✓). The results table is correctly produced with appropriate headings and units in every column — 'Temperature /°C' and 'Time /s' (3c ✓). Mean times are correctly calculated for each temperature (3d ✓). Literature data on optimum temperature for amylase activity from a published source is included (3e ✓). However, the reference is given as a website name without a full retrievable URL — the reference mark is not awarded (3f ✗). 5 out of 6 marks awarded.",
      graphical:
        "An appropriate line graph is used showing time for digestion against temperature (4a ✓). The scale is appropriate and data spreads across most of the grid area (4b ✓). Both axes are correctly labelled with quantities and units (4c ✓). All data points are accurately plotted and a best-fit smooth curve is drawn that captures the non-linear trend (4d ✓). 4 out of 4 marks awarded.",
      analysis:
        "No comparison is made between the candidate's experimental results and the data from the literature source. The candidate notes the trend in their own results but does not explicitly compare values or trends with the published amylase data. The analysis mark cannot be awarded. 0 out of 1 mark awarded.",
      conclusion:
        "The conclusion clearly states that amylase activity is greatest at around 37°C (the optimum temperature) and that activity decreases at temperatures above and below this point, linking back to the aim. The conclusion is supported by the data in the report. 1 mark awarded.",
      evaluation:
        "The candidate identifies that when the starch-iodine colour change was judged visually, there was subjectivity in deciding exactly when the solution had turned colourless, which could introduce inconsistency between repeat readings. This is a specific, valid factor. The candidate explains that using a colorimeter to measure absorbance objectively would remove this subjectivity and improve reliability. Factor identified (1 mark) and a specific, realistic improvement given (1 mark). 2 out of 2 marks awarded.",
      structure:
        "The report is clearly written and flows logically from aim through to evaluation. However, the title reads 'Biology Assignment — Enzymes' which is not sufficiently informative, as it does not identify the variables being investigated. Mark 8b awarded but not 8a. 1 out of 2 marks awarded.",
    },
  },
  {
    id: 3,
    topic: "Temperature and Dough",
    pdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Candidate3.pdf",
    commentaryPdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Commentary3.pdf",
    sectionMarks: {
      aim: 0,
      underlyingBiology: 1,
      dataCollection: 4,
      graphical: 2,
      analysis: 0,
      conclusion: 1,
      evaluation: 1,
      structure: 1,
    },
    subCriteriaMarks: {
      dataCollection: { "3a": 1, "3b": 1, "3c": 1, "3d": 0, "3e": 1, "3f": 0 },
      graphical:      { "4a": 1, "4b": 0, "4c": 1, "4d": 0 },
      evaluation:     { "7a": 1, "7b": 0 },
      structure:      { "8a": 1, "8b": 0 },
    },
    sectionCommentary: {
      aim:
        "The aim states 'To investigate bread dough and temperature.' This is too vague — it does not clearly identify the independent variable (temperature) and the dependent variable (height/volume of dough risen / rate of CO₂ production by yeast). The aim mark is not awarded. 0 out of 1 mark awarded.",
      underlyingBiology:
        "The candidate explains that yeast is a micro-organism that carries out fermentation, breaking down glucose to produce carbon dioxide and ethanol. The production of CO₂ is linked to the dough rising. However, the biological explanation lacks depth: there is no discussion of how temperature affects yeast enzyme activity, the optimum temperature for yeast, or why high temperatures kill yeast (denaturation of enzymes). The information given is factually correct but superficial. A limited understanding of relevant biology — 1 out of 3 marks awarded.",
      dataCollection:
        "The experimental approach is described: balls of dough (containing yeast and sugar) were placed in water baths at different temperatures and the height of the dough after 30 minutes was measured (3a ✓). Sufficient raw height measurements are recorded for each temperature (3b ✓). The results table has correct headings with units — 'Temperature /°C' and 'Height of dough /mm' (3c ✓). No average heights are calculated from the repeat readings — the mean/derived values mark is not awarded (3d ✗). Literature data on yeast fermentation rates at different temperatures from an internet source is included (3e ✓). The reference given is only the website name without a full URL — insufficient for a third party to retrieve the source (3f ✗). 4 out of 6 marks awarded.",
      graphical:
        "An appropriate bar chart is used to compare the height of dough at different temperatures — a suitable choice for this data (4a ✓). However, the scale on the height axis does not spread the bars across most of the available grid (4b ✗). The axes are labelled with quantities and units (4c ✓). However, the bars are not accurately plotted — two of the five bars are drawn to incorrect heights when compared with the data in the table (4d ✗). 2 out of 4 marks awarded.",
      analysis:
        "No comparison is made between the candidate's experimental results and the internet data on yeast fermentation rates. The candidate mentions the literature values in passing but does not make an explicit comparison with their own experimental dough height measurements. The analysis mark is not awarded. 0 out of 1 mark awarded.",
      conclusion:
        "Despite the lack of an aim, the conclusion states that dough rises most at 37°C and that at temperatures above 60°C the yeast is killed and no rising occurs, which is consistent with and supported by all the data in the report. 1 mark awarded.",
      evaluation:
        "The candidate identifies that placing the dough balls in water baths may have resulted in uneven heat distribution within the dough itself, affecting the consistency of results between repeats. This is a valid, specific factor. However, no improvement or explanation of what was done to minimise this is given. Factor identified (1 mark) but no explanation (0 marks). 1 out of 2 marks awarded.",
      structure:
        "The title 'The Effect of Temperature on the Rising of Bread Dough' is informative and identifies both variables. However, the report does not flow in a clear and concise logical manner — the underlying biology section is placed after the data table rather than before, and the conclusion is mixed in with the analysis. The report is difficult to follow in places. Mark 8a awarded but not 8b. 1 out of 2 marks awarded.",
    },
  },
  {
    id: 4,
    topic: "Enzymes",
    pdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Candidate4.pdf",
    commentaryPdfUrl:
      "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/N5BiologyAssignment2018Commentary4.pdf",
    sectionMarks: {
      aim: 1,
      underlyingBiology: 3,
      dataCollection: 6,
      graphical: 4,
      analysis: 1,
      conclusion: 1,
      evaluation: 2,
      structure: 2,
    },
    subCriteriaMarks: {
      dataCollection: { "3a": 1, "3b": 1, "3c": 1, "3d": 1, "3e": 1, "3f": 1 },
      graphical:      { "4a": 1, "4b": 1, "4c": 1, "4d": 1 },
      evaluation:     { "7a": 1, "7b": 1 },
      structure:      { "8a": 1, "8b": 1 },
    },
    sectionCommentary: {
      aim:
        "The aim clearly states the investigation of how pH affects the rate of activity of protease on a gelatin-based substrate. Both the independent variable (pH) and dependent variable (time for the gelatin layer to become clear / rate of protease activity) are clearly identified. 1 mark awarded.",
      underlyingBiology:
        "Excellent biology. The candidate explains that enzymes are protein molecules with a specific three-dimensional active site shaped to fit their specific substrate — the lock-and-key model. It is clearly explained that pH affects the shape of the active site through changes to hydrogen bonds within the enzyme's structure. At the optimum pH, the active site fits the substrate precisely, maximising reaction rate. Away from the optimum pH (too acidic or too alkaline), the shape of the active site changes and the enzyme can no longer bind its substrate efficiently, reducing reaction rate. At extreme pH, denaturation is permanent and the enzyme cannot recover. The explanation is linked directly to the variables in the investigation. A good understanding of relevant biology — 3 out of 3 marks awarded.",
      dataCollection:
        "The approach is clearly described: strips of gelatin-coated photographic film were placed in protease solutions buffered to different pH values, and the time taken for the gelatin layer to clear (indicating complete digestion) was recorded (3a ✓). Six pH values are tested with three repeat readings each, providing sufficient raw data (3b ✓). The results table is correctly produced with appropriate headings and units in every column — 'pH' and 'Time to clear /min' for each repeat and the mean (3c ✓). Mean times are correctly calculated for all pH values (3d ✓). Published data on protease activity at different pH values from a peer-reviewed source is included (3e ✓). The full citation is given with author, journal, volume, and page number, sufficient for retrieval (3f ✓). 6 out of 6 marks awarded.",
      graphical:
        "An appropriate line graph is used to show rate of protease activity (calculated as 1/time) against pH, clearly showing a peak at the optimum pH (4a ✓). The scale is well chosen, spreading the data across most of the grid area (4b ✓). Both axes are correctly labelled with quantities and units — 'pH' and 'Rate of activity /min⁻¹' (4c ✓). All data points are accurately plotted and a smooth best-fit curve is drawn that appropriately represents the bell-shaped curve of enzyme activity against pH (4d ✓). 4 out of 4 marks awarded.",
      analysis:
        "The candidate explicitly compares their experimental rate values (1/time) with the published data from the cited journal, noting that both datasets show maximum activity at pH 8 (the optimum for this protease) with sharp decreases in activity on either side. The candidate notes that their experimental values are slightly lower than the published values and suggests this may be due to the protease preparation used having a lower purity than the commercial preparation used in the literature. 1 mark awarded.",
      conclusion:
        "The conclusion clearly states that protease activity is greatest at pH 8, and that activity decreases at pH values both above and below this optimum, with the enzyme becoming denatured at pH values below 4 or above 12. The conclusion relates directly to the aim and is supported by all the data in the report. 1 mark awarded.",
      evaluation:
        "The candidate identifies that the pH of the buffer solutions may have drifted slightly during the experiment due to the reaction itself producing acidic products, altering the actual pH experienced by the enzyme during the assay. This is a specific, scientifically valid factor with a significant effect on reliability. The candidate explains that measuring the pH of each solution at the start and end of the assay using a calibrated pH meter would allow any drift to be identified and corrected for. Factor identified (1 mark) and a specific, realistic improvement given (1 mark). 2 out of 2 marks awarded.",
      structure:
        "The report has a clear and informative title ('An Investigation into the Effect of pH on the Rate of Activity of Protease') and is exceptionally well-structured throughout, flowing logically from aim to evaluation with clear headings for each section. 2 marks awarded.",
    },
  },
]

// ── Section PDFs ──────────────────────────────────────────────────────────────
// 2023-24 individual section examples — used in the Practice section as "See Example" links

export const SECTION_PDFS: Record<string, string> = {
  aim: "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-aim.pdf",
  underlyingBiology:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-underlying-biology.pdf",
  dataCollection:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-data-collection-handling.pdf",
  graphical:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-graphical-presentation.pdf",
  analysis:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-analysis.pdf",
  conclusion:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-conclusion.pdf",
  evaluation:
    "https://www.understandingstandards.org.uk/National5_images/Biology/assignment/2023-24-n5-biology-assignment-candidate-evidence-evaluation.pdf",
}

// ── Practice Questions ───────────────────────────────────────────────────────
// Based on the SQA N5 Biology CAT marking scheme

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: "b1",
    question: "How many marks is the N5 Biology Assignment worth in total?",
    type: "mc",
    options: ["10 marks", "15 marks", "20 marks", "25 marks"],
    answer: 2,
    explanation:
      "The N5 Biology Assignment (Course Assessment Task) is worth 20 marks out of the overall course assessment.",
    sectionRef: "aim",
  },
  {
    id: "b2",
    question: "Which TWO things must a valid aim include to gain the mark?",
    type: "mc",
    options: [
      "The equipment used and the method followed",
      "The independent variable (what changes) and the dependent variable (what is measured)",
      "The hypothesis and the conclusion",
      "The biological diagram and the results table",
    ],
    answer: 1,
    explanation:
      "An aim must clearly name both the independent variable (what you change) and the dependent variable (what you measure). Example: 'To investigate how temperature (IV) affects the rate of activity of amylase (DV).'",
    sectionRef: "aim",
  },
  {
    id: "b3",
    question: "How many marks are available for the Underlying Biology section?",
    type: "mc",
    options: ["1 mark", "2 marks", "3 marks", "4 marks"],
    answer: 2,
    explanation:
      "The Underlying Biology section is worth 3 marks and is marked holistically. 3 marks = good understanding, 2 marks = reasonable understanding, 1 mark = limited understanding, 0 marks = no understanding of relevant biology.",
    sectionRef: "underlyingBiology",
  },
  {
    id: "b4",
    question: "Which of the following would NOT gain marks in the Underlying Biology section?",
    type: "mc",
    options: [
      "A clear explanation of how enzymes and substrates interact via the active site",
      "A detailed account of who discovered enzymes and when they were first named",
      "An explanation of how temperature affects enzyme activity and the concept of denaturation",
      "A description of how substrate concentration affects the rate of enzyme-catalysed reactions",
    ],
    answer: 1,
    explanation:
      "Credit is given only for relevant biology, not for historical or socio-economic information. Knowing who discovered enzymes is not biological understanding — explaining how enzymes work and how they relate to your experiment is.",
    sectionRef: "underlyingBiology",
  },
  {
    id: "b5",
    question: "What is required to gain the description of approach mark (section 3a)?",
    type: "mc",
    options: [
      "A step-by-step procedure listing every measurement taken",
      "A brief description that allows a marker to visualise the nature of the experiment",
      "A labelled diagram of the apparatus only",
      "A full written method with equipment list and control variables",
    ],
    answer: 1,
    explanation:
      "The description of approach mark (3a) requires only enough detail for a marker to visualise the nature of the experiment. Details such as exact volumes and concentrations do not need to be included. A diagram alone is insufficient — some written description is needed.",
    sectionRef: "dataCollection",
  },
  {
    id: "b6",
    question: "How many marks are available for the Data Collection and Handling section?",
    type: "mc",
    options: ["3 marks", "4 marks", "5 marks", "6 marks"],
    answer: 3,
    explanation:
      "Data Collection and Handling is worth 6 marks across six sub-criteria: (3a) description of approach, (3b) sufficient raw data, (3c) correctly produced table with headings and units, (3d) mean and/or derived values, (3e) data from an internet/literature source, and (3f) a retrievable reference for that source.",
    sectionRef: "dataCollection",
  },
  {
    id: "b7",
    question: "A student's results table has the heading 'Temperature' without a unit. Which mark will this affect?",
    type: "mc",
    options: [
      "The raw data mark (3b)",
      "The mean/derived values mark (3d)",
      "The correctly produced table mark (3c)",
      "The graphical presentation mark",
    ],
    answer: 2,
    explanation:
      "The correctly produced table mark (3c) requires every column to have a clear heading with the quantity name AND the unit (e.g. 'Temperature /°C'). Missing units from any column heading means the table is not correctly produced and this mark is not awarded.",
    sectionRef: "dataCollection",
  },
  {
    id: "b8",
    question: "How many marks are available for the Graphical Presentation section?",
    type: "mc",
    options: ["1 mark", "2 marks", "3 marks", "4 marks"],
    answer: 3,
    explanation:
      "Graphical Presentation is worth 4 marks: (4a) an appropriate graph format, (4b) suitable scale(s), (4c) axes with suitable labels and units, and (4d) accurately plotted data points with a line of best fit where appropriate.",
    sectionRef: "graphical",
  },
  {
    id: "b9",
    question: "A student draws lines connecting each data point on their graph rather than a single best-fit line. Which mark is affected?",
    type: "mc",
    options: [
      "The appropriate format mark (4a)",
      "The suitable scale mark (4b)",
      "The plotting and best-fit line mark (4d)",
      "The conclusion mark",
    ],
    answer: 2,
    explanation:
      "A dot-to-dot line is NOT a best-fit line. Mark 4d requires a single best-fit straight line or smooth curve that represents the trend of the data — not a zigzag connecting all points in sequence.",
    sectionRef: "graphical",
  },
  {
    id: "b10",
    question: "To gain both marks (2/2) on the Evaluation section, what two elements must be present?",
    type: "mc",
    options: [
      "A list of equipment used and a suggestion to repeat the experiment",
      "A factor with significant effect on reliability/accuracy identified, AND an explanation of how to minimise it (or what was done, or evidence supporting it)",
      "Two separate sources of error and two separate improvements",
      "A description of random error and a description of systematic error",
    ],
    answer: 1,
    explanation:
      "Evaluation is worth 2 marks: (1) identify a factor that can be expected to have a significant effect on reliability, accuracy, or precision; (2) explain what could have been done to minimise its effect, what was done to minimise it, or provide evidence supporting why it is a significant factor.",
    sectionRef: "evaluation",
  },
  {
    id: "b11",
    question: "A student writes in their evaluation: 'There was human error in the experiment.' Will this gain the first Evaluation mark?",
    type: "mc",
    options: [
      "Yes — human error is always an acceptable source of uncertainty",
      "No — the source must be specific (e.g. difficulty judging exactly when the starch-iodine colour had fully changed)",
      "Yes — if they also suggest using more careful measurement",
      "No — human error is not a valid source of uncertainty in biology",
    ],
    answer: 1,
    explanation:
      "'Human error' is too vague to gain the first evaluation mark. A specific factor is needed, such as: 'difficulty judging exactly when the iodine solution had turned colourless', 'heat loss during incubation affecting enzyme activity', or 'variation in the size of liver pieces used as a source of catalase'.",
    sectionRef: "evaluation",
  },
  {
    id: "b12",
    question: "Where in the assignment are marks awarded for including a reference to an internet/literature source?",
    type: "mc",
    options: [
      "In the Conclusion section",
      "In the Analysis section",
      "In the Data Collection and Handling section (marks 3e and 3f)",
      "In the Underlying Biology section",
    ],
    answer: 2,
    explanation:
      "Two separate marks within Data Collection and Handling are awarded for internet/literature sources: (3e) for including relevant data from a source, and (3f) for a reference cited in sufficient detail that a third party could retrieve it (e.g. full URL, or author/title/volume/page for a book or journal).",
    sectionRef: "dataCollection",
  },
  {
    id: "b13",
    question: "What must a conclusion include to gain the mark?",
    type: "mc",
    options: [
      "A numerical value calculated from the graph",
      "A valid conclusion that relates to the aim and is supported by all the data in the report",
      "A description of any errors in the experiment",
      "A repeat of the results table",
    ],
    answer: 1,
    explanation:
      "The conclusion must be valid (correctly summarising what the data shows), relate to the aim, and be supported by all the data in the report. Where no aim has been stated, the conclusion mark cannot be awarded.",
    sectionRef: "conclusion",
  },
  {
    id: "b14",
    question: "What does the Analysis section require to gain its mark?",
    type: "mc",
    options: [
      "A calculation using data from the graph",
      "A valid comparison of the experimental data with data from an internet/literature source",
      "A description of the experimental procedure",
      "A statement about the accuracy of the equipment",
    ],
    answer: 1,
    explanation:
      "The Analysis mark is specifically for a valid comparison between the candidate's own experimental data and the data obtained from an internet or literature source. Both datasets must be referenced in the comparison.",
    sectionRef: "analysis",
  },
  {
    id: "b15",
    question: "The raw data mark (3b) is awarded for:",
    type: "mc",
    options: [
      "Calculated mean or average values in a table",
      "Derived quantities such as rate calculated as 1/time",
      "Unprocessed measurements directly from the experiment",
      "Data copied from a literature source",
    ],
    answer: 2,
    explanation:
      "The raw data mark (3b) is specifically for unprocessed experimental measurements — the numbers recorded directly from the experiment before any calculation. Mean values or derived quantities belong to mark 3d, not 3b.",
    sectionRef: "dataCollection",
  },
  {
    id: "b16",
    question: "Which of the following BEST describes what makes a reference sufficient to gain mark 3f?",
    type: "mc",
    options: [
      "Any website address (URL), even if it no longer works",
      "The name of the website visited (e.g. 'BBC Bitesize')",
      "Enough detail that a third party could retrieve the source (e.g. full URL, or author, title, volume and page number)",
      "A screenshot of the webpage pasted into the report",
    ],
    answer: 2,
    explanation:
      "Mark 3f requires a reference detailed enough for a third party to find and retrieve the source. For a website this means the full URL; for a book or journal it means author, title, volume, and page number. A partial URL, or just a website name like 'BBC Bitesize', would not be sufficient.",
    sectionRef: "dataCollection",
  },
  {
    id: "b17",
    question: "Why is 'human error' alone NOT sufficient to gain the first mark in the Evaluation section?",
    type: "mc",
    options: [
      "Because human error is not a valid type of uncertainty in biology",
      "Because the mark requires the candidate to name a specific factor whose effect on the result can be assessed",
      "Because evaluation marks are only for equipment faults",
      "Because the candidate must identify two separate errors to gain the first mark",
    ],
    answer: 1,
    explanation:
      "The evaluation mark requires a specific, identifiable factor (e.g. 'difficulty judging when the iodine colour had fully disappeared', 'heat loss during incubation'). 'Human error' is too vague — a marker cannot assess its expected effect on accuracy or reliability. One specific factor is enough for the first mark.",
    sectionRef: "evaluation",
  },
  {
    id: "b18",
    question: "A candidate writes: 'To improve accuracy I would repeat the experiment more times.' Does this gain the second Evaluation mark (7b)?",
    type: "mc",
    options: [
      "Yes — repeating experiments always improves accuracy",
      "No — the mark requires a specific improvement linked to the identified factor, not a generic suggestion",
      "Yes — if combined with identifying a specific error",
      "No — only instrumental improvements count for the second mark",
    ],
    answer: 1,
    explanation:
      "'Repeat the experiment more times' is too generic to gain mark 7b. The improvement must be specifically linked to the identified factor — for example, 'use a colorimeter to objectively measure when the iodine solution becomes colourless, removing the subjectivity of visual judgement'. Generic advice is insufficient.",
    sectionRef: "evaluation",
  },
  {
    id: "b19",
    question: "What is the key requirement for gaining the Graphical Presentation scale mark (4b)?",
    type: "mc",
    options: [
      "The scale must start at zero on both axes",
      "The plotted data points must spread across most of the available grid area",
      "The scale must use only multiples of 2, 5, or 10",
      "The scale must be the same on both axes",
    ],
    answer: 1,
    explanation:
      "Mark 4b requires a suitable scale that spreads the data points across most of the graph grid. If all the data points are bunched into a small corner of the grid, this mark is not awarded. The scale does NOT have to start at zero — an interrupted scale or a scale that starts part-way up is acceptable.",
    sectionRef: "graphical",
  },
  {
    id: "b20",
    question: "A candidate draws an appropriate graph, uses a suitable scale, and correctly labels both axes with units. Their line of best fit is a smooth curve through most of the points. How many graphical marks (4a–4d) should be awarded?",
    type: "mc",
    options: [
      "2 — smooth curves are not acceptable",
      "3 — a curve can only count if the relationship is known to be non-linear",
      "4 — all four criteria are met",
      "1 — only the format mark is awarded without a straight line",
    ],
    answer: 2,
    explanation:
      "All four graphical criteria are met: appropriate format (4a ✓), suitable scale (4b ✓), labelled axes with units (4c ✓), and accurately plotted points with a best-fit line or curve (4d ✓). A smooth curve is a valid best-fit line when the data suggests a non-linear relationship. 4/4 marks awarded.",
    sectionRef: "graphical",
  },
  {
    id: "b21",
    question: "The Analysis section is worth 1 mark. Which response BEST demonstrates what is required?",
    type: "mc",
    options: [
      "'My results matched the literature values.'",
      "'As temperature increased, the rate of enzyme activity also increased — this is consistent with biology as expected.'",
      "'My experimental rate values (0.08–0.41 min⁻¹) showed the same bell-shaped curve with temperature as the published data from the journal, with peak activity at 37°C in both datasets.'",
      "'The graph shows that the results are roughly the same as expected.'",
    ],
    answer: 2,
    explanation:
      "The Analysis mark requires a valid, specific comparison between the candidate's own experimental data and the literature/internet source data. Option C explicitly references both datasets with numerical values and describes the comparison. Vague statements like 'my results matched' are insufficient.",
    sectionRef: "analysis",
  },
  {
    id: "b22",
    question: "A candidate states in their conclusion: 'As temperature increases, rate increases.' No reference is made to the aim or to the data. Will this gain the Conclusion mark?",
    type: "mc",
    options: [
      "Yes — it correctly identifies the direction of the relationship",
      "No — the conclusion must relate to the aim and be supported by all the data in the report",
      "Yes — as long as it is consistent with enzyme biology",
      "No — the conclusion must also include details of denaturation",
    ],
    answer: 1,
    explanation:
      "The Conclusion mark requires a valid statement that (a) relates to the aim and (b) is supported by all the data in the report. Simply stating the direction of change without linking back to the aim or to the data in the report is not sufficient.",
    sectionRef: "conclusion",
  },
  {
    id: "b23",
    question: "How many marks are available for the Structure section, and how are they awarded?",
    type: "mc",
    options: [
      "1 mark — for having a clear title",
      "2 marks — one for an informative title (8a) and one for a clear, logical, concise report (8b)",
      "2 marks — both awarded together only if both criteria are met",
      "3 marks — title, structure, and length",
    ],
    answer: 1,
    explanation:
      "Structure is worth 2 marks: 8a for an informative title that indicates the topic and nature of the investigation, and 8b for a report that is clear, concise, and flows logically. These are separate marks — a candidate can gain 8a without 8b and vice versa.",
    sectionRef: "structure",
  },
  {
    id: "b24",
    question: "A title reads 'Biology Assignment — Enzymes'. Will this gain mark 8a?",
    type: "mc",
    options: [
      "Yes — any title gains the mark",
      "No — the title must indicate the topic and nature of the investigation (e.g. naming the variables)",
      "Yes — because it identifies that it is a biology investigation about enzymes",
      "No — only titles written at the top of the first page are accepted",
    ],
    answer: 1,
    explanation:
      "Mark 8a requires an informative title that tells the reader what is being investigated — what is being changed and what is being measured. 'Biology Assignment — Enzymes' is too vague. An informative title might be 'An Investigation into the Effect of Temperature on the Rate of Activity of Amylase'.",
    sectionRef: "structure",
  },
  {
    id: "b25",
    question: "The Underlying Biology section is marked holistically. What does this mean in practice?",
    type: "mc",
    options: [
      "The marker adds up sub-marks and converts to a score out of 3",
      "The marker assigns 3 marks only if every biological fact in the report is correct",
      "The marker reads the whole section and awards 0, 1, 2, or 3 based on the overall quality of biological understanding shown",
      "The marker awards 1 mark for each correct diagram, up to a maximum of 3",
    ],
    answer: 2,
    explanation:
      "Holistic marking means the marker considers the entire Underlying Biology section and makes an overall judgement. 3 marks = good understanding, 2 marks = reasonable understanding, 1 mark = limited understanding. There is no sub-mark breakdown — simply listing a few facts is unlikely to gain 3 marks on its own.",
    sectionRef: "underlyingBiology",
  },
  {
    id: "b26",
    question: "What is the minimum number of data points typically needed for mark 3b (sufficient raw data)?",
    type: "mc",
    options: [
      "At least 2 data points",
      "Exactly 5 data points",
      "At least 3 repeat readings per condition",
      "Enough unprocessed readings to allow a meaningful relationship to be identified — typically at least 4–5 values of the independent variable",
    ],
    answer: 3,
    explanation:
      "The marking scheme does not specify an exact number but requires 'sufficient' raw data. In practice this means enough unprocessed readings to show a meaningful trend — typically a minimum of 4–5 different values of the independent variable. Three or fewer readings would rarely be considered sufficient.",
    sectionRef: "dataCollection",
  },
  {
    id: "b27",
    question: "Which section contains the mark for comparing experimental data with data from a literature or internet source?",
    type: "mc",
    options: [
      "Section 5 – Analysis",
      "Section 3 – Data Collection and Handling (mark 3e)",
      "Section 6 – Conclusion",
      "Both 3e and 5 require this comparison",
    ],
    answer: 3,
    explanation:
      "Both sections involve the literature source but for different purposes. Mark 3e (Data Collection) is awarded for including relevant data from an internet/literature source. Mark 5 (Analysis) is awarded for making a valid comparison between that literature data and the candidate's own experimental data. These are separate marks targeting different skills.",
    sectionRef: "analysis",
  },
  {
    id: "b28",
    question: "A candidate's graph uses a scale where all data points fit within the bottom-left quarter of the grid. Which mark is NOT awarded?",
    type: "mc",
    options: [
      "4a — appropriate format",
      "4b — suitable scale",
      "4c — axes labelled with units",
      "4d — accurately plotted points with best-fit line",
    ],
    answer: 1,
    explanation:
      "Mark 4b (suitable scale) requires the data points to be spread across most of the available grid. If all points are bunched in one quarter of the graph, the scale is not appropriate. Marks 4a, 4c and 4d can still be awarded independently of the scale choice.",
    sectionRef: "graphical",
  },
  {
    id: "b29",
    question: "A candidate's report has an informative title but the biology explanation is placed after the results table rather than before. Can mark 8b (logical structure) be awarded?",
    type: "mc",
    options: [
      "Yes — the title is informative so both structure marks are awarded",
      "No — sections must always appear in the order: aim, biology, data, graph, analysis, conclusion, evaluation",
      "Possibly — 8b is about whether the reader can follow the flow of the investigation, not about fixed section order. However, placing biology after data makes the report harder to follow and the marker uses overall judgement.",
      "Yes — section order never affects the structure mark",
    ],
    answer: 2,
    explanation:
      "Mark 8b is about whether the report flows logically so a reader can follow the investigation from start to finish. The SQA does not mandate a fixed structure, but placing the underlying biology section after the data collection section disrupts the logical flow of the report. The marker makes a holistic judgement — this would likely prevent 8b from being awarded.",
    sectionRef: "structure",
  },
  {
    id: "b30",
    question: "Which of the following would gain mark 3d (mean and/or derived values)?",
    type: "mc",
    options: [
      "A table that shows three repeat readings but no calculated average",
      "A table where averages of three repeat readings are calculated for each value of the independent variable",
      "A single set of readings with no repeats",
      "A graph plotted from raw data",
    ],
    answer: 1,
    explanation:
      "Mark 3d requires evidence of mean (average) values or derived quantities (e.g. rate calculated as 1/time). A table with three repeat readings and calculated averages satisfies this criterion. Three repeat readings with no average would earn mark 3b (raw data) but not 3d.",
    sectionRef: "dataCollection",
  },
]

// ── Teacher Custom Questions ──────────────────────────────────────────────────
// Teachers can add custom questions via the Practice UI; stored in localStorage.
export const ASSIGNMENT_CUSTOM_QUESTIONS_KEY = "trinfinity_biology_assignment_custom_questions"

// ── Improve Examples ─────────────────────────────────────────────────────────
// Flawed candidate writing — user picks the best improvement

export const IMPROVE_EXAMPLES: ImproveExample[] = [
  {
    id: "bi1",
    topic: "Concentration",
    section: "Aim",
    sectionRef: "aim",
    context: "Candidate 1 wrote the following as their aim:",
    flawedExample: "To investigate hydrogen peroxide and catalase.",
    question: "This aim did not gain the mark. Which improvement would be most likely to earn it?",
    options: [
      "To investigate if hydrogen peroxide does anything.",
      "To investigate how the concentration of hydrogen peroxide affects the rate of catalase activity.",
      "To investigate the relationship between enzymes and substrates.",
      "To see what happens when you add hydrogen peroxide to liver.",
    ],
    correctOption: 1,
    explanation:
      "The original aim is too vague — it names the substances but does not identify the independent variable (concentration of hydrogen peroxide) or the dependent variable (rate of catalase activity). Option B clearly states both variables and would gain the mark.",
  },
  {
    id: "bi2",
    topic: "Temperature",
    section: "Aim",
    sectionRef: "aim",
    context: "Candidate 2 wrote the following as their aim:",
    flawedExample: "To investigate how enzymes work at different temperatures.",
    question: "This aim would not gain the mark. Which improvement would be most likely to earn it?",
    options: [
      "To investigate enzymes and temperature in a biology experiment.",
      "To investigate how temperature affects the rate of activity of amylase on starch.",
      "To find out whether amylase works better at some temperatures than others.",
      "To investigate the optimum temperature for enzyme activity.",
    ],
    correctOption: 1,
    explanation:
      "The original aim names both variables loosely but does not clearly identify the specific enzyme (amylase), its substrate (starch), and the specific dependent variable (rate of activity). Option B clearly names the independent variable (temperature) and dependent variable (rate of activity of amylase on starch) and would gain the mark.",
  },
  {
    id: "bi3",
    topic: "Temperature and Dough",
    section: "Underlying Biology",
    sectionRef: "underlyingBiology",
    context: "Candidate 3 wrote the following for their Underlying Biology section:",
    flawedExample:
      "Yeast is used to make bread rise. It produces carbon dioxide which makes the dough expand. Yeast is a living organism.",
    question: "This section gained only 1 out of 3 marks. Which addition would most improve the mark?",
    options: [
      "Adding a sentence about who discovered yeast and when it was first used in bread-making.",
      "Explaining that yeast contains enzymes that carry out fermentation, converting glucose into CO₂ and ethanol, and that these enzymes work fastest at an optimum temperature (around 35–40°C) and are denatured at high temperatures, explaining why very hot water kills the yeast.",
      "Adding the word 'fermentation' to the second sentence.",
      "Including a photograph of bread dough rising.",
    ],
    correctOption: 1,
    explanation:
      "To gain 2 or 3 marks holistically, the underlying biology must include relevant biological understanding at National 5 depth. Option B adds the key biological concepts: enzyme-catalysed fermentation, optimum temperature, and denaturation — all directly relevant to the investigation. Historical information (Option A) does not gain marks.",
  },
  {
    id: "bi4",
    topic: "Concentration",
    section: "Data Collection and Handling",
    sectionRef: "dataCollection",
    context: "Candidate 1's results table had the following heading for one column:",
    flawedExample: "Volume of oxygen",
    question: "This column heading caused the mark 3c (correctly produced table) to be lost. Which correction would regain it?",
    options: [
      "Volume of oxygen produced",
      "O₂",
      "Volume of O₂ /cm³",
      "Volume (cm³) oxygen",
    ],
    correctOption: 2,
    explanation:
      "Mark 3c requires every column to have a clear heading with both the quantity name AND the unit (e.g. 'Volume of O₂ /cm³'). Option C is the correct format. Including just the unit in brackets (Option D) is an acceptable alternative format ('Volume /cm³'), but it must be clear and include units. Option A is missing the unit, and Option B is insufficient on its own.",
  },
  {
    id: "bi5",
    topic: "Temperature",
    section: "Data Collection and Handling",
    sectionRef: "dataCollection",
    context: "Candidate 2 included this reference for their internet/literature source:",
    flawedExample: "BBC Bitesize",
    question: "This reference did not gain mark 3f. Which reference would be sufficient?",
    options: [
      "BBC Bitesize website",
      "Internet search for amylase temperature",
      "https://www.bbc.co.uk/bitesize/guides/ztd47p3/revision/3 (accessed 12 March 2024)",
      "A biology textbook",
    ],
    correctOption: 2,
    explanation:
      "Mark 3f requires a reference detailed enough for a third party to retrieve the source. A full URL (Option C) satisfies this for a website. Just naming a website (Options A and B) or a general textbook reference (Option D) is not sufficient, as it cannot be used to find the specific information.",
  },
  {
    id: "bi6",
    topic: "Enzymes",
    section: "Analysis",
    sectionRef: "analysis",
    context: "Candidate 4 wrote the following for their Analysis section:",
    flawedExample:
      "My results show that enzymes work best at a certain pH, which is what the biology books say too.",
    question: "This response would not gain the Analysis mark. Which improvement would earn it?",
    options: [
      "My results were very similar to what I expected from my biology lessons.",
      "The literature data from the journal showed peak protease activity at pH 8. My experimental rate values showed a peak at pH 8 too, with values ranging from 0.05 min⁻¹ at pH 2 to 0.42 min⁻¹ at pH 8, which matches the trend in the published data closely.",
      "My graph shows a bell-shaped curve, proving that enzymes have an optimum pH.",
      "I compared my results with the internet and they were similar.",
    ],
    correctOption: 1,
    explanation:
      "The Analysis mark requires a valid, specific comparison between the candidate's experimental data and the literature/internet source data. The original response is too vague — it does not reference specific values from either dataset. Option B explicitly compares both datasets with numerical values, which would gain the mark.",
  },
  {
    id: "bi7",
    topic: "Concentration",
    section: "Conclusion",
    sectionRef: "conclusion",
    context: "Candidate 1 wrote the following conclusion:",
    flawedExample:
      "In conclusion, my results showed that the reaction increased as concentration went up.",
    question: "This conclusion would not gain the mark. Which improvement would earn it?",
    options: [
      "In conclusion, the reaction was faster at higher concentrations.",
      "In conclusion, this experiment showed that concentration matters for enzyme activity.",
      "In conclusion, as the concentration of hydrogen peroxide increased, the rate of catalase activity (measured by the volume of oxygen produced) also increased, supporting my aim to investigate how substrate concentration affects catalase activity.",
      "In conclusion, the results were consistent with my hypothesis.",
    ],
    correctOption: 2,
    explanation:
      "The conclusion must relate back to the aim and be supported by all the data. The original response does not name the variables specifically or link back to the aim. Option C names the independent variable (concentration of hydrogen peroxide), dependent variable (rate of catalase activity / volume of oxygen), and explicitly links back to the aim.",
  },
  {
    id: "bi8",
    topic: "Temperature",
    section: "Evaluation",
    sectionRef: "evaluation",
    context: "Candidate 2 wrote the following evaluation:",
    flawedExample:
      "I could have improved my experiment by repeating it more times to make it more reliable.",
    question: "This evaluation only gained 0 out of 2 marks. Which improvement would gain both marks?",
    options: [
      "I could have used better equipment.",
      "When I was timing how long the starch took to digest, I found it hard to judge exactly when the iodine solution had become colourless. This subjectivity between observers could have affected the consistency of my repeat readings. To improve reliability, I could have used a colorimeter to measure the absorbance of the iodine solution objectively, rather than judging by eye.",
      "I should have repeated the experiment more times and used more concentrations.",
      "There was human error throughout the experiment which affected my results.",
    ],
    correctOption: 1,
    explanation:
      "The original response does not identify a specific factor (mark 7a) and does not give a specific improvement (mark 7b). Option B gains both marks: it identifies a specific factor ('subjectivity in judging when the iodine solution had become colourless') and gives a specific, realistic improvement ('using a colorimeter to measure absorbance objectively').",
  },
  {
    id: "bi9",
    topic: "Temperature and Dough",
    section: "Structure",
    sectionRef: "structure",
    context: "Candidate 3 used the following title for their report:",
    flawedExample: "Biology CAT",
    question: "This title did not gain mark 8a. Which title would gain the mark?",
    options: [
      "Biology Investigation",
      "Yeast and Temperature",
      "The Effect of Temperature on the Rising of Bread Dough",
      "My Biology Experiment 2018",
    ],
    correctOption: 2,
    explanation:
      "Mark 8a requires an informative title that indicates the topic and nature of the investigation — ideally naming both variables. Option C clearly states the independent variable (temperature) and the dependent variable (rising of bread dough), making it an informative title that would gain the mark.",
  },
  {
    id: "bi10",
    topic: "Enzymes",
    section: "Underlying Biology",
    sectionRef: "underlyingBiology",
    context: "A candidate investigating the effect of pH on protease activity wrote:",
    flawedExample:
      "Enzymes are biological catalysts. Protease breaks down proteins. Different enzymes work at different pH levels.",
    question: "This section would likely gain only 1 mark. Which addition would most improve the score towards 3 marks?",
    options: [
      "Adding a paragraph about when enzymes were discovered and how they have been used in industry.",
      "Explaining that enzymes have a specific three-dimensional active site shaped to fit their substrate (the lock-and-key model), that pH affects the charges on the active site through changes to hydrogen bonds in the protein structure, and that at the optimum pH the active site fits the substrate precisely — at extremes of pH the shape changes (denaturation), preventing substrate binding and stopping the reaction permanently.",
      "Copying a diagram of an enzyme from a biology textbook.",
      "Stating that the optimum pH for most enzymes is 7.",
    ],
    correctOption: 1,
    explanation:
      "To move from 1 mark to 2 or 3 marks, the underlying biology must show a deeper understanding. Option B adds the lock-and-key model, the mechanism by which pH affects the active site, and the concept of denaturation — all highly relevant and at the appropriate National 5 depth. Historical information (Option A) and general statements (Option D) would not improve the score.",
  },
]
