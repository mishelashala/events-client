import * as React from "react";
import { SaveButton } from "../atoms/SaveButton";

export interface IEventFormProps {
  eventName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSave: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const EventForm: React.FC<IEventFormProps> = ({ eventName, onChange, onClickSave }) => {
  return (
    <div>
      <form id="createEventForm">
        <label>
          Name
          <input
            name="name"
            id="createEventForm-eventName"
            type="text"
            required
            onChange={onChange}
            value={eventName}
          />
        </label>

        <SaveButton onClick={onClickSave}>SAVE</SaveButton>
      </form>
    </div>
  );
};
