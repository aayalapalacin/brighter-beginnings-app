
interface carouselSlideType{
    "background_image": string;
      "overlay_image": string;
      "container_bg_color": string;
      "heading": string;
      "subheading": string;
      "button_text": string;
      "button_link": string;
      "video_url": string;
      "video_button_text": String;
}

export interface classDojoDescription{
    "bullet_point":string
}

export interface homeContentType{  
    "title": string;
    "carousel_slides": carouselSlideType[];
    "classdojo_title": string;
    "we_provide_programs_title": string;
    "class_dojo_description":classDojoDescription[];
    "careers_heading": string;
} 
