import React from "react";

function Form() {
    return (
        <div>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="formbold-input-wrapp formbold-mb-3">
                    <label for="firstname" class="formbold-form-label"> Name </label>

                    <div>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="First name"
                            class="formbold-form-input"
                        />

                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            class="formbold-form-input"
                        />
                    </div>
                </div>
                <div class="formbold-mb-3">
                    <label for="email" class="formbold-form-label"> Email </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        class="formbold-form-input"
                    />
                </div>

                <div class="formbold-mb-3 formbold-input-wrapp">
                    <label for="phone" class="formbold-form-label"> Phone </label>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone number"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-mb-3">
                    <label for="age" class="formbold-form-label"> City code </label>
                    <input
                        type="text"
                        name="age"
                        id="age"
                        placeholder="ex:205"
                        class="formbold-form-input"
                    />
                </div>

                <div class="formbold-mb-3">
                    <label for="age" class="formbold-form-label"> City Development Index </label>
                    <input
                        type="text"
                        name="age"
                        id="age"
                        placeholder="ex:205"
                        class="formbold-form-input"
                    />
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Gender</label>

                    <select class="formbold-form-input" name="occupation" id="occupation">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Relevant Experience </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Enrolled University </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>
                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Education level </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Major Discipline </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Experience </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Company size </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Company type </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Year gap between last and current job </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="city" class="formbold-form-label"> Training hours </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="ex: New York"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-checkbox-wrapper">
                    <label for="supportCheckbox" class="formbold-checkbox-label">
                        <div class="formbold-relative">
                            <input
                                type="checkbox"
                                id="supportCheckbox"
                                class="formbold-input-checkbox"
                            />
                            <div class="formbold-checkbox-inner">
                                <span class="formbold-opacity-0">
                                    <svg
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                        class="formbold-stroke-current"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        I agree to the defined
                        <a href="#"> terms, conditions, and policies</a>
                    </label>
                </div>

                <button class="formbold-btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;