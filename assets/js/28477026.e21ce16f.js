"use strict";(self.webpackChunkgraph_docs=self.webpackChunkgraph_docs||[]).push([[387],{3618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=n(4848),i=n(8453);const r={sidebar_position:1},o="Bar Plot",a={id:"How to Customise Graphs/Bar Plot",title:"Bar Plot",description:"Table of Contents",source:"@site/docs/How to Customise Graphs/Bar Plot.md",sourceDirName:"How to Customise Graphs",slug:"/How to Customise Graphs/Bar Plot",permalink:"/cubode-agent-docs/How to Customise Graphs/Bar Plot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Change Log \ud83d\udcdc",permalink:"/cubode-agent-docs/Change Log"},next:{title:"Pie Plot",permalink:"/cubode-agent-docs/How to Customise Graphs/Pie Plot"}},l={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is a Bar Plot?",id:"what-is-a-bar-plot",level:2},{value:"Key Characteristics:",id:"key-characteristics",level:3},{value:"Features of Bar Plots",id:"features-of-bar-plots",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"How to Generate a Bar Plot with Cubode-Agent",id:"how-to-generate-a-bar-plot-with-cubode-agent",level:2},{value:"Important Features for Proper Operation",id:"important-features-for-proper-operation",level:2},{value:"1. Series: Choosing the Column Category",id:"1-series-choosing-the-column-category",level:3},{value:"Example:",id:"example",level:4},{value:"2. Values: Choosing the Column for Numerical Values",id:"2-values-choosing-the-column-for-numerical-values",level:3},{value:"Aggregation Type:",id:"aggregation-type",level:4},{value:"3. Customizing the Color Range",id:"3-customizing-the-color-range",level:3},{value:"Customization Options",id:"customization-options",level:2},{value:"Main Settings Menu",id:"main-settings-menu",level:3},{value:"Series Menu",id:"series-menu",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Should add the stacked barplot when we use the second serie",id:"should-add-the-stacked-barplot-when-we-use-the-second-serie",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"bar-plot",children:"Bar Plot"})}),"\n",(0,s.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#what-is-a-bar-plot",children:"What is a Bar Plot?"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#features-of-bar-plots",children:"Features of Bar Plots"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#customization-options",children:"Customization Options"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#use-cases",children:"Use Cases"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#how-to-generate-a-bar-plot-with-cubode-agent",children:"How to Generate a Bar Plot with Cubode-Agent"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#important-features-for-proper-operation",children:"Important Features for Proper Operation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Bar plots are one of the most common and versatile types of data visualizations used to compare different categories of data. They provide a straightforward way to represent data points across various categories, making them ideal for displaying comparisons, distributions, and trends."}),"\n",(0,s.jsx)(t.p,{children:"This document provides an in-depth look at bar plots, their features, types, and how you can customize and generate them using Cubode-Agent."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-a-bar-plot",children:"What is a Bar Plot?"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"Bar Plot"})," is a chart that presents categorical data with rectangular bars. Each bar's length is proportional to the value it represents, making it easy to compare data across different categories. Bar plots are often used in business, science, and statistics to visualize data distributions and trends."]}),"\n",(0,s.jsx)(t.h3,{id:"key-characteristics",children:"Key Characteristics:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Categories"}),": Bar plots are ideal for comparing data across different categories."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Bar Length/Height"}),": Represents the magnitude of the data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Orientation"}),": Can be vertical or horizontal."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"features-of-bar-plots",children:"Features of Bar Plots"}),"\n",(0,s.jsx)(t.p,{children:"Bar plots come with a range of features that make them effective for data visualization:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Simple Comparison"}),": Easily compare different categories at a glance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Clarity"}),": Clear and easy to interpret, even for those unfamiliar with the data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Scalability"}),": Suitable for both small datasets and large, complex ones."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Versatility"}),": Can be used in various fields, from business analytics to scientific research."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(t.p,{children:"Bar plots are used across various domains to visualize data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Business"}),": Comparing sales across different regions, products, or time periods."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Education"}),": Displaying student performance across different subjects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Healthcare"}),": Visualizing the frequency of different medical conditions within a population."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Marketing"}),": Analyzing the effectiveness of different marketing channels."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-generate-a-bar-plot-with-cubode-agent",children:"How to Generate a Bar Plot with Cubode-Agent"}),"\n",(0,s.jsx)(t.p,{children:"Generating a bar plot with Cubode-Agent is a straightforward process:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sign In / Login"}),": Access the Cubode-Agent platform with your credentials."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Upload Your CSV File"}),": Import the dataset you want to visualize as a bar plot."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Click Generate"}),": Let the AI analyze your data and generate the bar plot automatically."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Select Bar Plot Type"}),": Navigate in our AI generated plots till display the bar plot."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Customize"}),": Use the sidebar to customize your bar plot's appearance and settings, such as colors, labels."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Save or Export"}),": Once satisfied with your plot, you can save or export it for further use."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"important-features-for-proper-operation",children:"Important Features for Proper Operation"}),"\n",(0,s.jsx)(t.p,{children:"When using Cubode-Agent to generate bar plots, it's important to pay attention to several key features to ensure the agent functions correctly and produces accurate visualizations."}),"\n",(0,s.jsx)(t.h3,{id:"1-series-choosing-the-column-category",children:"1. Series: Choosing the Column Category"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Series"})," section, always choose the ",(0,s.jsx)(t.strong,{children:"Column Category"})," that contains categorical data. Categorical data refers to values that represent different categories or groups, which can be labeled or named. Examples of categorical data include:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Product Types"}),': "Electronics", "Furniture", "Clothing"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Regions"}),': "North America", "Europe", "Asia"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Age Groups"}),': "Child", "Adult", "Senior"']}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(t.p,{children:'If your dataset contains a column called "Region" with values like "North America", "Europe", and "Asia", this would be an appropriate column to select in the Column Category. The agent will then use these categories to generate the bars in the plot.'}),"\n",(0,s.jsx)(t.h3,{id:"2-values-choosing-the-column-for-numerical-values",children:"2. Values: Choosing the Column for Numerical Values"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Values"})," section, always choose the column that holds ",(0,s.jsx)(t.strong,{children:"numerical values"}),". This column is critical because it represents the data that will be aggregated and displayed in the bar plot."]}),"\n",(0,s.jsx)(t.p,{children:"Numerical values might include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sales Figures"}),": Total sales in dollars."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Quantities"}),": Number of items sold."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Scores"}),": Test scores, performance ratings."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"aggregation-type",children:"Aggregation Type:"}),"\n",(0,s.jsx)(t.p,{children:"Choosing the right aggregation type is crucial for accurately representing your data in a bar plot. Cubode-Agent provides several aggregation options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Min"}),": Displays the minimum value within each category."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sum"}),": Shows the total sum of values within each category. Use this to visualize total quantities or accumulative metrics."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Mean"}),": Represents the average value within each category. Ideal for understanding the central tendency of your data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Max"}),": Displays the maximum value within each category, useful for identifying peak values or outliers."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Choosing the appropriate aggregation type depends on the nature of your data and the insights you wish to gain. For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sum"})," is useful when you want to see the total sales in each region."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Mean"})," is appropriate when you want to compare the average scores of students across different subjects."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"3-customizing-the-color-range",children:"3. Customizing the Color Range"}),"\n",(0,s.jsx)(t.p,{children:"Cubode-Agent allows you to customize the color range of your bar plots, which is especially useful for enhancing the visual appeal or highlighting specific data trends."}),"\n",(0,s.jsx)(t.p,{children:"To customize the color range:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Scroll to the ",(0,s.jsx)(t.strong,{children:"Color Space"})," setting in the customization sidebar."]}),"\n",(0,s.jsxs)(t.li,{children:["At the end of the Color Space options, you'll find the ability to choose a ",(0,s.jsx)(t.strong,{children:"Custom Colors"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Choose the ",(0,s.jsx)(t.strong,{children:"Color Primary"})," and ",(0,s.jsx)(t.strong,{children:"Color Secondary"})," this setting gonna give the range of colours used into the plot"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This allows you to create a gradient or contrasting color scheme that aligns with your data's thematic context or your personal preferences. For instance, you could use a blue-to-red gradient to indicate increasing values or a green-to-yellow scheme to represent different performance levels."}),"\n",(0,s.jsx)(t.h2,{id:"customization-options",children:"Customization Options"}),"\n",(0,s.jsxs)(t.p,{children:["Cubode-Agent provides a robust set of customization options to tailor your bar plots to your specific needs. These options are divided into two main settings menus: the ",(0,s.jsx)(t.strong,{children:"Main Settings Menu"})," and the ",(0,s.jsx)(t.strong,{children:"Series Menu"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"main-settings-menu",children:"Main Settings Menu"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Main Settings Menu"})," allows you to customize several critical aspects of your bar plot:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Chart Title"}),": The title of the chart, which gives a clear indication of what the plot represents. This is automatically defined by the AI based on the data and plot type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Chart Subtitle"}),": A secondary title that provides additional context or details about the plot. This is also defined by the AI."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"X Axis Label"}),": The label for the x-axis, typically representing the categories. Defined by the AI based on the selected column category."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Y Axis Label"}),": The label for the y-axis, typically representing the values. This label is also defined by the AI according to the selected numerical data and aggregation type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Colors"}),": Customize the color of the bars to match your preferences or thematic requirements."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Background"}),": Option to show or hide the background, adding or removing visual complexity depending on your needs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Legend"}),": Choose to display or hide the legend, which explains the data represented in the plot, especially useful in grouped or stacked bar plots."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Overlap Labels"}),": Adjust whether labels on the bars should overlap, which can help in dense plots where space is limited."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"series-menu",children:"Series Menu"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Series Menu"})," offers additional options to fine-tune the data representation within your bar plot:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Series Name"}),": You can add or change the name of the series. The series name is used to identify different data groups or segments within your plot. For example, in a grouped bar plot, each series might represent a different year or product line."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Column Category and Values"}),": Although these are initially defined by the AI, you can change the selected column category (categorical data) and values (numerical data) if needed. This flexibility allows you to adjust the data that the bar plot represents."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Aggregation"}),": As mentioned earlier, you can select or change the type of aggregation (Min, Sum, Mean, Max) applied to the numerical data, even though the AI suggests a default option."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show Data Labels"}),": Toggle the display of data labels directly on the bars. This is useful for highlighting specific values directly on the plot."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Color Space"}),": Customize the color gradient or scheme used in the plot. You can select a primary and secondary color to create a gradient effect that enhances the visual appeal and data clarity."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Bar plots are an essential tool for visualizing and comparing data across different categories. With Cubode-Agent, generating and customizing bar plots becomes a seamless process, allowing you to focus on interpreting your data rather than struggling with complex visualization tools. Whether you need a simple vertical bar plot or a more complex stacked bar plot, Cubode-Agent provides the flexibility and power to create the perfect visual representation of your data."}),"\n",(0,s.jsx)(t.h2,{id:"should-add-the-stacked-barplot-when-we-use-the-second-serie",children:"Should add the stacked barplot when we use the second serie"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);