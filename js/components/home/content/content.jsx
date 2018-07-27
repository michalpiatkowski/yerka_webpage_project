import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';

class MainContent extends React.Component {
    render() {
        return <div className="main-content">
                    <div className="container">

                        <div className="main-slider-news">
                            <div className="main-slider-news-text">News</div>
                            <div className="main-slider-news-arrows">
                            <a className="left_arrow" href="#"><img src="img/icons/arrow_left_32.png" /></a>
                            <a className="right_arrow" href="#"><img src="img/icons/arrow right_32.png"/></a>
                            </div>
                            
                            <div className="main-slider-news-photos">
                            <section className="main-slider-news-photos-container">
                           
                                    <div className="img-news img-news-first">
                                    <img src="https://lh3.googleusercontent.com/Gkb_Idu94tYBsoDpSaccFouPvQxNI3tIFoCbdTQxfTLK6-KGSiwwSItzBmKi14khZbs2_2kg2YGLqGbYWftRRQFXNMduV0HMtmRUYE4dUlmXDYM3tbmd0LvnP6d_1eGUVBgfjdOwMIDTYFmpsTanpbcEbEr4KPyh8yT4UWEcPEM-i4hfOMoxzJKPbb87r38uGwa_PY3ka2womYRGrhEBmq7QC1Vo2MgPmKLiXrpe1pN83ndWe8GCNQ1q7sM8APzKdJ8PoGvLsG9FDMca6f17WsQjrbgpITObujBhWlDLrc-nwcPRvtGg6bGBw_95am3PXwXdafJRFkUtxJutEafJ8Xdgs3J3w8dHwYkI7zNZoZuq6yVMdfH4XKGPsGa07cft3hKnq1SxT2n_hH5t8ZLT_IQ9-LlYVA31DIgevHmHeBXm_gOJT6xpuAKJyAmMw-sPiTlBBlinoyuZAmc2UKA5ETusY18p-LecLubH72AdY_kPcETreX96PfKfwColmKUuTMeGdp3NYKYl9Xn64AUlEXBwEWDJ_uPocVMlnEVWeqGHMq7y3NV3urWW3U0054kgrLE8fle6wDrlnCuy1zXcgjxq3xs8lJmSc01k8x8=w681-h543-no" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>15 07 1410</p>
                                    </div>
                                  
                                    <div className="img-news img-news-second">
                                    <img src="https://lh3.googleusercontent.com/2bFcIV_wV68R_vpzlBHyjHWHAsUMMsisI8XrLqY-YExC3k_7lnJa0LDkCgMEOpdsnvO9Kil0sSTIGwUXy9RC8VB1jBdW6Qq2YJdsFSOWW8YTSsenQ9lhS35stP9RSfrLFGtxvQCKSl4kfBD4xrU__ESw2sYSd9Ngv0lJHCeBkaz3T9X0KZrWeirxXWFfGMokCx7z11uaFDo9O5zK-_sSqwZmYXRwZ79DFYyntCwwcBO0JT2J3QrxinqTKAjmnv-Qz-lfT8cKGd_2xHuWolwOu7utB1-QXD5aqY0blP1kk6TXeEH4OvgU6eJdzmzOGll1iSiM3FFTEYBhlqIxwLlqmg-cnJOiN7G7-IlHcne2EAXAIio4sKBWG1Ig5wWkd20IQBsSdBd0O-XvB2IeXOE4PsFYsiEl34Y-Q77a6IBlrIVRbzFluBEOVBHOH4He3_BIvuGdiHCbXg2tKlTIJec9edGsVwc5QMLLpDuRPOdbCsKbGpIWmcoPJWYMFg4degU8MKjuO-tCoFTtN1JRs0fmAykEv_7xt6ngdRAhzKoP679UAgLEg5yuq2_4318B9bSiyIiSLJaoYq3KRpl8-wy1PUiNMLwMsLfZxQyzFtQ=w1047-h832-no" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>01 09 1939</p>
                                    </div>
                            </section>
                            </div>
                        </div>

                        <div className="main-slider-gallery">
                            <div className="main-slider-gallery-text"><Link to='/works/paintings'>Gallery of paintings</Link></div>
                            <div className="main-slider-gallery-arrows"></div>
                            <div className="main-slider-gallery-photos">
                            <section className="main-slider-gallery-photos-container">
                                    <img src="https://lh3.googleusercontent.com/ZUAnwCQ5BNV0woIgv1TT3J5wkn7lSIKrTT_Ctjk7OtD8txYyPwRMoVYAWZ8uAC7EVxFEGPC0HW5bOa4ztQ5hv_SpF9qvdqmrKHahNvrzoIADqGFDm0WTJznZ0tpjZbq9RqvDj3d-bZDyKb9Rdw24p9y6bA68qBI-TYCLIlGL529icUgFMBUb_Z75CJvUo9EoLqKi0A5TzntkJcNUNOZQb6RXClVKLbjoTv76xR96WBKyQqz5adyT8Zgko6JOLpp552Dt9oprgnOTCvEcbot3YUT0KZpCgiAQjkXrakjBmb65ltzF4rMGtMBAGiezdOWed0yk5QdzrDNFefcD1v8--dvJepvkOYFJZ_lWkJV51HOU67zxSRKWEFFfry7UqEwhl1xH-SDcuIWbgQ9J-PaXgBR6Ad6UdIe75I11uocAxuP9AUPjnu3MZlZVoirpoh_eVKrUZrgKoCiMHsC85rrXWE32VbN_eM7MurhWMdjziUXKUD2SLmnOYFKCCpS9wnX5jqM43ngctdH7C2ETD-vsUitH9XC6pBMs27Kt4y19LRaC1sDy8tCU6k6SmHVlouSPd5kJYzSyPChffgh8fph_MDzRvZBNK_1gzz55t63NQOoQiT4uSgFTkdZA94oSLx-RNM-lJdfZl3920_lgbXixyuvBgXcJdto1=w558-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/GAG3SeJJgnxBXF1Bv20Sn7MuNg83qs9I_kpx--P9lTrzx7yJL1oTsycp5asAoiz0wch9AAbz-9wKBE8dGO-7iSoVYMzEi6rLYTN6EQ8L-xDMgqzJV2ZcbKlNChXyoZLc7RuBLf1fvhN0OCiqcFD_ttX1gw6u8wOkqlyyIQxZ9SGNNdxfcDeH-a94NsBPQr3e-kArftHgXJOxiP1s3kFlQrhhchIVMHrgA7OSbR65W1wxh03IK2oK239c65xtWwhY9MN31uaeJFI4fA3qKRQ4x-8eBeK5KqIxechJtF8B1tBvhAErZ9DYRWo9uJF5Y6363ff7Pfon9fxSetTwexMKiOlK5-S6Df2V3oHvos9dQeRvvmfdyom5equa69r7dOkXnt3y2pbuAvkE8CERX04M8L33F-3vK02aRmzRX4SIGHVrTw7JENn_hNXXqj2qdoi9yGS1apUQyLjJ3KOmpIxNozFm4yRyBHILZDHTc1EvMUt_OOgSDbPnFItvvKu8gngKn5IOyWPy3X6c5Bq49WT99WkNbv1zoY0J7DPV0T98HZXSt7oRaw3UuIXKhjve4xTk5L_XASGQGCtXinDp1b7MeywyRHfJrSzVVx4DGZKRabCHxi3r2Kv-IcXdTY7E32ydoCkSE77m5NUwmVassuwfhjVlDrEyp4cs=w555-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/sSxFQ33tT0eTFQAzMho96tm3Q6WzPTDAnAMjStZ809dUxlPnb-qxteKKvIgB2WjGbA-7_hszeb5b7Nv40DIlLb7Bpdds0UzUsKZKIyMe6mFDWzWfy006wOTMM10voQXH-NUfYRvrKpBKt467MwR9kyti6ICQ-3LU9RjLHDOJsI1gv_rQ7RUtA0qM_XYobyPYqnpBxiC6Wwuo14HNIluAgoMIjCXPLWUXGhIzvu5yfVjRyr0igEfsScZGaJtkPALxOnPP-4ZTdDD4Xf8TQnMP4hmoTM8Jvi0inlKMtaFNmv9jIOO0mumm9DIxvfpN8XbBy0Gd7UyH8Pg_WTmEYpSABgQ0baWElvzT0ena-5IK8fGCREk_M3GqJy_4v3KCx2wcn-Bx3oJuqSAdSj-kBLXLvHlkc7uBN-WF3VVGuaqqxoeqD9NsB570RaltbKcSkSMX1wan3o7Jzz3e-cn0mrCPIBcQKK00tiTdmhSCGSJJDHB7bOeHd5CSfEUA49ywk7Yru3YyGo5XH3MnbWfF17zZl9bV72K-3bCSL_UrwMyLV4R80U3I6chvRFfyXf_CoR8EFN1ffDll7wUZQPmqhFn-O6PMuDQZFqjiUzPmshZ33BoriiWC6z2Nw1sd5AOjSiPrdI04vFM7B9bUWimkzujRMnRbcPdr-Fvj=w569-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/Y94tstCjk0jqJ4pQI9cJpxq7t7pzgsrz3p1zqqpVt2jqMVeTLzeakUB72m2VbNtKNY4q9POuwIMFQjnMJXQO_0oar-KWiyh6vW89r_3R1u6ZhBAkCOb3PqKfX5S7QVxKVSZH4RfuOXFRl4J8fhM0C8068HrW_ViVpMzKtw3bPzEh1AVy3t-lr_MBJ7_enkm-YdjVpnsiS6xRi97xkILZtyY-9nx_wJDbL2-eqatLoXLlndNDtgg48THrbrqwV55uv4P2AKCLKySdgHI3Hj-LifogVVMXQDj9eiT9x3TigxyLYMCYTQ-94zeM8lnPVYCp4FIh7PamWEt7akzyW2fT2xINDqNH4ZtKs45B2SxTA0CXGU4Xvp9YiyFtV9_09ezbaBi2hWwteEOTwZ6MQbgda8hvG9xNPgcTYuG_GRyDjc-urrOXk7KReVVic9SrO3jmNuSrZdb5vcmanQ5KXykmbDQgzDQTR_hYgQe5XwPsRL-cutjIGwyS1bq_DBCgKVqpkmu5JVIuBBkSQPGWn9_T1qTA1XsZAeqoP77hTIFyK2JDr3_NOrw-MoqZHIRdu5ESd_AOFYFaiP2ZJD1u3PMSnCOQmJjXjfJZ0Kjh22Ho_CVQdhzY-vLf-eeR97Rc8QtvpppFr2GqOrgzUDenfbDJfNDfE3TRFr7s=w415-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/YHCsFCir6mf9tpgoExDBv0vYHZUxXV9OHxFq9LMa9XsipcnfDtoNsl4Zu6hkovOXPZ0EBB2kEK_AFBF-JyQDq39s86Wt2AaWI7CJrovB9nay3cN4mJYLGtFQEwpAGE2vH2MjRPegtiXEQ5HLH68MrzgdMw0GPJJjXidCfvR4mg6dkttz8rj3CR2HgJf_2ZMxGdjO2GbVFjDjrjyOCpotuSXaXtOGH77oEyoCPuhV_cTcsbNuTHyoIeB2WB6LdiM-EwPQieEE32kwez7Fitn1HRznjBucb_JR-aP8s_-JzyeZUnO2IaF_59DNeSwOPPnLLs7lKmfVMRwLKu2anPk1xXnO26CaGRZUm9E0Zg_Imuyl02y1RehIyG5PInKTIabC-2eQ7qLukKSwbA56zgLt0r5-Az29VgtfyISmjU9jpPKtg-pXve8hRtTVuf0jZCkOBavCTzII2YfHtP9-ygeQWIjicaHlCJILBYVUW0FrMfSaKAN7boBHxKVhQWrAfllQTpXygJPpYJ9KqOm55Jgjsr7grRjnYOGFAsYpG6wzfSBNo2tUfwA1GBiKcFDKdMdPvmVTQdj01YoY2nVO_KyZz9K9aOD5-Voi1wEtH-6Ab0RjAjt4f7ggKNmA_-2bPrB7UA_IscuUhaF_mBxqRDYRpQWFcN4-iCh6=w561-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/a1kJliosF-cQFqZ8lv1_fegDAEFj9mQV8guLC3ye-C2VNBB4UYBaj8SYh_25Eh0RddbsZnhqI7FBNPENwB47l3EvJ9_HJXogFhdnDHVKyjREQwn4h8h1dyG69M6s9sfzbyasnFsyptXZUe6sKmAwP8ppLmSZG_sBYRZgvtEXRFP_XhahQfWEAtSA012yrRSulcfApWbiJZOIe9TS1v2F1zaoP--RESxrTQr9mD53aVE55-u-gSGw7EpA_6E3wqaoQnVmiFq-mbW-mKgSVHLf3X1EbnRKdRkIhVGsi2I8RmqOFCM1n7kygaERwOiGNb3woTdwa9y_AimNZtP0LPFLGyBGcVBKTMDCkUpkMYq-CQgNFYJptQEvryD42Vqm2sniQ-B7BvZtai7tFkVCXRXR1CCnCRmOM3y3jK5-K3HFwdckaKfLVemR-0pllRiFZVCFh5lA3sRlnx2tjn0IzWo8IiTbyf2IefflD1YDw0zlK1LGNH7NvZJZpaE6jCbX3_oCGS5bp_cv7FTtg4g5TGX4_NAHxjGxIwwpr4Zit7m6sqDaKa_7__BfdHuky3LIl5gHm5O84zPAlda1aT76hsGiW4TKz1_l-IXQ9mwL4_c4SQwPh6ZHRdpoi4ZZLfxlUQhvMAd-5uQ63w25plS0ZVYgMXJAlJGc0dGE=w559-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/vi4VAWD_D9lMA-JbT0xPLm1-uITiEoF50nrL-tcTt--xfR-toysBZYzuGe57m3cmeKPMCwRBhhvc0Hdw_SiUc9eN1Cq7lNu7oIwlL7b9iCed0hNPOf0op287yYvKlYdT8Rp_7ceP9tQHaWV3Sbl5lBXjxZS-Ns_96RBIevUTKfaU1LWPGyoIrUxn9c7neiK7HlYXy9YXnxpd61buSxI1_k5wse3ihewDdAdqyEVuDI-RESezXAnxErKoQkvzwze8Dli22-wp2u3UT2qqPeMB0jMJPnIVleEAx4JG2-7kwQkgRlr5T2u29nL8kYML8z3UGHRoGM9-kOh40VsJ9CRvgZv4Ctwl162pCR22RjrId4fYBrRM6fy7QhtcK_0QWYMNCO8mMcrCi8fPC9m8YU29dNpTHyvasAeSL00sVnVGozj2cvIYCA_mEKz49iy747WmdFg9mLMGLJ3KrvyZORE_r92VdzxUuwwQinswb3t_lvw6oy-XnPSLMSemw-ySopVD3VeX6dk_yMs0_6lKxGA-6Axu4LsaHyIIzfDGudyiS2mdCTvTCd1oHwsj54s9dMkUvv_E8b1lbGQx3nzw3ZgbAnpHQRfBVbzMKNdXEll3cbmkBC5kVP1gaB8ppM8bQfNxgczg2egOobgRN3l__7O10AeTdP0V9I_i=w443-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/eC0YbNvhAwbIFqRFbSQAJa8GZU9D3aBu7wBLoJpCbYWU0OvDOSiiGp-F08sDZr71u5FJCEBHT8nphrjP4mKGyBr5ubriIzWyhvHrRy3V2w2ISKu_RMIs8SqsbFyOH4puztspOjkcBRW1Wpfh3wYUFcJg6jjG51eqHcF8wDJ9-GoXeuwGWgJHvLZ_Ov39VnHcARQEQ3Ig5B8fIPIb1f4hm_Z0xKuXGvgYL4v3BnZ8t-hUknF51YO2CLB9jd1pTVTmXW_uTzqgzJM6_VnlYUDgDoU3G7GSQs45T7ywqRefYDDjc1MbmUOl32zvVMrROMZZsXvjBXZVLBOho6bEYK5N6VVpSMZ72BkuNUsshz7kkM6KYAAyXROxZTFEUjvAT6McTzFdU8k6DDCy2V168kEfc_oG1yVaaQJdtop6ugqqvp4fLkIesNMguodO62H43bGxCukCmQqco9vWt_xlZ-qi46hvlIJ9aTlQ_wzTqUpovI6wqGlogV-MPk6ysTmbgLjKmpdHloGUcOKorfNPx33Hii0oqlNqghTuR-860vBpYGv445LJG1xiYQMh7rantH91zRZ5ccSmM85T6Lk-5h4XXkdQk7HvTO26BUzRoN3wYXDw95QagolPcMAWwTR8PQzKdSKpDFy3hZjd29vCy19o1MnGbqUEKlYp=w611-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/eZ1L5o2Kg0Y9iuM7IAZ6FDqzHVr8pHYAUzyUB-OdEEuAPpuMRTpmwFNi3kiAL18m5LZL8shiG4zcE0wokn7WU_wgxrSOjMu-bCd8-EYDam9c4eBJwm7MR-ra8kJzCn4Ef-aGg92EETzlIhYPvadUvlNPSZnAkXu7mBImfyG7m3wFnKWeJBlaTyDjlszNWzoRoqaUtJIkQuKwP8SEx2tYfgwvgTpFVAKoLrMJFwL5xSa0tLlD6yvyjDWBb331CbvY2qObN6-TrIoZZ2gxsAyOG-w7pc6-9bQVIPXk2l6kZScKUqjSAe4AQo7BXmzx7Uhh-LxDtV1JYCBPPyXuhsOEmmz_F9W4MF0iooLbWoMZKt48_47SY_lKvgBrjUrOI3IGPZq8FtHOXzluJkEpLNavNgRTswj5AbuKRX3DemEwmQa37WstpHKXocuZ0LwriY8uvUsUKNuE4kkH9_WIcFVEzH1gbr_ZnOblxhFfK2JFaf3a49hoX6LvVgCd5p0pm1h5sBjbupY-s8i7trswyYTlMu42vVfASitBvuUarFjjipRKudfFECGYhUgfvqXH9y-_cRrDtl_c9O6ckJEbgdf4f6THbVqFs__BpddFksCzLB4yzR1xXgLfh2p6P3TiF8sW-jGTDkaULi_1PT3at-O2-Y_YqjL42xfR=w391-h500-no" />
                                    <img src="https://lh3.googleusercontent.com/JH82pOcy57EjI4YJIJuCq5cMA4dwkczmFrjNj4VikiKWf5Yh-C5jmOK6_DzQezP18EE5YGxejNDTxTFBJXEDxByg5gj-JjOs7whhiPA4l7jVsuktOanUEyPS0gwOrZkUcGf_uV4uYKsSxiSVHh8OR7qTbhTDXWWoMgY7iDt6RMOXRdmTqNgBlf0yVRT73yPJ5FH-YleSJ1rRGJpMrRZ1uxSkoqFZ0lXUeQWQr60CGIjTVDPDTpXu7_8ebpy-r2IKRG2A0zD0M5BSwGjogzlz0u3jzCzoyju1OEi4C5sTImJOC6zPtriNmrJPc-JchU0t5NoZJ73p6KjKZCbgUh_t2je_eE8Eqtrte1ccGiBIA3KG36KQJMeQirMWEkYatwOYc-e-hzMfXSFzz543iRiedBMaolqdlzrKCrGXpmgN8BcZ5aDju7F_44w4LG8ODOQYEJEQuDB0JMxLevq8ezprTe1YZKf23uO5CUDwGGwG-gYsXi7sowDo7Id7HXRIygAmHNrDKMUKAMYgWPV5cN__uKG4nn1gwu3WNm2ZpJF7ZwBwwiya-rmcIEyVuG8lu-MW7NBFqcdHWjLmJE3ZFGwoh91T92-5IbTeLOXWJ1ykywKweOLrLi0ZU5uDKd5nd9BhV6pzljYVpJEYdcN2r0s9DbH07RFuL_FK=w398-h500-no" />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            
            }
        }
            
export {MainContent}