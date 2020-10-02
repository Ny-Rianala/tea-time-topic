# Tea Time Topic

One last vanilla javascript challenge for the road 🧨

Your task today is to build a new tool that will help us decide which topic we'll discuss during the next tea break.

The web app displays the list of topics, and we'll be able to vote for the ones we like. You'll also be able to downvote a topic that you don't really find interesting. And of course, you'll be able to propose a new topic that you have in mind, via a form.

Once a subject is discussed, you'll be able to archive the subject.

### Screenshot

![assets/Screenshot_2020-10-01_at_19.00.35.png](assets/Screenshot_2020-10-01_at_19.00.35.png)

Figma link : [https://www.figma.com/file/c0VGLdStNQYkXRKx1PKBAD/Tea-Time-Topic?node-id=0%3A1](https://www.figma.com/file/c0VGLdStNQYkXRKx1PKBAD/Tea-Time-Topic?node-id=0%3A1)

API link : https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json

### User stories

-   Users should be able to see the list of subject hosted on [this API url.](https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json)
-   The topics with an empty attribute "discussedOn" will appear on the "Next topics", while the ones with a date present on the attribute will be listed on the Past Topics list.
-   Once you have the data from the url, use local storage to store and manage the data.
-   Users should be able to add a new topic to the list.
-   Users should be able to upvote, or downvote an element.
-   The list of next topics are sorted depending on their Like / Dislike ratio, ascending. For example, a topic with 6 upvotes and 3 downvotes (ratio 6-3 = **3**) will appear before one with 4 upvotes and 3 downvotes (ratio 4-3, **1**)
-   Once a topic has been discussed, Users should be able to archive a subject, by clicking the archive button (pink button on the screenshot). The archive topic will be now shown on the list of past topics, which is sorted from from the latest topic discussed to the earliest. The action of "archiving" a topic will add a date automatically to the topic.
-   Once a topic is archived, you should be able to delete it completely from the app, by clicking the grey trash icon. This icon only appears on the list of past topics.

### Grading List

Here's a list of details that I'll check, for grading your project. Use it to guide your decisions about what to do next.

-   Is there a clear documentation explaining your project? (see Student Repost section)

-   Do I see the list from the API appearing on the page?

-   Can I add a new element?

-   Is the list sorted as the statement asked?

-   Can I upvote a topic?

-   Can I downvote topic?

-   Does the list update the sorting in the right way after a vote?

-   Can I archive an element? (the box icon)

-   Does an archived element go into the Past Topic list?

-   Can I delete an element from the Past Topic list? (the trash icon)

-   If I refresh the page, is the state of the app saved or lost?

-   Is the code structured in modules?

-   Is the design responsive?

### Student report

1 -  Can you explain the structure of your files?  
   - Firstly, I fetch all the data which contain the list
  - Then, I created a form so the users can add into the list.
  - Create a function that will handle the submit button in the add button. Inside of this function, I created a variable which show the input. Also, the form will not be submitted if the users do not add anything. 
  - After that, I push the items to the state. 
  - I created a new function that will show the output.
  - I added local storage to save the items.
  - There are eventListeners that handle the submit button and list.  
2 -   Any project improvements possible?
  - Now, I understand how to use form and submitting it.
  - Also, I understand little bit how localStorage works.  
3 -   What was your experience?  
4 -   What have you learned/improved?  
5 -   Any wisdom to share? :)

Fork this repo and clone your fork. You have until 16h30 to complete the project. Stop coding a bit earlier to take some time documenting your project in the readme.

Good luck team 🔥💪 and happy coding 👍



