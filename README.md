# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? 
   - 1, "Within a Github action that runs whenever code is pushed."
   - Option 1 runs the tests on a centralized location with behavior that will be the same for different developers, unlike in option 2. 
   - Also, option 2 would require us to manually run the tests, while we can automate that process in option 1. 
   - And option 3 would be problematic, as we wouldn't want to constrict ourselves to finalizing our development before running tests. It would be a problem if were to discover issues with our code after we've claimed to finished it.

2. Would you use an end to end test to check if a function is returning the correct output?
   - No, a unit test would be better suited for such a scenario.

3. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? For this question, assume the "message" feature allows a user to write and send a message to another user.
   - No, you would want to do end-to-end testing for this scenario, because while you are testing a single feature, the messaging feature hinges on many other features of the application. It only makes sense to test the messaging feature within the context of messages being sent between two valid accounts, which need to be tested in an earlier part of the same testing suite.

4. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not? For this question, assume the "max message length" feature prevents the user from typing more than 80 characters.
   - Yes, such a feature can be tested on outside of the context of messaging, and since we're just testing a single feature of the application, it would make sense to use unit tests in this scenario.
