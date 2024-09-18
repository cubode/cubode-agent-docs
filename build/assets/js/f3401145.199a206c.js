"use strict";(self.webpackChunkgraph_docs=self.webpackChunkgraph_docs||[]).push([[945],{3302:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(4848),s=i(8453);const o={sidebar_position:2},r="Pie Plot",a={id:"Graphs/Pie Plot",title:"Pie Plot",description:"Table of Contents",source:"@site/docs/Graphs/Pie Plot.md",sourceDirName:"Graphs",slug:"/Graphs/Pie Plot",permalink:"/cubode-agent-docs/Graphs/Pie Plot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bar Plot",permalink:"/cubode-agent-docs/Graphs/Bar Plot"},next:{title:"Line Plot",permalink:"/cubode-agent-docs/Graphs/Line Plot"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is a Pie Plot?",id:"what-is-a-pie-plot",level:2},{value:"Key Characteristics:",id:"key-characteristics",level:3},{value:"Features of Pie Plots",id:"features-of-pie-plots",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"How to Generate a Pie Plot with Cubode-Agent",id:"how-to-generate-a-pie-plot-with-cubode-agent",level:2},{value:"Important Features for Proper Operation",id:"important-features-for-proper-operation",level:2},{value:"1. Series: Choosing the Column Category",id:"1-series-choosing-the-column-category",level:3},{value:"Example:",id:"example",level:4},{value:"2. Values: Choosing the Column for Numerical Values",id:"2-values-choosing-the-column-for-numerical-values",level:3},{value:"3. Customizing the Color Range",id:"3-customizing-the-color-range",level:3},{value:"Customization Options",id:"customization-options",level:2},{value:"Main Settings Menu",id:"main-settings-menu",level:3},{value:"Series Menu",id:"series-menu",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pie-plot",children:"Pie Plot"})}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#what-is-a-pie-plot",children:"What is a Pie Plot?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#features-of-pie-plots",children:"Features of Pie Plots"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#customization-options",children:"Customization Options"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#use-cases",children:"Use Cases"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#how-to-generate-a-pie-plot-with-cubode-agent",children:"How to Generate a Pie Plot with Cubode-Agent"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#important-features-for-proper-operation",children:"Important Features for Proper Operation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Pie plots are a popular and visually appealing way to represent data as proportions of a whole. They are particularly useful when you want to display the relative sizes of data categories, making it easy to compare parts of a dataset to the whole."}),"\n",(0,n.jsx)(t.p,{children:"This document provides an in-depth look at pie plots, their features, types, and how you can customize and generate them using Cubode-Agent."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-a-pie-plot",children:"What is a Pie Plot?"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Pie Plot"})," is a circular chart divided into sectors, where each sector represents a proportion of the whole. The size of each sector is proportional to the value it represents, providing a clear visual of how different categories contribute to the total."]}),"\n",(0,n.jsx)(t.h3,{id:"key-characteristics",children:"Key Characteristics:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Proportions"}),": Pie plots are ideal for showing the percentage or proportion of categories relative to the whole."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sectors"}),": Each category is represented by a sector, with its angle and area corresponding to its value."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Single Dataset"}),": Typically, pie plots are used to visualize a single dataset, making them straightforward and easy to interpret."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"features-of-pie-plots",children:"Features of Pie Plots"}),"\n",(0,n.jsx)(t.p,{children:"Pie plots come with a range of features that make them effective for data visualization:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Clear Proportions"}),": Easily display and compare the relative sizes of categories."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simple Interpretation"}),": Visually intuitive, even for those unfamiliar with the data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Highlighting"}),": Sectors can be highlighted or exploded to emphasize particular data points."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limited Categories"}),": Best used when there are a small number of categories, as too many can clutter the plot."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(t.p,{children:"Pie plots are used across various domains to visualize data:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Business"}),": Displaying market share of different companies or products."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Finance"}),": Illustrating budget allocations or expense distributions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Healthcare"}),": Showing the proportion of different medical conditions within a population."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Marketing"}),": Analyzing the distribution of customer demographics or survey results."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-generate-a-pie-plot-with-cubode-agent",children:"How to Generate a Pie Plot with Cubode-Agent"}),"\n",(0,n.jsx)(t.p,{children:"Generating a pie plot with Cubode-Agent is a straightforward process:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sign In / Login"}),": Access the Cubode-Agent platform with your credentials."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Upload Your CSV File"}),": Import the dataset you want to visualize as a pie plot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Click Generate"}),": Let the AI analyze your data and generate the pie plot automatically."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Select Pie Plot Type"}),": Navigate in our AI-generated plots until the pie plot is displayed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Customize"}),": Use the sidebar to customize your pie plot's appearance and settings, such as colors and labels."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Save or Export"}),": Once satisfied with your plot, you can save or export it for further use."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"important-features-for-proper-operation",children:"Important Features for Proper Operation"}),"\n",(0,n.jsx)(t.p,{children:"When using Cubode-Agent to generate pie plots, it's important to pay attention to several key features to ensure the agent functions correctly and produces accurate visualizations."}),"\n",(0,n.jsx)(t.h3,{id:"1-series-choosing-the-column-category",children:"1. Series: Choosing the Column Category"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Series"})," section, always choose the ",(0,n.jsx)(t.strong,{children:"Column Category"})," that contains categorical data. Categorical data refers to values that represent different categories or groups, which can be labeled or named. Examples of categorical data include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Product Types"}),': "Electronics", "Furniture", "Clothing"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Regions"}),': "North America", "Europe", "Asia"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Age Groups"}),': "Child", "Adult", "Senior"']}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example:"}),"\n",(0,n.jsx)(t.p,{children:'If your dataset contains a column called "Product Type" with values like "Electronics", "Furniture", and "Clothing", this would be an appropriate column to select in the Column Category. The agent will then use these categories to generate the sectors in the pie plot.'}),"\n",(0,n.jsx)(t.h3,{id:"2-values-choosing-the-column-for-numerical-values",children:"2. Values: Choosing the Column for Numerical Values"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Values"})," section, always choose the column that holds ",(0,n.jsx)(t.strong,{children:"numerical values"}),". This column is critical because it represents the data that will be used to determine the size of each sector in the pie plot."]}),"\n",(0,n.jsx)(t.p,{children:"Numerical values might include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sales Figures"}),": Total sales in dollars."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Quantities"}),": Number of items sold."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Percentages"}),": Percentage of the total each category represents."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"3-customizing-the-color-range",children:"3. Customizing the Color Range"}),"\n",(0,n.jsx)(t.p,{children:"Cubode-Agent allows you to customize the color range of your pie plots, which is especially useful for enhancing the visual appeal or highlighting specific data categories."}),"\n",(0,n.jsx)(t.p,{children:"To customize the color range:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Scroll to the ",(0,n.jsx)(t.strong,{children:"Color Space"})," setting in the customization sidebar."]}),"\n",(0,n.jsxs)(t.li,{children:["At the end of the Color Space options, you'll find the ability to choose ",(0,n.jsx)(t.strong,{children:"Custom Colors"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the ",(0,n.jsx)(t.strong,{children:"Primary Color"})," and ",(0,n.jsx)(t.strong,{children:"Secondary Color"})," to set the gradient or contrast for the sectors."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This allows you to create a color scheme that aligns with your data's thematic context or your personal preferences. For instance, you could use a green-to-blue gradient to indicate different levels of success or performance."}),"\n",(0,n.jsx)(t.h2,{id:"customization-options",children:"Customization Options"}),"\n",(0,n.jsxs)(t.p,{children:["Cubode-Agent provides a robust set of customization options to tailor your pie plots to your specific needs. These options are divided into two main settings menus: the ",(0,n.jsx)(t.strong,{children:"Main Settings Menu"})," and the ",(0,n.jsx)(t.strong,{children:"Series Menu"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"main-settings-menu",children:"Main Settings Menu"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Main Settings Menu"})," allows you to customize several critical aspects of your pie plot:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chart Title"}),": The title of the chart, which gives a clear indication of what the plot represents. This is automatically defined by the AI based on the data and plot type."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chart Subtitle"}),": A secondary title that provides additional context or details about the plot. This is also defined by the AI."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Pie Type"}),": Choose from different styles of pie plots:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Basic"}),": A standard circular pie plot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Ring"}),": A donut-shaped plot with a hole in the center, which can be used to add another layer of information or simply for a different aesthetic."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Half Ring"}),": A semi-circular plot, which can be useful for emphasizing a comparison between two main categories."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rose"}),": A variation where sectors extend radially from the center, often used to show variation in magnitude across categories."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Legend"}),": Choose to display or hide the legend, which explains the data represented in the plot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show Percentage"}),": Toggle the display of percentages within each sector to clearly indicate the proportion each category represents."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show as Currency"}),": Display the values as currency, useful when dealing with financial data where the monetary aspect needs to be emphasized."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"series-menu",children:"Series Menu"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Series Menu"})," offers additional options to fine-tune the data representation within your pie plot:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Series Name"}),": You can add or change the name of the series. The series name is used to identify the dataset being represented by the pie plot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Column Category and Values"}),": Although these are initially defined by the AI, you can change the selected column category (categorical data) and values (numerical data) if needed. This flexibility allows you to adjust the data that the pie plot represents."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Aggregation"}),": Choose between two types of aggregation:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sum"}),": Aggregates the total value for each category. Useful when you want to represent the total sales, quantities, or other summable data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Count"}),": Counts the occurrences of each category. This is helpful when you want to visualize the frequency or distribution of categorical data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show Data Labels"}),": Toggle the display of data labels directly on the sectors. This is useful for clearly indicating the percentage or value each sector represents."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Color Space"}),": Customize the color gradient or scheme used in the plot. You can select a primary and secondary color to create a gradient effect that enhances the visual appeal and data clarity."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Pie plots are an effective tool for visualizing the proportions of different categories within a whole. With Cubode-Agent, generating and customizing pie plots becomes a seamless process, allowing you to focus on interpreting your data rather than struggling with complex visualization tools. Whether you need a simple pie plot or a more detailed one with exploded sectors, Cubode-Agent provides the flexibility and power to create the perfect visual representation of your data."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);