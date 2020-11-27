var emails = [{
    "mailId": 1,
    "sender": "Larry Gardner",
    "subject": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "read",
    "email_body": `Hello,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper non sapien vitae rutrum. Mauris ac enim eget nisl blandit malesuada. Donec tellus justo, auctor quis consectetur ac, interdum in ante. Sed imperdiet arcu auctor, interdum augue ac, tristique libero. Pellentesque at auctor ipsum, sit amet suscipit nulla. Integer egestas lobortis aliquam. Maecenas fringilla turpis nunc, rhoncus rhoncus neque ornare non. Duis ac sodales risus.

    Praesent pharetra odio ut luctus ultricies. Donec consectetur fringilla nisi mollis congue. Mauris ac imperdiet libero. Aliquam bibendum venenatis dapibus. Sed cursus vulputate nunc, quis congue purus rhoncus a. Praesent dapibus ac dui nec egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
},
{
    "mailId": 2,
    "sender": "Jane Doe",
    "subject": "Nullam pretium ante dui, at aliquam mauris eleifend eget",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "unread",
    "email_body": `Hello,
    Nullam pretium ante dui, at aliquam mauris eleifend eget. Maecenas sit amet velit a orci ultricies rutrum. Donec tincidunt, ligula quis lobortis ornare, orci dui eleifend erat, eget sagittis enim odio sit amet ex. Cras elementum sapien nisi, et porta magna finibus eu.

    Morbi pharetra orci at ex consectetur tristique. Donec felis augue, commodo placerat sodales ut, faucibus ut mauris. Donec eros est, sagittis nec egestas et, sagittis nec odio. Nulla sit amet vestibulum risus. Proin eros ante, dictum in vestibulum finibus, vulputate interdum est. Morbi pulvinar enim a laoreet malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`
},
{
    "mailId": 3,
    "sender": "Overleaf",
    "subject": "Welcome to Overleaf",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "unread",
    "email_body": `Hi,

    Thanks for signing up to Overleaf! If you ever get lost, you can log in again 
    with the email address 'en17cs301046@medicaps.ac.in'.

    If you're new to LaTeX, take a look at our Help Guides and Templates.

    PS. We love talking to our users about Overleaf.
    Reply to this email to get in touch with us directly, whatever the reason.
    Questions, comments, problems, suggestions, all welcome!`
},
{
    "mailId": 4,
    "sender": "Nit",
    "subject": "Feeling unorganized? Overwhelmed?",
    "date": "Jul 10, 2020",
    "time": "8:44",
    "status": "unread",
    "email_body": `en17cs301046,

    Nit here with Appy Pie,

    I just put together a list of the 37 most effective productivity tools to help you get more organized, increase productivity and be more on top of your tasks.

    See the top 39 best, office management software for better logistics and productivity

    Even if you find just one new tool to make your life easier, it might be worth a look.

    To Your Success,
    Nit
    Customer Success Manager
    Appy Pie

    P.S. When you’re ready, here are three ways we can help you increase sales and revenue:
    1. Get a free mobile app for your business that will get your current customers to be more loyal and increase sales. 
    It’s free to get started, easy to use and guaranteed to increase sales from your current customers. Get your free mobile app here
    2. Have you heard about mobile apps, but you’re not sure if you need one? 
    Get a free Revenue Audit from one of our specialists and we’ll tell you if a mobile app is right for your business. 
    Schedule a Revenue Audit here
    3. Register for one of our free world-class courses to learn everything from how to optimize an Instagram profile to how to rank higher on Google. 
    Register for a free course here`
},
{
    "mailId": 5,
    "sender": "Larry Gardner",
    "subject": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "read",
    "email_body": `Hello,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer quis mattis enim. Sed pellentesque felis est, at sodales ligula lobortis sit amet. 
    Cras laoreet sem lectus. Maecenas nisi dolor, mollis a feugiat ut, porta vitae magna. 
    Ut vitae feugiat metus, vel bibendum nulla. Pellentesque at pharetra nisi. 
    Aenean eget sem ex. Praesent quis velit vitae sapien venenatis fringilla. 
    Vivamus a libero vitae est finibus varius in in enim. Maecenas sed aliquet leo.
    <br>

    Sed tristique consectetur neque in consequat. Nullam non lacinia dolor. 
    Nunc ut eleifend ligula. Ut id sollicitudin elit, a ornare diam. 
    Mauris justo nisl, cursus sed purus eu, convallis malesuada enim.
    Nam laoreet iaculis interdum.`
},
{
    "mailId": 6,
    "sender": "Jane Doe",
    "subject": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "unread",
    "email_body": `Hello,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer quis mattis enim. Sed pellentesque felis est, at sodales ligula lobortis sit amet. 
    Cras laoreet sem lectus. Maecenas nisi dolor, mollis a feugiat ut, porta vitae magna. 
    Ut vitae feugiat metus, vel bibendum nulla. Pellentesque at pharetra nisi. 
    Aenean eget sem ex. Praesent quis velit vitae sapien venenatis fringilla. 
    Vivamus a libero vitae est finibus varius in in enim. Maecenas sed aliquet leo.`
},
{
    "mailId": 7,
    "sender": "Overleaf",
    "subject": "Welcome to Overleaf",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "read",
    "email_body": `Hi,

    Thanks for signing up to Overleaf! If you ever get lost, you can log in again 
    with the email address 'en17cs301046@medicaps.ac.in'.

    If you're new to LaTeX, take a look at our Help Guides and Templates.

    PS. We love talking to our users about Overleaf.
    Reply to this email to get in touch with us directly, whatever the reason.
    Questions, comments, problems, suggestions, all welcome!`
},
{
    "mailId": 8,
    "sender": "Nit",
    "subject": "Feeling unorganized? Overwhelmed?",
    "date": "Jul 10, 2020",
    "time": "8:44",
    "status": "unread",
    "email_body": `en17cs301046,

    Nit here with Appy Pie,

    I just put together a list of the 37 most effective productivity tools to help you get more organized, increase productivity and be more on top of your tasks.

    See the top 39 best, office management software for better logistics and productivity

    Even if you find just one new tool to make your life easier, it might be worth a look.

    To Your Success,
    Nit
    Customer Success Manager
    Appy Pie

    P.S. When you’re ready, here are three ways we can help you increase sales and revenue:
    1. Get a free mobile app for your business that will get your current customers to be more loyal and increase sales. 
    It’s free to get started, easy to use and guaranteed to increase sales from your current customers. Get your free mobile app here
    2. Have you heard about mobile apps, but you’re not sure if you need one? 
    Get a free Revenue Audit from one of our specialists and we’ll tell you if a mobile app is right for your business. 
    Schedule a Revenue Audit here
    3. Register for one of our free world-class courses to learn everything from how to optimize an Instagram profile to how to rank higher on Google. 
    Register for a free course here`
},
{
    "mailId": 9,
    "sender": "Jane Doe",
    "subject": "Quisque sem ligula, malesuada sed odio id, hendrerit pellentesque lorem",
    "date": "Nov 8, 2020",
    "time": "13:30",
    "status": "unread",
    "email_body": `Hello,
    Quisque sem ligula, malesuada sed odio id, hendrerit pellentesque lorem. Mauris posuere massa a consectetur laoreet. Sed euismod ipsum diam, at posuere felis semper ac. Vivamus blandit gravida nibh sed vestibulum. Donec hendrerit aliquet enim, sit amet lacinia lectus tincidunt eget. Cras sit amet urna lectus. Praesent rutrum tellus sit amet tempus fermentum. Nulla in dui pharetra, auctor mauris eget, rutrum nulla. Proin ut magna at odio pretium vestibulum a vel odio. In at pellentesque turpis. Vestibulum et ultricies sem, et ultrices ante. Mauris tempus ultricies euismod.`
}];