



    //To recall Matter Elements.
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

    //Variables for Matter Elements and for the Game.
        //Variables for Matter Elements.
            var world, engine;

        //Variable for the tower bricks.


        //Variable for the cnanon launcher.
            var canon;

        //Variable for the Canonball.
            var canonBall;

        //Variable for the platform.
            var surface;

        
    //This function creates Canvas as well as Matter Elements.
        function setup() {

            //Canvas
                var canvas = createCanvas(1200,600);

            //Engine on which the Elements of Matter run
                engine = Engine.create();

            //To create world.
                world = engine.world;

            //To create the platform.
                surface = new Surface(600, 550, 1200, 10);





            //To create a renderer to view the Matter bodies.
                var render = Matter.Render.create({ 
                    element: document.body,
                    engine: engine,
                    options: { 
                        width: 1200, 
                        height: 600, 
                        showAngleIndicator: true,
                        showVelocity: true,
                        wireframes: true
                    } 
                    }); 

                Matter.Render.run(render);  
        }


    //This functions displays the Matter elements.
        function draw() {

            //Background color.
                background(189, 253, 255);

            //This updates the Matter Engine.
                Engine.update(engine);

            //To display the platform.
                surface.display();

            //To display bricks.

        }




        

        

