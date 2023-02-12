export const AddShiftForm = () => {
    return (
        <div id="add_shift" class="form_popup">
            <div class="close" onclick="hide_form('add_shift');">
                X
            </div>
            <h2>Add shift</h2>
            <form id="form_add_shift" class="form_overlay" onSubmit="add_shift(event);">
                <label htmlFor="add_shift_date">
                    date
                </label>
                <input id="add_shift_date" value="" style="pointer-events:none;" readonly/>
                <input id="add_shift_roster_id" class="hidden_input" name="roster_id" value="" />
                <input id="add_shift_roster_day" class="hidden_input" name="roster_day" value="" />
                <label htmlFor="add_shift_user_id">
                    employee
                </label>
                <select id="add_shift_user_id">
                    <option value="1">
                        Vanessa Danai
                    </option>
                    <option value="2">
                        John Carlin
                    </option>
                    <option value="3">
                        Kaveh Danai
                    </option>
                </select>
                <label htmlFor="add_shift_am_pm">
                    shift
                </label>
                <select id="add_shift_am_pm">
                    <option value="am">
                        Day
                    </option>
                    <option value="pm">
                        Night
                    </option>
                </select>
                <button type="submit">
                    OK
                </button>
            </form>
        </div>
    )
}