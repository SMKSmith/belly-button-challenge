# Belly Button Challenge

![bacteria](https://user-images.githubusercontent.com/117343047/230317989-b92be068-ce5a-4ac6-905e-061c04625d41.jpg)

### Background

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Before You Begin

1. Create a new repository for this project called `belly-button-challenge`. *Do not add this Challenge to an existing repository*.

2. Clone the new repository to your computer.

3. Inside your local git repository, copy the files from in the `StarterCode` folder contained within the Module 14 Challenge zip file. i.e. `index.html`, `samples.json`, and the `static` folder.

    > **Note** You will not be required to access the samples.json file locally, but it is provided for reference.

4. Push the above changes to GitHub.

5. Deploy the new repository to GitHub Pages.

### Files

Download the following files to help you get started:

[Module 14 Challenge files](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/Starter_Code.zip)

### Instructions

Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use `sample_values` as the values for the bar chart.

    * Use `otu_ids` as the labels for the bar chart.

    * Use `otu_labels` as the hovertext for the chart.

      ![bar Chart](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw01.jpg)

3. Create a bubble chart that displays each sample.

    * Use `otu_ids` for the x values.

    * Use `sample_values` for the y values.

    * Use `sample_values` for the marker size.

    * Use `otu_ids` for the marker colors.

    * Use `otu_labels` for the text values.

    ![Bubble Chart](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/bubble_chart.jpg)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

    ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw03.jpg)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

    ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw02.jpg)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

### Advanced Challenge Assignment (Optional with no extra points earning)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

  ![Weekly Washing Frequency Gauge](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/gauge.jpg)

