# task
I used overmind for state managment, react-router for routinng, divided the components into either pages or components(which are used to build up the pages)
I used react's profiler API to collect rendering measurments for the test data.
I used the link in the task description as a dummy api.
The langding page has 2 sections .
The first one will lead you to a page where the test data is fetched displayed, and the rendering data is measured.
For performance section, I save the data that is collected everytime the page renders in dictionary with the key being the timestamp.
The data is also saved in the localstorage
When you open the performance page you could pick wich timestamp you would like to show.
When you click on any row in the table it redirects you to another page showing the data.
