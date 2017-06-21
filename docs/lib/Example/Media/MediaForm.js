import React from 'react';
import { Control, Button, Field, Image, Input, Label, Level, Media, TextArea } from 'reactbulma';

export const MediaForm = () => {
  return (
   <Media>
     <Media left>
       <Image tag="p" size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
     </Media>
     <Media content>
       <Field>
         <Control>
           <TextArea placeholder="Add a comment..." />
         </Control>
       </Field>
       <Level>
         <Level tag="div" type="left">
           <Level tag="div" type="item">
             <Button color="info">Submit</Button>
           </Level>
         </Level>
         <Level tag="div" type="right">
           <Level tag="div" type="item">
             <Label checkbox>
               <Input type="checkbox" />
               {' '}
               Press enter to submit
             </Label>
           </Level>
         </Level>
       </Level>
     </Media>
   </Media>
  );
};

export default MediaForm;
