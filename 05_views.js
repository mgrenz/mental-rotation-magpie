// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside; <br /> fügt Absatz hinzu
  text: `Welcome to the mental rotation experiment and thank you for your participation.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This experiment investigates the ability of mental rotation.
            <br />
            <br />
            In short time you will be presented with pictures of 2 representations of rotated 3-dimensional objects. Your task will be to judge whether the two representations depict the same or different objects. To indicate your choice you are asked to press the respective key on your keyboard, 'f' indicating the two objects are the same, 'j' indicating the two representations belong to different objects. (Don't worry, there will be a reminder on the trial screens.)
            <br />
            <br />
            The main trial will start after a short practice session. In total you will see 60 pictures, 12 in the practice session and 48 in the main trial. Please remove any distractions from your surrounding.
            <br />
            <br />
            Try to be as fast and accurate as possible.`,
  buttonText: 'go to trials'
});

const begin = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin',
  title: 'Main trial',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside; <br /> fügt Absatz hinzu
  text: `By clicking the button below you will start the main trial. Your task is again to judge whether the two representations depict the same ('f') or different ('j') objects.`,
  buttonText: 'begin the experiment'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// key-press implementation


const key_press_main = magpieViews.view_generator("key_press", {
  trials: 48,
  name: 'key_press_task',
  data: trial_info.key_press,
  pause: 250,
});

const key_press_practice = magpieViews.view_generator("key_press", {
  trials: 12,
  name: 'key_press_practice',
  data: trial_info.key_press,
  pause: 250,
});



// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
