"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    const { i18n } = useTranslation();
    const isChinese = i18n.language === 'zh-HK' || i18n.language === 'zh';

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">
                            {isChinese ? '隱私條款' : 'Privacy Policy'}
                        </h1>

                        <div className="prose prose-lg max-w-none">
                            {isChinese ? (
                                <div className="space-y-6">
                                    <section>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            本隱私政策適用於 TripPals（以下簡稱「應用程式」）的移動設備版本（以下簡稱「服務提供商」），該應用程式為免費服務。此服務旨在「按現狀」使用。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">資訊收集和使用</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            當您下載和使用應用程式時，應用程式會收集資訊。此資訊可能包括以下資訊：
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>您訪問的應用程式頁面、訪問時間和日期、在這些頁面上花費的時間</li>
                                            <li>您在移動設備上使用的作業系統</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            應用程式收集您設備的位置，這有助於服務提供商確定您的大致地理位置並以下列方式使用：
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li><strong>地理位置服務：</strong>服務提供商利用位置資料提供個性化內容、相關推薦和基於位置的服務等功能。</li>
                                            <li><strong>分析和改進：</strong>聚合和匿名化的位置資料有助於服務提供商分析用戶行為、識別趨勢並改善應用程式的整體性能和功能。</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            為了獲得更好的體驗，在使用應用程式時，服務提供商可能需要您向我們提供某些個人識別資訊。服務提供商請求的資訊將由他們保留並按照本隱私政策中描述的方式使用。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">第三方存取</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            只有聚合的、匿名化的資料會定期傳輸給外部服務，以協助服務提供商改善應用程式及其服務。服務提供商可能會以本隱私聲明中描述的方式與第三方分享您的資訊。
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            請注意，應用程式使用具有自己關於資料處理的隱私政策的第三方服務。以下是應用程式使用的第三方服務提供商的隱私政策連結：
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>AdMob</li>
                                            <li>Google Analytics for Firebase</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            服務提供商可能會披露用戶提供和自動收集的資訊：
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>根據法律要求，例如遵守傳票或類似的法律程序；</li>
                                            <li>當他們真誠地相信披露對於保護他們的權利、保護您或他人的安全、調查欺詐是必要的；</li>
                                            <li>與他們信任的服務提供商，這些提供商代表他們工作，對我們向他們披露的資訊沒有獨立使用權，並已同意遵守本隱私聲明中規定的規則。</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">選擇退出權利</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            您可以通過卸載應用程式輕鬆停止應用程式的所有資訊收集。您可以使用作為移動設備一部分或通過移動應用程式市場或網路提供的標準卸載程序。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">資料保留政策</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            服務提供商將保留用戶提供的資料，只要您使用應用程式並在此後的合理時間內。如果您希望我們刪除您通過應用程式提供的用戶提供資料，請通過 admin@trip-pals.com 聯繫我們，我們將在合理時間內回應。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">安全</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            服務提供商關注保護您資訊的機密性。服務提供商提供物理、電子和程序保障措施來保護服務提供商處理和維護的資訊。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">變更</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            本隱私政策可能會不時因任何原因進行更新。服務提供商將通過使用新的隱私政策更新此頁面來通知您隱私政策的任何變更。建議您定期查閱本隱私政策以了解任何變更，因為繼續使用被視為對所有變更的批准。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">您的同意</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            通過使用應用程式，您同意按照本隱私政策以及我們修訂的版本處理您的資訊。
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">聯絡我們</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            如果您在使用應用程式時對隱私有任何疑問，或對做法有疑問，請通過電子郵件 admin@trip-pals.com 聯繫服務提供商。
                                        </p>
                                        <div className="mt-3 text-gray-700">
                                            <p>本隱私政策自 2025-09-11 起生效</p>
                                        </div>
                                    </section>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <section>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            This privacy policy applies to the TripPals (hereby referred to as &quot;Application&quot;) for mobile devices (hereby referred to as &quot;Service Provider&quot;) as a Free service. This service is intended for use &quot;AS IS&quot;.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Collection and Use</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The Application collects information when you download and use it. This information may include information such as:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                                            <li>The operating system you use on your mobile device</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The Application collects your device&apos;s location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li><strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
                                            <li><strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third Party Access</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>AdMob</li>
                                            <li>Google Analytics for Firebase</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The Service Provider may disclose User Provided and Automatically Collected Information:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                                            <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud;</li>
                                            <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Opt-Out Rights</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention Policy</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like us to delete User Provided Data that you have provided via the Application, please contact us at admin@trip-pals.com and we will respond in a reasonable time.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Consent</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at admin@trip-pals.com.
                                        </p>
                                        <div className="mt-3 text-gray-700">
                                            <p>This privacy policy is effective as of 2025-09-11</p>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
