import { trigger, animate, transition, style } from "@angular/animations";

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger("fadeInAnimation", [
    transition(":enter", [
      style({ transform: "translateX(-100%)" }),
      animate("200ms ease-in", style({ transform: "translateX(0%)" }))
    ]),
    transition(":leave", [
      animate("200ms ease-in", style({ transform: "translateX(-100%)" }))
    ])
  ]);
