const PrivacyPolicy = () => {
  const policyText = `TeenCents Privacy Policy
Effective Date: May 15, 2026  |  Last Updated: May 15, 2026

TeenCents ("we," "our," or "us") is a personal finance app designed to help teens aged 13 and older build healthy money habits. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
By using TeenCents, you agree to the practices described in this policy. If you do not agree, please do not use the app.

1. Who This App Is For
TeenCents is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child under 13 has created an account, please contact us immediately at the email address below and we will delete the account and all associated data.

2. Information We Collect
2.1 Information You Provide
• Account information: your name and email address when you sign up
• Financial data: income entries, hustle logs, goal contributions, spending records
• Goals: the savings goals you create, including names and target amounts
• Learning progress: lessons completed, quiz responses, topics explored
• Check-ins: mood and spending responses you submit
• AI interactions: prompts you send to the AI Coach feature (powered by Google Gemini)

2.2 Information Collected Automatically
• Usage data: which features you use, how often, and for how long
• Session data: app open/close times, entry points, lessons completed per session
• XP and streak data: your experience points and daily activity streaks
• Device information: app version, operating system (not your device ID or IMEI)

2.3 Information We Do Not Collect
• We do not collect your real bank account or payment card information
• We do not collect your location
• We do not collect contacts or photos
• We do not collect advertising identifiers

3. How We Use Your Information
We use the information we collect to:
• Create and maintain your account
• Sync your financial data across your devices
• Calculate your XP, streaks, and level progress
• Personalise your learning experience and AI Coach responses
• Send you progress reminders and streak notifications (if enabled)
• Improve the app based on usage patterns
• Diagnose and fix technical issues
• Comply with legal obligations
We do not use your data for advertising. We do not sell your data to third parties.

4. How Your Data Is Stored
4.1 On Your Device
TeenCents stores your financial data locally on your device using encrypted storage. This means the app works even when you are offline, and your data loads instantly without waiting for a network request.

4.2 In the Cloud
Your data is also synced to our cloud database (Supabase), hosted on Amazon Web Services (AWS) servers located in the United States. Your data is protected by:
• Encrypted connections (HTTPS/TLS) for all data in transit
• Row-level security policies that ensure each user can only access their own data
• Unique user identifiers that scope all data to your account

4.3 AI Coach Feature
When you use the AI Coach feature, your prompt is sent to Google Gemini via a secure server-side function. Your prompt is processed by Google and a response is returned. We do not store your raw prompts permanently. Google's use of data submitted to Gemini is governed by Google's own privacy policy.

5. Information Sharing
We share your information only in the following limited circumstances:

5.1 Service Providers
• Supabase: our database and authentication provider. Supabase stores and syncs your account data.
• Google (Gemini): processes AI Coach prompts on our behalf. Only the text of your prompt is sent — no account details or financial data.
• Apple: the App Store platform handles app distribution and in-app purchase processing if applicable.

5.2 Legal Requirements
We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, safety, or property of TeenCents, our users, or others.

5.3 Business Transfers
If TeenCents is acquired or merged with another company, your information may be transferred as part of that transaction. We will notify you before your data is transferred and becomes subject to a different privacy policy.

5.4 No Advertising or Data Selling
We do not sell, rent, or share your personal information with advertisers or data brokers. Ever.

6. Data Retention
We retain your data for as long as your account is active. If you delete your account:
• Your account and all associated data will be permanently deleted within 30 days
• Anonymised, aggregated usage statistics may be retained (these cannot be linked back to you)
• Backups containing your data will be purged within 90 days

7. Your Rights and Choices
7.1 Access Your Data
You can view all your financial data, goals, and progress directly within the app at any time.

7.2 Correct Your Data
You can edit your name and financial entries directly in the app.

7.3 Delete Your Account
You can delete your account and all associated data from the Me tab in the app. This action is permanent and cannot be undone. All your financial data, goals, hustle logs, and progress will be erased.

7.4 Opt Out of AI Features
The AI Coach feature is optional. You can simply not use it. Prompts are only sent to Google Gemini when you actively tap the AI Coach and submit a question.

7.5 Notifications
You can enable or disable push notifications in your device settings at any time.

8. Children's Privacy (COPPA)
TeenCents is designed for users aged 13 and older. We comply with the Children's Online Privacy Protection Act (COPPA).
• We do not knowingly collect personal information from children under 13
• Users are required to confirm they are 13 or older during sign-up
• If we discover a user is under 13, we will promptly delete their account and data
• Parents or guardians who believe their child under 13 has an account should contact us immediately
If you are a parent or guardian and have concerns about your teen's use of TeenCents, you can contact us to request access to or deletion of your teen's account data.

9. Security
We take the security of your data seriously. Our measures include:
• Encrypted local storage on your device
• TLS/HTTPS encryption for all data in transit
• Row-level security in our database (users can only access their own data)
• Server-side API key management (no sensitive keys stored in the app)
• Regular security reviews of our sync and authentication architecture
No method of transmission or storage is 100% secure. If you believe your account has been compromised, please contact us immediately.

10. Third-Party Links and Services
The app may contain links to external resources or reference third-party services (such as financial education content). We are not responsible for the privacy practices of those third parties. We encourage you to read their privacy policies before interacting with them.

11. Financial Disclaimer
TeenCents is an educational and personal finance tracking tool. It is not a licensed financial advisor, broker, or bank. The content in the app, including lessons and AI Coach responses, is for informational and educational purposes only and does not constitute financial advice. Always consult a qualified financial professional for decisions about your money.

12. AI-Generated Content Disclosure
The AI Coach feature in TeenCents generates responses using Google Gemini, a large language model. Responses are AI-generated and may not always be accurate, complete, or appropriate for your specific situation. Do not rely solely on AI Coach responses for financial decisions.

13. Changes to This Policy
We may update this Privacy Policy from time to time. When we do:
• We will update the "Last Updated" date at the top of this document
• For significant changes, we will notify you in the app or by email
• Your continued use of TeenCents after changes take effect means you accept the updated policy

14. Contact Us
If you have questions, concerns, or requests about this Privacy Policy or your data, please contact us:
TeenCents Support
Email: info@teencents.ai
We aim to respond to all privacy-related requests within 5 business days.

This privacy policy was last reviewed on May 15, 2026.`;

  return (
    <main className="min-h-screen bg-background text-foreground font-body px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-flex mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to home
        </a>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <div className="surface-card rounded-2xl p-6 sm:p-8 border border-border/70">
          <article className="whitespace-pre-line font-body text-sm sm:text-base text-foreground/90 leading-8">
            {policyText}
          </article>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
