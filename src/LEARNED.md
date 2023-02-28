
Feb. 27
• Input element values can either be controlled or uncontrolled. If the value is going to be changed (controlled), then the input must be accompanied by a onChange() event handler.
• The 'name' of the input element must exactly match the 'key' property inside the object in order to use object destructuring to dynamically change the value of that object property key. If the name does NOT exactly match, then the result will be a new object key being added to the existing object database.
• An if statement can be used with setState to execute only if the condition is met. Such as... checking if a specific input element 'name' exists as an object property 'key' to then execute the setState.