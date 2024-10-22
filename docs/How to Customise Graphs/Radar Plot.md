---
sidebar_position: 1
---


# Radar Plot 

## Table of Contents
- [Introduction](#introduction)
- [What is a Radar Plot?](#what-is-a-radar-plot)
- [Features of Radar Plots](#features-of-radar-plots)
- [Customization Options](#customization-options)
- [Use Cases](#use-cases)
- [How to Generate a Radar Plot with Cubode Graph AI](#how-to-generate-a-radar-plot-with-cubode-graph-ai)
- [Important Features for Proper Operation](#important-features-for-proper-operation)
- [Conclusion](#conclusion)

<iframe src="https://graph.cubode.com/charts/VHQ08CiL/" width="800" height="600"></iframe>

## Introduction

Radar plots, also known as spider charts or star plots, are unique and versatile data visualizations used to display multivariate data in a two-dimensional format. They excel at comparing multiple quantitative variables, making them ideal for displaying performance metrics, skill assessments, and multi-factor analyses.

This document provides an in-depth look at radar plots, their features, applications, and how you can customize and generate them using Cubode Graph AI. Radar plots offer a distinctive way to visualize data across multiple axes, allowing for quick comparisons and identification of patterns or outliers in complex datasets.

## What is a Radar Plot?

A **Radar Plot** is a chart that presents multivariate data in a circular format. Each axis represents a different variable, and the data points are plotted along these axes, creating a star-like shape. Radar plots are often used in business, science, and statistics to visualize data distributions and trends.

### Key Characteristics:
- **Categories**: Radar plots are ideal for comparing data across different categories.
- **Vertices/Points**: Represents the magnitude of the data for each category.

## Features of Radar Plots

Radar plots come with a range of features that make them effective for data visualization:

- **Simple Comparison**: Easily compare different categories at a glance.
- **Bigger Picture**: Compare multiple categories at once.


## Use Cases

Radar plots are versatile tools used across various domains to visualize multidimensional data:

- **Business**: Comparing product features, evaluating employee performance across multiple skills, or assessing company performance in different areas (e.g., finance, customer satisfaction, innovation).
- **Sports**: Visualizing athlete performance across various metrics (e.g., speed, strength, agility, technique).
- **Education**: Displaying student or school performance across multiple subjects or competencies.
- **Research**: Comparing characteristics of different species in biology, or presenting survey results with multiple criteria.
- **Project Management**: Assessing project health across various dimensions (e.g., cost, time, quality, risk, stakeholder satisfaction).

## How to Generate a Radar Plot with Cubode Graph AI

Generating a radar plot with Cubode Graph AI is a straightforward process:

1. **Sign In / Login**: Access the Cubode Graph AI platform with your credentials.
2. **Upload Your CSV File**: Import the dataset you want to visualize as a radar plot.
3. **Click Generate**: Let the AI analyze your data and generate the radar plot automatically.
4. **Select Radar Plot Type**: If you want to add a Radar plot manually, **click on Add Chart** and select the Radar plot. A fresh plot will appear.
5. **Customize**: Use the sidebar to customize your radar plot's appearance and settings, such as columns in your data to plot, colors and labels.
6. **Save or Export**: Once satisfied with your plot, you can save or export it for further use.


## Important Features for Proper Operation

When using Cubode Graph AI to generate radar plots, it's important to pay attention to several key features to ensure the agent functions correctly and produces accurate visualizations.

### 1. Series: Choosing the Column Category

In the **Series** section, always choose the **Column Category** that contains categorical data. Categorical data refers to values that represent different categories or groups, which can be labeled or named. Examples of categorical data include:

- **Product Types**: "Electronics", "Furniture", "Clothing"
- **Regions**: "North America", "Europe", "Asia"
- **Age Groups**: "Child", "Adult", "Senior"

#### Example:
If your dataset contains a column called "Region" with values like "North America", "Europe", and "Asia", this would be an appropriate column to select in the Column Category. The agent will then use these categories to generate the bars in the plot.

### 2. Values: Choosing the Column for Numerical Values

In the **Column Values** section, always choose the column that holds **numerical values**. This column is critical because it represents the data that will be aggregated and displayed in the bar plot.

Numerical values might include:

- **Sales Figures**: Total sales in dollars.
- **Quantities**: Number of items sold.
- **Scores**: Test scores, performance ratings.

#### Aggregation Type:
Choosing the right aggregation type is crucial for accurately representing your data in a bar plot. Cubode Graph AI provides several aggregation options:

- **Min**: Displays the minimum value within each category.
- **Sum**: Shows the total sum of values within each category. Use this to visualize total quantities or accumulative metrics.
- **Mean**: Represents the average value within each category. Ideal for understanding the central tendency of your data.
- **Max**: Displays the maximum value within each category, useful for identifying peak values or outliers.

Choosing the appropriate aggregation type depends on the nature of your data and the insights you wish to gain. For example:
- **Sum** is useful when you want to see the total sales in each region.
- **Mean** is appropriate when you want to compare the average scores of students across different subjects.

### 3. Customizing the Color Range

Cubode Graph AI allows you to customize the color range of your bar plots, which is especially useful for enhancing the visual appeal or highlighting specific data trends.

To customize the color range:
- Scroll to the **Color Space** setting in the customization sidebar.
- At the end of the Color Space options, you'll find the ability to choose a **Custom Colors**.
- Choose the **Color Primary** and **Color Secondary** this setting gonna give the range of colours used into the plot

This allows you to create a gradient or contrasting color scheme that aligns with your data's thematic context or your personal preferences. For instance, you could use a blue-to-red gradient to indicate increasing values or a green-to-yellow scheme to represent different performance levels.


## Customization Options

Cubode Graph AI provides a robust set of customization options to tailor your bar plots to your specific needs. These options are divided into two main settings menus: the **Main Settings Menu** and the **Series Menu**.

### Main Settings Menu

The **Main Settings Menu** allows you to customize several critical aspects of your bar plot:

1. **Chart Title**: The title of the chart, which gives a clear indication of what the plot represents. This is automatically defined by the AI based on the data and plot type.
2. **Chart Subtitle**: A secondary title that provides additional context or details about the plot. This is also defined by the AI.
3. **X Axis Label**: The label for the x-axis, typically representing the categories. Defined by the AI based on the selected column category.
4. **Y Axis Label**: The label for the y-axis, typically representing the values. This label is also defined by the AI according to the selected numerical data and aggregation type.
5. **Colors**: Customize the color of the bars to match your preferences or thematic requirements.
6. **Background**: Option to show or hide the background, adding or removing visual complexity depending on your needs.
7. **Legend**: Choose to display or hide the legend, which explains the data represented in the plot, especially useful in grouped or stacked bar plots.
8. **Overlap Labels**: Adjust whether labels on the bars should overlap, which can help in dense plots where space is limited.

### Series Menu

The **Series Menu** offers additional options to fine-tune the data representation within your bar plot:


1. **Series Name**: You can add or change the name of the series. In a radar plot, each series typically represents a different entity or data point being compared across multiple dimensions.

2. **Column Categories**: You can modify the categorical column that you want to use for the radar categories. These labels represent the different dimensions or categories being compared in the radar plot.

3. **Values**: You can adjust the values for each axis, which determine the position of data points on each spoke of the radar plot.

4. **Show Data Labels**: Toggle the display of data labels at each point on the radar plot. This is useful for highlighting specific values directly on the plot.

5. **Show Area**: Choose whether to fill the area inside the radar plot with color. This can help in visualizing the overall "footprint" of each series.

6. **Colors**: Customize the color scheme used in the plot. This includes the area color, markers color and the color of the radar lines.

