import Link from "next/link";
import React from "react";

const PrivacyPage = () => {
  return (
    <>
      <section className="estiva_gradient">
        <div className="container mx-auto">
          <div className="banner py-20">
            <h1 className="text-white text-center">terms-conditions</h1>
            <h3 className="text-white text-center">- By DigiTechMate</h3>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8 px-[5%]">
        <p className="">
          By enrolling in a course provided by Digitechmate, you agree to be
          legally bound by the following terms and conditions (these “Terms and
          conditions of enrolment”).
          <br />
          <br />
          A reference in these Terms and conditions to “we”, “us” or “our” is a
          reference to Digitechmate.
          <br />
          <br />
          If you require any assistance or clarification with any of the below,
          you are welcome to contact.
        </p>

        <div className="information_provide mt-10 ">
          <ul className="flex flex-col gap-7">
            <li>
              {" "}
              <h2>1. Your Declaration</h2>
            </li>
            <li>
              <h3>1.1 By enrolling in a course with us, you:</h3>
            </li>
            <li>
              1 . Confirm that you have access to a suitable workplace if
              necessary to fulfil course requirements; to a computer with an
              internet connection and Microsoft Office software or similar; the
              ability to view YouTube; and any additional hardware, software or
              equipment as specified on our website for the course in which you
              are enrolling (your “Course”).
            </li>
            <li>
              2. Confirm that you&apos;ve read and understood all the
              information in this document, the relevant policies links, and our
              Code of ethics, and that you agree to act in accordance with them.
            </li>
            <li>
              3. Accept that it&apos;s your responsibility to ensure that the
              personal information you provide to us is kept current. Any
              changes to your name, address, email address, phone numbers,
              payment options or banking details should be sent to us as soon as
              practicable with any relevant documentation.
            </li>
            <li>
              4. Agree to retain a current email address by which you can be
              contacted for the duration of your course, and through which we
              may communicate formally with you via email and through the
              learning environment.
            </li>
            <li>
              5. Confirm that you understand the challenges in accessing a
              suitable workplace, particularly for assessment tasks for students
              that are not of working age.
            </li>
          </ul>

          <div className="payment_terms mt-10 ">
            <ul className="flex flex-col gap-7">
              <li>
                {" "}
                <h2>2. Payment terms</h2>
              </li>
              <li>
                <h3>2.1 By enrolling in a course with us, you:</h3>
              </li>
              <li>
                1. Confirm that you&apos;ve read and understood the fees
                associated with your Course and agree to pay your requisite fees
              </li>
              <li>
                2. No payment will be refunded and will not be adjusted in any
                other course.
              </li>
              <li>
                <h3>
                  2.2 If you fail to pay any part of the Course fee by the due
                  date, we reserve the right to:
                </h3>
              </li>
              <li>
                1. Restrict access to our institute/ classrooms/ online learning
                environment
              </li>
              <li>
                2. Withhold marking of assessments and issuance of
                qualifications or statements of attainment for partial
                completion;
              </li>
              <li>3. Notify relevant credit agencies of your default.</li>
              <li>
                <h3>
                  2.3 If you&apos;re paying your Course fee by instalments, you:
                </h3>
              </li>
              <li>
                1. Restrict access to our institute/ classrooms/ online learning
                environment Must use a valid Debit/ Credit card or bank account
                or UPI;
              </li>
              <li>
                2. Must agree to a Direct Debit Request Service Agreement;
              </li>
              <li>
                3. Must pay all such instalments on or before the due dates; and
                will be liable to pay late fine if fee paid after due date.
              </li>
              <li>
                4. Remain liable for unpaid instalments event if you finish your
                course early;
              </li>
              <li>
                5. Will not be entitled to be issued with a qualification until
                you have paid your course fee in full;
              </li>
              <li>
                6. Will not be entitled to be issued with a statement of
                attainment for a module until you have paid all fees in respect
                of that module.
              </li>
              <li>
                <h3>
                  2.4. You acknowledge that the Course Fee doesn’t include:
                </h3>
              </li>
              <li>
                1 . Any hardware, software, printed materials (fees may apply if
                these are required) or equipment for your course, as listed as
                requirements on our website;
              </li>
            </ul>
          </div>

          <div className="changing_course mt-10">
            <ul className="flex flex-col gap-7">
              <li>
                {" "}
                <h2>3 . Changing course</h2>
              </li>
              <li>
                4.1. You are not allowed to change your course without a proper
                application letter. Course change request can only be accepted
                for upgrade, no downgrade request will be accepted, course can
                be changed where fee structure is appreciated.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
