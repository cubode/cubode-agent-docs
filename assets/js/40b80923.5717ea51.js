"use strict";(self.webpackChunkgraph_docs=self.webpackChunkgraph_docs||[]).push([[205],{7513:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),i=t(8453);const r={sidebar_position:1},a="Radar Plot",o={id:"How to Customise Graphs/Radar Plot",title:"Radar Plot",description:"Table of Contents",source:"@site/docs/How to Customise Graphs/Radar Plot.md",sourceDirName:"How to Customise Graphs",slug:"/How to Customise Graphs/Radar Plot",permalink:"/cubode-agent-docs/How to Customise Graphs/Radar Plot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bar Plot",permalink:"/cubode-agent-docs/How to Customise Graphs/Bar Plot"},next:{title:"Wordcloud Plot",permalink:"/cubode-agent-docs/How to Customise Graphs/Wordcloud Plot"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is a Radar Plot?",id:"what-is-a-radar-plot",level:2},{value:"Key Characteristics:",id:"key-characteristics",level:3},{value:"Features of Radar Plots",id:"features-of-radar-plots",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"How to Generate a Radar Plot with Cubode Graph AI",id:"how-to-generate-a-radar-plot-with-cubode-graph-ai",level:2},{value:"Important Features for Proper Operation",id:"important-features-for-proper-operation",level:2},{value:"1. Series: Choosing the Column Category",id:"1-series-choosing-the-column-category",level:3},{value:"Example:",id:"example",level:4},{value:"2. Values: Choosing the Column for Numerical Values",id:"2-values-choosing-the-column-for-numerical-values",level:3},{value:"Aggregation Type:",id:"aggregation-type",level:4},{value:"3. Customizing the Color Range",id:"3-customizing-the-color-range",level:3},{value:"Customization Options",id:"customization-options",level:2},{value:"Main Settings Menu",id:"main-settings-menu",level:3},{value:"Series Menu",id:"series-menu",level:3}];function h(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"radar-plot",children:"Radar Plot"})}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#what-is-a-radar-plot",children:"What is a Radar Plot?"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#features-of-radar-plots",children:"Features of Radar Plots"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#customization-options",children:"Customization Options"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#use-cases",children:"Use Cases"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#how-to-generate-a-radar-plot-with-Cubode-Graph-AI",children:"How to Generate a Radar Plot with Cubode Graph AI"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#important-features-for-proper-operation",children:"Important Features for Proper Operation"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,n.jsx)("iframe",{src:"https://graph.cubode.com/charts/VHQ08CiL/",width:"800",height:"600"}),"\n",(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Radar plots, also known as spider charts or star plots, are unique and versatile data visualizations used to display multivariate data in a two-dimensional format. They excel at comparing multiple quantitative variables, making them ideal for displaying performance metrics, skill assessments, and multi-factor analyses."}),"\n",(0,n.jsx)(s.p,{children:"This document provides an in-depth look at radar plots, their features, applications, and how you can customize and generate them using Cubode Graph AI. Radar plots offer a distinctive way to visualize data across multiple axes, allowing for quick comparisons and identification of patterns or outliers in complex datasets."}),"\n",(0,n.jsx)(s.h2,{id:"what-is-a-radar-plot",children:"What is a Radar Plot?"}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"Radar Plot"})," is a chart that presents multivariate data in a circular format. Each axis represents a different variable, and the data points are plotted along these axes, creating a star-like shape. Radar plots are often used in business, science, and statistics to visualize data distributions and trends."]}),"\n",(0,n.jsx)(s.h3,{id:"key-characteristics",children:"Key Characteristics:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Categories"}),": Radar plots are ideal for comparing data across different categories."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Vertices/Points"}),": Represents the magnitude of the data for each category."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"features-of-radar-plots",children:"Features of Radar Plots"}),"\n",(0,n.jsx)(s.p,{children:"Radar plots come with a range of features that make them effective for data visualization:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Simple Comparison"}),": Easily compare different categories at a glance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bigger Picture"}),": Compare multiple categories at once."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(s.p,{children:"Radar plots are versatile tools used across various domains to visualize multidimensional data:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Business"}),": Comparing product features, evaluating employee performance across multiple skills, or assessing company performance in different areas (e.g., finance, customer satisfaction, innovation)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Sports"}),": Visualizing athlete performance across various metrics (e.g., speed, strength, agility, technique)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Education"}),": Displaying student or school performance across multiple subjects or competencies."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Research"}),": Comparing characteristics of different species in biology, or presenting survey results with multiple criteria."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Project Management"}),": Assessing project health across various dimensions (e.g., cost, time, quality, risk, stakeholder satisfaction)."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-generate-a-radar-plot-with-cubode-graph-ai",children:"How to Generate a Radar Plot with Cubode Graph AI"}),"\n",(0,n.jsx)(s.p,{children:"Generating a radar plot with Cubode Graph AI is a straightforward process:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Sign In / Login"}),": Access the Cubode Graph AI platform with your credentials."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Upload Your CSV File"}),": Import the dataset you want to visualize as a radar plot."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Click Generate"}),": Let the AI analyze your data and generate the radar plot automatically."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Select Radar Plot Type"}),": If you want to add a Radar plot manually, ",(0,n.jsx)(s.strong,{children:"click on Add Chart"})," and select the Radar plot. A fresh plot will appear."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Customize"}),": Use the sidebar to customize your radar plot's appearance and settings, such as columns in your data to plot, colors and labels."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Save or Export"}),": Once satisfied with your plot, you can save or export it for further use."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"important-features-for-proper-operation",children:"Important Features for Proper Operation"}),"\n",(0,n.jsx)(s.p,{children:"When using Cubode Graph AI to generate radar plots, it's important to pay attention to several key features to ensure the agent functions correctly and produces accurate visualizations."}),"\n",(0,n.jsx)(s.h3,{id:"1-series-choosing-the-column-category",children:"1. Series: Choosing the Column Category"}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.strong,{children:"Series"})," section, always choose the ",(0,n.jsx)(s.strong,{children:"Column Category"})," that contains categorical data. Categorical data refers to values that represent different categories or groups, which can be labeled or named. Examples of categorical data include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Product Types"}),': "Electronics", "Furniture", "Clothing"']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Regions"}),': "North America", "Europe", "Asia"']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Age Groups"}),': "Child", "Adult", "Senior"']}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"example",children:"Example:"}),"\n",(0,n.jsx)(s.p,{children:'If your dataset contains a column called "Region" with values like "North America", "Europe", and "Asia", this would be an appropriate column to select in the Column Category. The agent will then use these categories to generate the bars in the plot.'}),"\n",(0,n.jsx)(s.h3,{id:"2-values-choosing-the-column-for-numerical-values",children:"2. Values: Choosing the Column for Numerical Values"}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.strong,{children:"Column Values"})," section, always choose the column that holds ",(0,n.jsx)(s.strong,{children:"numerical values"}),". This column is critical because it represents the data that will be aggregated and displayed in the bar plot."]}),"\n",(0,n.jsx)(s.p,{children:"Numerical values might include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Sales Figures"}),": Total sales in dollars."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Quantities"}),": Number of items sold."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Scores"}),": Test scores, performance ratings."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"aggregation-type",children:"Aggregation Type:"}),"\n",(0,n.jsx)(s.p,{children:"Choosing the right aggregation type is crucial for accurately representing your data in a bar plot. Cubode Graph AI provides several aggregation options:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Min"}),": Displays the minimum value within each category."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Sum"}),": Shows the total sum of values within each category. Use this to visualize total quantities or accumulative metrics."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Mean"}),": Represents the average value within each category. Ideal for understanding the central tendency of your data."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Max"}),": Displays the maximum value within each category, useful for identifying peak values or outliers."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Choosing the appropriate aggregation type depends on the nature of your data and the insights you wish to gain. For example:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Sum"})," is useful when you want to see the total sales in each region."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Mean"})," is appropriate when you want to compare the average scores of students across different subjects."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"3-customizing-the-color-range",children:"3. Customizing the Color Range"}),"\n",(0,n.jsx)(s.p,{children:"Cubode Graph AI allows you to customize the color range of your bar plots, which is especially useful for enhancing the visual appeal or highlighting specific data trends."}),"\n",(0,n.jsx)(s.p,{children:"To customize the color range:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Scroll to the ",(0,n.jsx)(s.strong,{children:"Color Space"})," setting in the customization sidebar."]}),"\n",(0,n.jsxs)(s.li,{children:["At the end of the Color Space options, you'll find the ability to choose a ",(0,n.jsx)(s.strong,{children:"Custom Colors"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Choose the ",(0,n.jsx)(s.strong,{children:"Color Primary"})," and ",(0,n.jsx)(s.strong,{children:"Color Secondary"})," this setting gonna give the range of colours used into the plot"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This allows you to create a gradient or contrasting color scheme that aligns with your data's thematic context or your personal preferences. For instance, you could use a blue-to-red gradient to indicate increasing values or a green-to-yellow scheme to represent different performance levels."}),"\n",(0,n.jsx)(s.h2,{id:"customization-options",children:"Customization Options"}),"\n",(0,n.jsxs)(s.p,{children:["Cubode Graph AI provides a robust set of customization options to tailor your bar plots to your specific needs. These options are divided into two main settings menus: the ",(0,n.jsx)(s.strong,{children:"Main Settings Menu"})," and the ",(0,n.jsx)(s.strong,{children:"Series Menu"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"main-settings-menu",children:"Main Settings Menu"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Main Settings Menu"})," allows you to customize several critical aspects of your bar plot:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Chart Title"}),": The title of the chart, which gives a clear indication of what the plot represents. This is automatically defined by the AI based on the data and plot type."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Chart Subtitle"}),": A secondary title that provides additional context or details about the plot. This is also defined by the AI."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"X Axis Label"}),": The label for the x-axis, typically representing the categories. Defined by the AI based on the selected column category."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Y Axis Label"}),": The label for the y-axis, typically representing the values. This label is also defined by the AI according to the selected numerical data and aggregation type."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Colors"}),": Customize the color of the bars to match your preferences or thematic requirements."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Background"}),": Option to show or hide the background, adding or removing visual complexity depending on your needs."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Legend"}),": Choose to display or hide the legend, which explains the data represented in the plot, especially useful in grouped or stacked bar plots."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Overlap Labels"}),": Adjust whether labels on the bars should overlap, which can help in dense plots where space is limited."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"series-menu",children:"Series Menu"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Series Menu"})," offers additional options to fine-tune the data representation within your bar plot:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Series Name"}),": You can add or change the name of the series. In a radar plot, each series typically represents a different entity or data point being compared across multiple dimensions."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Column Categories"}),": You can modify the categorical column that you want to use for the radar categories. These labels represent the different dimensions or categories being compared in the radar plot."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Values"}),": You can adjust the values for each axis, which determine the position of data points on each spoke of the radar plot."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Show Data Labels"}),": Toggle the display of data labels at each point on the radar plot. This is useful for highlighting specific values directly on the plot."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Show Area"}),': Choose whether to fill the area inside the radar plot with color. This can help in visualizing the overall "footprint" of each series.']}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Colors"}),": Customize the color scheme used in the plot. This includes the area color, markers color and the color of the radar lines."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(6540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);