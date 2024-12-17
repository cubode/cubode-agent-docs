
# Change Log 📜

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-17

### 🔥 Incoming 👀
🚀 Get ready for a game-changing update! Our next release will bring powerful new features to supercharge your data visualization workflow. Stay tuned for enhanced AI capabilities, smoother performance, and exciting new chart types that will take your analytics to the next level. Coming soon to transform how you work with data!

## [1.5.0] - 2024-11-28

### 🔥 New Features - Cubode AI Upgrade
- New AI pipeline released. 5 step process outlined as follows with model selection:
1. Metadata Augmentation & Context creation - Llama 3.1-8B
2. Metadata Trend Analysis - Llama 3.1-70B
3. Chart Suggestions - Llama 3.1-70B
4. Chart Suggestion Reflection - Llama 3.1-70B
5. Tool Calling - Llama 3.1-8B optimised for tool calling
- Automatic chart rendering once AI has finished processing, instead of waiting for all your charts, Cubode renders them individually once thr Cuboe AI engine has finished generating it.

### 🐛 Bug Fixes  
- Web socket message leakage fixed
---
## [1.4.2] - 2024-11-10

### 🔥 New Features - Auto Chart Detection
- Automatic empty chart detection 
- If a chart generated from the AI empty, auto detection filters them out and re-generates new ones.

### 🐛 Bug Fixes  
- Filter big fixed
- Manual dataset sorting fixed

## [1.4.1] - 2024-10-22

### 🔥 New Features  
- Automatic data sorting for Bar and Pie charts
- Added in Top 10 selection for Bar and Radar charts to isolate Top 10 values

[![Alt text](/img/top10.png)](/img/top10.png)
### 🐛 Bug Fixes  
- Bug fix on chart tooltip styling and labelling

## [1.4.0] - 2024-10-18

### 🔥 New Features  
- Automatic AI generated charts upon data upload
- Once a data file is dragged and uploaded the process to generate charts with AI is started automatically
- No longer the need to hit the generate button upon upload

[![Alt text](/img/ai_auto.png)](/img/ai_auto.png)

### 🐛 Bug Fixes  
- Bug fix on incorrect column identification for both longtext and datetime 
- Bug fixes on chart labels cut of once chart is exported

## [1.3.0] - 2024-10-15

### 🔥 New Features  
- Intelligent date feature decomposition
- Breaks down date columns into Month, Day, Year etc
- Improves overall dataset context and augments more refined AI generated charts

[![Alt text](/img/datetime_features.png)](/img/datetime_features.png)

## [1.2.0] - 2024-10-12

### 🔥 New Features  
- Parallel tool calling for agentic chart generation
- Improved augmentation of metadata file upload
- Grounding of AI generated charts with rulesets for each chart type

### 🐛 Bug Fixes  
- Hallucinations of column names from LLM

## [1.1.2] - 2024-10-07

### 🔥 New Features  
- Auto data typing identification for improving dataset augmentation
- Auto type setting and schema handling
[![Alt text](/img/data_typing_updates.png)](/img/data_typing_updates.png)

### 🐛 Bug Fixes  
- Fixed bugs on datetime column handling

## [1.1.1] - 2024-10-04

### 🔥 New Features  
- Added a new chart type: The word cloud plot
- Word cloud plot is a visual representation of text data, where the frequency of each word is represented by its size or color.
- AI generation for word cloud plot is also now supported

[![Alt text](/img/wordcloud.png)](/img/wordcloud.png)

### 🐛 Bug Fixes  
- Fixed bugs on data loading and chart rendering.

## [1.1.0] - 2024-10-02

**Summary**:We are excited to announce the release of Cubode Graph AI 1.X 🚀🚀. Cubode Graph AI blends the power and automation of AI with the flexibility human interaction to create stunning visualizations of your data.

### 🔥 New Features  
- Ability to add manual charts as well as AI generated charts.
- Connector added to Notion data bases to create real time visualisations from Notion data.
- State management for charts to keep your ideas and concepts consistent as you flick between different datatsets
- Responsive designs for mobile and desktop

### Other additions  
- Added documentation of how to use Cubode at in the canvas footer
- Fixed bugs regarding data filtering.

---

## [0.1.10] - 2024-09-22

### 🐛 Bug Fixes  
- Fixed issues with sidebar functionality. 
- Fixed bugs regarding data filtering.

---

## [0.1.9] - 2024-09-18  
**Summary**: Major overhaul with AI refactoring to improve reasoning and function calls, along with model upgrades.

### 🔥 New Features  
- Models upgraded to Llama 3.1-70B for reasoning and a fine-tuned Llama 3.1-8B optimized for tool use.

### 🐛 Bug Fixes  
- Fixed issues with exporting radar and heatmap plots to PNG.  
- Resolved tool-tip flickering on hover for interactive charts.  
- Fixed issue where the login modal occasionally appeared twice.

---

## [0.1.8] - 2024-09-15  
**Summary**: Documentation updates to guide users in building AI-powered charts.

### 🔥 New Features  
- Created comprehensive documentation for building data charts using AI.

### 🐛 Bug Fixes  
- Fixed export issues for radar and heatmap plots in PNG format.  
- Corrected erroneous user notifications 

---

## [0.1.71] - 2024-09-12  
**Summary**: Added user support integration for better app assistance.

### 🔥 New Features  
- Embedded user support for in-app and live help.

### 🐛 Bug Fixes  
- Solved export-to-PNG bugs for radar and heatmap plots.  
- Fixed an issue where the help chat widget wouldn’t close after minimizing.

---

## [0.1.7] - 2024-09-10  
**Summary**: Enhanced chart-sharing capabilities with new URL generation and Notion integration.

### 🔥 New Features  
- Automatic URL generation for chart sharing.  
- Dynamic embedding of charts into Notion.

### 🐛 Bug Fixes  
- Fixed issue where shared charts were not displaying properly due to incorrect data checking logic.
- Fixed issue with metadata extraction.

---

## [0.1.6] - 2024-09-08  
**Summary**: Enabled user collaboration with invitation functionality.

### 🔥 New Features  
- Added an invitation button for sharing access with other users.

---

## [0.1.5] - 2024-09-08  
**Summary**: Expanded chart options with radar and heatmap plots.

### 🔥 New Features  
- Introduced Radar plot functionality.  
- Introduced Heatmap plot functionality.

### 🐛 Bug Fixes  
- Fixed color scaling issue for heatmap plots in dark mode.

---

## [0.1.4] - 2024-09-07  
**Summary**: Added Radar and Heatmap plot features to enhance visualizations.

### 🔥 New Features  
- Introduced Radar plot functionality.  
- Introduced Heatmap plot functionality.

---

## [0.1.3] - 2024-09-05  
**Summary**: Improved dataset analysis and context awareness with schema analysis.

### 🔥 New Features  
- Automated schema analysis for dataset context in prompt augmentation.

---

## [0.1.2] - 2024-09-03  
**Summary**: Integrated Google authentication for sign-ins.

### 🔥 New Features  
- Added Google Sign In and Sign Up authentication.

---

## [0.1.1] - 2024-09-02  
**Summary**: Real-time plotting powered by AI introduced.

### 🔥 New Features  
- Integrated real-time interactive plot rendering using HTMX.

### 🐛 Bug Fixes  
- Fixed plotting components to handle aggregated data properly.  
- Resolved an issue where chart legends were overlapping the chart itself in smaller screens.

---

## [0.1.0] - 2024-09-01  
**Summary**: Initial beta release of the platform.

### 🔥 New Features  
- Beta version launched.

---

[Unreleased]: https://github.com/username/repository/compare/v1.0.0...HEAD  
[1.0.0]: https://github.com/username/repository/compare/v0.9.0...v1.0.0  
[0.9.0]: https://github.com/username/repository/releases/tag/v0.9.0  

---
