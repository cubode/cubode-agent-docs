---
sidebar_position: 2
---

# Pie Plot 

## Table of Contents
- [Introduction](#introduction)
- [What is a Pie Plot?](#what-is-a-pie-plot)
- [Features of Pie Plots](#features-of-pie-plots)
- [Customization Options](#customization-options)
- [Use Cases](#use-cases)
- [How to Generate a Pie Plot with Cubode-Agent](#how-to-generate-a-pie-plot-with-cubode-agent)
- [Important Features for Proper Operation](#important-features-for-proper-operation)
- [Conclusion](#conclusion)


## Introduction

Pie plots are a popular and visually appealing way to represent data as proportions of a whole. They are particularly useful when you want to display the relative sizes of data categories, making it easy to compare parts of a dataset to the whole.

This document provides an in-depth look at pie plots, their features, types, and how you can customize and generate them using Cubode-Agent.

## What is a Pie Plot?

A **Pie Plot** is a circular chart divided into sectors, where each sector represents a proportion of the whole. The size of each sector is proportional to the value it represents, providing a clear visual of how different categories contribute to the total.

### Key Characteristics:
- **Proportions**: Pie plots are ideal for showing the percentage or proportion of categories relative to the whole.
- **Sectors**: Each category is represented by a sector, with its angle and area corresponding to its value.
- **Single Dataset**: Typically, pie plots are used to visualize a single dataset, making them straightforward and easy to interpret.

## Features of Pie Plots

Pie plots come with a range of features that make them effective for data visualization:

- **Clear Proportions**: Easily display and compare the relative sizes of categories.
- **Simple Interpretation**: Visually intuitive, even for those unfamiliar with the data.
- **Highlighting**: Sectors can be highlighted or exploded to emphasize particular data points.
- **Limited Categories**: Best used when there are a small number of categories, as too many can clutter the plot.

## Use Cases

Pie plots are used across various domains to visualize data:

- **Business**: Displaying market share of different companies or products.
- **Finance**: Illustrating budget allocations or expense distributions.
- **Healthcare**: Showing the proportion of different medical conditions within a population.
- **Marketing**: Analyzing the distribution of customer demographics or survey results.

## How to Generate a Pie Plot with Cubode-Agent

Generating a pie plot with Cubode-Agent is a straightforward process:

1. **Sign In / Login**: Access the Cubode-Agent platform with your credentials.
2. **Upload Your CSV File**: Import the dataset you want to visualize as a pie plot.
3. **Click Generate**: Let the AI analyze your data and generate the pie plot automatically.
4. **Select Pie Plot Type**: Navigate in our AI-generated plots until the pie plot is displayed.
5. **Customize**: Use the sidebar to customize your pie plot's appearance and settings, such as colors and labels.
6. **Save or Export**: Once satisfied with your plot, you can save or export it for further use.

## Important Features for Proper Operation

When using Cubode-Agent to generate pie plots, it's important to pay attention to several key features to ensure the agent functions correctly and produces accurate visualizations.

### 1. Series: Choosing the Column Category

In the **Series** section, always choose the **Column Category** that contains categorical data. Categorical data refers to values that represent different categories or groups, which can be labeled or named. Examples of categorical data include:

- **Product Types**: "Electronics", "Furniture", "Clothing"
- **Regions**: "North America", "Europe", "Asia"
- **Age Groups**: "Child", "Adult", "Senior"

#### Example:
If your dataset contains a column called "Product Type" with values like "Electronics", "Furniture", and "Clothing", this would be an appropriate column to select in the Column Category. The agent will then use these categories to generate the sectors in the pie plot.

### 2. Values: Choosing the Column for Numerical Values

In the **Values** section, always choose the column that holds **numerical values**. This column is critical because it represents the data that will be used to determine the size of each sector in the pie plot.

Numerical values might include:

- **Sales Figures**: Total sales in dollars.
- **Quantities**: Number of items sold.
- **Percentages**: Percentage of the total each category represents.

### 3. Customizing the Color Range

Cubode-Agent allows you to customize the color range of your pie plots, which is especially useful for enhancing the visual appeal or highlighting specific data categories.

To customize the color range:
- Scroll to the **Color Space** setting in the customization sidebar.
- At the end of the Color Space options, you'll find the ability to choose **Custom Colors**.
- Choose the **Primary Color** and **Secondary Color** to set the gradient or contrast for the sectors.

This allows you to create a color scheme that aligns with your data's thematic context or your personal preferences. For instance, you could use a green-to-blue gradient to indicate different levels of success or performance.

## Customization Options

Cubode-Agent provides a robust set of customization options to tailor your pie plots to your specific needs. These options are divided into two main settings menus: the **Main Settings Menu** and the **Series Menu**.

### Main Settings Menu

The **Main Settings Menu** allows you to customize several critical aspects of your pie plot:

1. **Chart Title**: The title of the chart, which gives a clear indication of what the plot represents. This is automatically defined by the AI based on the data and plot type.
2. **Chart Subtitle**: A secondary title that provides additional context or details about the plot. This is also defined by the AI.
3. **Pie Type**: Choose from different styles of pie plots:
   - **Basic**: A standard circular pie plot.
   - **Ring**: A donut-shaped plot with a hole in the center, which can be used to add another layer of information or simply for a different aesthetic.
   - **Half Ring**: A semi-circular plot, which can be useful for emphasizing a comparison between two main categories.
   - **Rose**: A variation where sectors extend radially from the center, often used to show variation in magnitude across categories.
4. **Legend**: Choose to display or hide the legend, which explains the data represented in the plot.
5. **Show Percentage**: Toggle the display of percentages within each sector to clearly indicate the proportion each category represents.
6. **Show as Currency**: Display the values as currency, useful when dealing with financial data where the monetary aspect needs to be emphasized.

### Series Menu

The **Series Menu** offers additional options to fine-tune the data representation within your pie plot:

1. **Series Name**: You can add or change the name of the series. The series name is used to identify the dataset being represented by the pie plot.
2. **Column Category and Values**: Although these are initially defined by the AI, you can change the selected column category (categorical data) and values (numerical data) if needed. This flexibility allows you to adjust the data that the pie plot represents.
3. **Aggregation**: Choose between two types of aggregation:
   - **Sum**: Aggregates the total value for each category. Useful when you want to represent the total sales, quantities, or other summable data.
   - **Count**: Counts the occurrences of each category. This is helpful when you want to visualize the frequency or distribution of categorical data.
4. **Show Data Labels**: Toggle the display of data labels directly on the sectors. This is useful for clearly indicating the percentage or value each sector represents.
5. **Color Space**: Customize the color gradient or scheme used in the plot. You can select a primary and secondary color to create a gradient effect that enhances the visual appeal and data clarity.

## Conclusion

Pie plots are an effective tool for visualizing the proportions of different categories within a whole. With Cubode-Agent, generating and customizing pie plots becomes a seamless process, allowing you to focus on interpreting your data rather than struggling with complex visualization tools. Whether you need a simple pie plot or a more detailed one with exploded sectors, Cubode-Agent provides the flexibility and power to create the perfect visual representation of your data.

