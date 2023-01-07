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
                    <label for="city_code" class="formbold-form-label"> City Code </label>
                    <input
                        type="number"
                        name="city_code"
                        id="city_code"
                        placeholder="ex:205"
                        class="formbold-form-input"
                    />
                </div>

                <div class="formbold-mb-3">
                    <label for="city_dev_index" class="formbold-form-label"> City Development Index </label>
                    <input
                        type="number"
                        name="city_dev_index"
                        id="city_dev_index"
                        placeholder="ex:0.24"
                        class="formbold-form-input"
                    />
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Gender</label>
                    <select class="formbold-form-input" name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Experience</label>
                    <select class="formbold-form-input" name="experience" id="experience">
                        <option value="has_experience">Has relevant experience</option>
                        <option value="no_experience">No relevant experience</option>
                    </select>
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Enrolled University</label>
                    <select class="formbold-form-input" name="university" id="university">
                        <option value="full_time">Full time course</option>
                        <option value="part_time">Part time course</option>
                        <option value="no_enrollment">No enrollment</option>
                    </select>
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Education level</label>
                    <select class="formbold-form-input" name="education" id="education">
                        <option value="high_school">High School</option>
                        <option value="graduate">Graduate</option>
                        <option value="masters">Masters</option>
                        <option value="phd">PhD</option>
                    </select>
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Major Discipline</label>
                    <select class="formbold-form-input" name="discipline" id="discipline">
                        <option value="stem">STEM</option>
                        <option value="humanities">Humanities</option>
                        <option value="arts">Arts</option>
                        <option value="no_major">No major</option>
                        <option value="business">Business Degree</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="experience" class="formbold-form-label"> Experience </label>
                        <input
                            type="number"
                            name="experience"
                            id="experience"
                            placeholder="ex: 5"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="company_size" class="formbold-form-label"> Company size </label>
                        <input
                            type="number"
                            name="company_size"
                            id="company_size"
                            placeholder="ex: 500"
                            class="formbold-form-input"
                        />
                    </div>
                </div>

                <button class="formbold-btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;