---
sidebar_position: 5
---

# Heatmap Plot

## Table of Contents
- [Introduction](#introduction)
- [What is a Heatmap?](#what-is-a-heatmap)
- [Features of Heatmaps](#features-of-heatmaps)
- [Customization Options](#customization-options)
- [Use Cases](#use-cases)
- [How to Generate a Heatmap with Cubode-Agent](#how-to-generate-a-heatmap-with-cubode-agent)
- [Important Features for Proper Operation](#important-features-for-proper-operation)
- [Conclusion](#conclusion)

<iframe src="https://graph.cubode.com/charts/ZhQPgXld/" width="800" height="600"></iframe>

## Introduction

Heatmaps are a highly effective visualization tool used to represent data where individual values are depicted as colors. They are particularly useful for displaying the intensity of values across a two-dimensional space, making it easy to identify patterns, correlations, or hotspots within a dataset.

This document provides an in-depth look at heatmaps, their features, customization options, and how you can generate them using Cubode-Agent.

## What is a Heatmap?

A **Heatmap** is a type of data visualization that uses color to represent the values of a matrix or grid. Each cell in the grid corresponds to a data point, with the color indicating the magnitude or intensity of that value. Heatmaps are widely used for visualizing relationships between two variables, especially in large datasets where other plot types might become cluttered.

### Key Characteristics:
- **Color-Coded Data**: Heatmaps use a color gradient to represent data values, with different colors indicating different levels of intensity.
- **Grid-Based Visualization**: Data is displayed in a grid format, where each cell represents a data point.
- **Pattern Recognition**: Heatmaps make it easy to identify patterns, correlations, or outliers in the data.

## Features of Heatmaps

Heatmaps come with a range of features that make them effective for data visualization:

- **Pattern Identification**: Easily identify patterns, clusters, and outliers within the data.
- **Intensity Representation**: Use color gradients to represent the intensity or magnitude of data points.
- **Large Data Handling**: Effectively visualize large datasets that might be too complex for other plot types.
- **Customizable**: Tailor the appearance of the heatmap with various customization options, including color schemes, labels, and more.

## Use Cases

Heatmaps are used across various domains to visualize data:

- **Finance**: Visualizing stock market correlations or heatmaps of financial metrics.
- **Healthcare**: Mapping the intensity of disease outbreaks or patient health metrics.
- **Marketing**: Analyzing website user behavior, such as click or scroll heatmaps.
- **Education**: Representing the performance of students across different subjects.

## How to Generate a Heatmap with Cubode-Agent

Generating a heatmap with Cubode-Agent is a straightforward process:

1. **Sign In / Login**: Access the Cubode-Agent platform with your credentials.
2. **Upload Your CSV File**: Import the dataset you want to visualize as a heatmap.
3. **Click Generate**: Let the AI analyze your data and generate the heatmap automatically.
4. **Customize**: Use the sidebar to customize your heatmap's appearance and settings, such as axis labels, color schemes, and more.
5. **Save or Export**: Once satisfied with your plot, you can save or export it for further use.

## Important Features for Proper Operation

When using Cubode-Agent to generate heatmaps, it's important to pay attention to several key features to ensure the agent functions correctly and produces meaningful visualizations.

### 1. Choosing the X and Y Values

In the **Series** section, you should carefully select the **X Values** and **Y Values** from your dataset. These should typically be categorical or numerical columns that, when combined, will form the grid of the heatmap.

#### Example:
If your dataset contains columns called "Month" and "Product Category", you could use "Month" as the X value and "Product Category" as the Y value. This would help visualize the intensity of sales across different months and product categories.

### 2. Choosing the Z Values (Column to Aggregate)

The **Z Values** represent the data that will be aggregated and visualized in the heatmap to indicate the intensity or magnitude. This should be a numerical column in your dataset, such as sales figures, counts, or other measures, which will be aggregated based on the selected X and Y values.

#### Example:
If your dataset contains a column called "Sales," you could use this as the Z value (the column to aggregate) to represent the total sales for each combination of the X and Y values.

### 3. Aggregation Options

Choosing the right aggregation type is crucial for accurately representing your data in a line plot. Cubode-Agent provides several aggregation options:

- **Sum**: Aggregates the total value for each category.
- **Min**: Displays the minimum value within each category.
- **Max**: Displays the maximum value within each category.
- **Mean**: Represents the average value within each category.
- **Count**: Counts the occurrences of each category.

The appropriate aggregation type depends on the nature of your data and the insights you wish to gain. For example:
- **Sum** is useful when you want to see the total sales over time.
- **Mean** is appropriate when you want to compare average temperatures across different days.

### 4. Customizing the Color Range

Cubode-Agent allows you to customize the color range of your heatmaps, which is especially useful for enhancing the visual appeal or highlighting specific data patterns.

To customize the color range:
- Scroll to the **Color Space** setting in the customization sidebar.
- At the end of the Color Space options, you'll find the ability to choose **Custom Colors**.
- Choose the **Color Gradient** to set a specific range of colors for your heatmap, or use the default color palette provided by the tool.

This customization helps in creating a heatmap that is not only informative but also visually distinct.

## Customization Options

Cubode-Agent provides a robust set of customization options to tailor your heatmaps to your specific needs. These options are divided into two main settings menus: the **Main Settings Menu** and the **Series Menu**.

### Main Settings Menu

The **Main Settings Menu** allows you to customize several critical aspects of your heatmap:

1. **Chart Title**: The title of the chart, which gives a clear indication of what the heatmap represents. This is automatically defined by the AI based on the data and plot type.
2. **Chart Subtitle**: A secondary title that provides additional context or details about the heatmap. This is also defined by the AI.
3. **X Axis Label**: The label for the x-axis, representing the variable plotted along the horizontal axis. Defined by the AI based on the selected column category.
4. **Y Axis Label**: The label for the y-axis, representing the variable plotted along the vertical axis. This label is also defined by the AI according to the selected column category.
5. **Legend**: Choose to display or hide the legend, which explains the data represented in the plot, especially useful when multiple series are present.

### Series Menu

The **Series Menu** offers additional options to fine-tune the data representation within your heatmap:

1. **Series Name**: You can add or change the name of the series. The series name is used to identify the dataset being represented by the heatmap.
2. **X Values and Y Values**: Although these are initially defined by the AI, you can change the selected columns for the x-axis and y-axis to represent different variables from your dataset.
3. **Column to aggregate**: Select the column that represents the intensity or magnitude of the heatmap, often a numerical value like sales, counts, or other measures.
4. **Aggregation**: As mentioned earlier, you can select or change the type of aggregation (Sum, Min, Max, Mean, Count) applied to the numerical data.
5. **Show Labels**: Enable or disable the display of labels for each heatmap cell, which will show the numerical values within each cell, enhancing the interpretability of the heatmap.
6. **Color Space**: Customize the color gradient used in the heatmap by selecting from the default color palette or choosing custom colors. This allows for greater differentiation between different intensity levels within the heatmap.


## Conclusion

Heatmaps are an essential tool for visualizing patterns, correlations, and intensity across a dataset. With Cubode-Agent, generating and customizing heatmaps becomes a seamless process, allowing you to create clear and insightful visualizations tailored to your specific data analysis needs. Whether you need to analyze trends in sales, explore correlations in scientific data, or map the intensity of a phenomenon, Cubode-Agent provides the flexibility and power to create the perfect heatmap for your data.

