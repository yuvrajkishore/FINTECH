import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { Award, ChevronRight, Gift, ArrowRight, Clock, CreditCard, Coffee, ShoppingBag, Film } from 'lucide-react-native';

export default function RewardsScreen() {
  const [scratchCard, setScratchCard] = useState({
    scratched: false,
    reward: {
      type: 'points',
      value: 500,
      message: 'You won 500 points!'
    }
  });

  const handleScratchCard = () => {
    setScratchCard({
      ...scratchCard,
      scratched: true
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rewards & Offers</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Rewards Balance */}
        <View style={styles.rewardsCard}>
          <View style={styles.rewardsCardHeader}>
            <Award color="#FFFFFF" size={24} />
            <Text style={styles.rewardsCardTitle}>Your Rewards</Text>
          </View>
          <Text style={styles.rewardsPoints}>2,450</Text>
          <Text style={styles.rewardsLabel}>Total Points</Text>
          
          <View style={styles.rewardsProgress}>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Milestone: 3,000 points</Text>
              <Text style={styles.progressValue}>2,450/3,000</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '82%' }]} />
            </View>
            <Text style={styles.progressMessage}>Earn 550 more points for ₹100 cashback</Text>
          </View>
          
          <View style={styles.rewardsActions}>
            <Pressable style={styles.rewardsButton}>
              <Text style={styles.rewardsButtonText}>Earn More</Text>
            </Pressable>
            <Pressable style={[styles.rewardsButton, styles.rewardsButtonOutline]}>
              <Text style={styles.rewardsButtonOutlineText}>Redeem</Text>
            </Pressable>
          </View>
        </View>

        {/* Scratch Card */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scratch Cards</Text>
            <Text style={styles.sectionSubtitle}>1 Available</Text>
          </View>
          
          <Pressable 
            style={[styles.scratchCard, scratchCard.scratched && styles.scratchedCard]}
            onPress={handleScratchCard}
          >
            {!scratchCard.scratched ? (
              <View style={styles.scratchCardContent}>
                <Gift color="#FFFFFF" size={40} />
                <Text style={styles.scratchCardText}>Scratch to reveal your reward!</Text>
                <View style={styles.scratchInstructions}>
                  <Text style={styles.scratchInstructionsText}>Tap to scratch</Text>
                </View>
              </View>
            ) : (
              <View style={styles.revealedReward}>
                <View style={styles.rewardIconContainer}>
                  <Award color="#FFFFFF" size={40} />
                </View>
                <Text style={styles.rewardTitle}>{scratchCard.reward.message}</Text>
                <Text style={styles.rewardDescription}>Points added to your account</Text>
                <Pressable style={styles.claimButton}>
                  <Text style={styles.claimButtonText}>Claim Reward</Text>
                </Pressable>
              </View>
            )}
          </Pressable>
        </View>

        {/* Ways to Earn */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Ways to Earn</Text>
            <Pressable style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight color="#6366F1" size={16} />
            </Pressable>
          </View>
          
          <View style={styles.earnCardsList}>
            <Pressable style={styles.earnCard}>
              <View style={[styles.earnCardIcon, { backgroundColor: '#EEF2FF' }]}>
                <CreditCard color="#6366F1" size={24} />
              </View>
              <View style={styles.earnCardContent}>
                <Text style={styles.earnCardTitle}>Pay Bills</Text>
                <Text style={styles.earnCardDescription}>Earn 2 points per ₹100 spent on bill payments</Text>
              </View>
              <ArrowRight color="#6B7280" size={20} />
            </Pressable>
            
            <Pressable style={styles.earnCard}>
              <View style={[styles.earnCardIcon, { backgroundColor: '#FEF3C7' }]}>
                <ShoppingBag color="#D97706" size={24} />
              </View>
              <View style={styles.earnCardContent}>
                <Text style={styles.earnCardTitle}>Online Shopping</Text>
                <Text style={styles.earnCardDescription}>Earn 3 points per ₹100 spent on partner merchants</Text>
              </View>
              <ArrowRight color="#6B7280" size={20} />
            </Pressable>
            
            <Pressable style={styles.earnCard}>
              <View style={[styles.earnCardIcon, { backgroundColor: '#DCFCE7' }]}>
                <Coffee color="#16A34A" size={24} />
              </View>
              <View style={styles.earnCardContent}>
                <Text style={styles.earnCardTitle}>Dine & Pay</Text>
                <Text style={styles.earnCardDescription}>Earn 5 points per ₹100 spent at restaurants</Text>
              </View>
              <ArrowRight color="#6B7280" size={20} />
            </Pressable>
          </View>
        </View>

        {/* Featured Offers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Offers</Text>
            <Pressable style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight color="#6366F1" size={16} />
            </Pressable>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.offersContainer}
          >
            <Pressable style={styles.offerCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg' }}
                style={styles.offerImage}
              />
              <View style={styles.offerContent}>
                <View style={styles.offerBadge}>
                  <Text style={styles.offerBadgeText}>FEATURED</Text>
                </View>
                <Text style={styles.offerTitle}>50% Off on Movie Tickets</Text>
                <View style={styles.offerMeta}>
                  <Clock color="#6B7280" size={14} />
                  <Text style={styles.offerMetaText}>Valid till 30 Jun 2023</Text>
                </View>
              </View>
            </Pressable>
            
            <Pressable style={styles.offerCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg' }}
                style={styles.offerImage}
              />
              <View style={styles.offerContent}>
                <View style={[styles.offerBadge, styles.offerBadgeBlue]}>
                  <Text style={styles.offerBadgeText}>NEW</Text>
                </View>
                <Text style={styles.offerTitle}>Buy 1 Get 1 Free on Coffee</Text>
                <View style={styles.offerMeta}>
                  <Clock color="#6B7280" size={14} />
                  <Text style={styles.offerMetaText}>Valid till 15 Jul 2023</Text>
                </View>
              </View>
            </Pressable>
            
            <Pressable style={styles.offerCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg' }}
                style={styles.offerImage}
              />
              <View style={styles.offerContent}>
                <View style={[styles.offerBadge, styles.offerBadgeGreen]}>
                  <Text style={styles.offerBadgeText}>TRENDING</Text>
                </View>
                <Text style={styles.offerTitle}>30% Off on Fashion</Text>
                <View style={styles.offerMeta}>
                  <Clock color="#6B7280" size={14} />
                  <Text style={styles.offerMetaText}>Valid till 20 Jun 2023</Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>
        </View>

        {/* Redeem Points */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Redeem Points</Text>
            <Pressable style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight color="#6366F1" size={16} />
            </Pressable>
          </View>
          
          <View style={styles.redeemOptionsList}>
            <Pressable style={styles.redeemOption}>
              <View style={[styles.redeemOptionIcon, { backgroundColor: '#EEF2FF' }]}>
                <CreditCard color="#6366F1" size={24} />
              </View>
              <View style={styles.redeemOptionContent}>
                <Text style={styles.redeemOptionTitle}>Cashback</Text>
                <Text style={styles.redeemOptionDescription}>Redeem points for wallet cashback</Text>
                <View style={styles.redeemPointsRequired}>
                  <Award color="#6366F1" size={14} />
                  <Text style={styles.redeemPointsText}>2,000 points = ₹100</Text>
                </View>
              </View>
              <Pressable style={[styles.redeemNowButton, { opacity: 2450 >= 2000 ? 1 : 0.5 }]}>
                <Text style={styles.redeemNowButtonText}>Redeem</Text>
              </Pressable>
            </Pressable>
            
            <Pressable style={styles.redeemOption}>
              <View style={[styles.redeemOptionIcon, { backgroundColor: '#FEF3C7' }]}>
                <ShoppingBag color="#D97706" size={24} />
              </View>
              <View style={styles.redeemOptionContent}>
                <Text style={styles.redeemOptionTitle}>Shopping Voucher</Text>
                <Text style={styles.redeemOptionDescription}>Get vouchers for online shopping</Text>
                <View style={styles.redeemPointsRequired}>
                  <Award color="#6366F1" size={14} />
                  <Text style={styles.redeemPointsText}>5,000 points = ₹250 voucher</Text>
                </View>
              </View>
              <Pressable style={[styles.redeemNowButton, { opacity: 2450 >= 5000 ? 1 : 0.5 }]}>
                <Text style={styles.redeemNowButtonText}>Redeem</Text>
              </Pressable>
            </Pressable>
            
            <Pressable style={styles.redeemOption}>
              <View style={[styles.redeemOptionIcon, { backgroundColor: '#DCFCE7' }]}>
                <Film color="#16A34A" size={24} />
              </View>
              <View style={styles.redeemOptionContent}>
                <Text style={styles.redeemOptionTitle}>Movie Tickets</Text>
                <Text style={styles.redeemOptionDescription}>Free movie tickets at partner theaters</Text>
                <View style={styles.redeemPointsRequired}>
                  <Award color="#6366F1" size={14} />
                  <Text style={styles.redeemPointsText}>3,000 points = 1 free ticket</Text>
                </View>
              </View>
              <Pressable style={[styles.redeemNowButton, { opacity: 2450 >= 3000 ? 1 : 0.5 }]}>
                <Text style={styles.redeemNowButtonText}>Redeem</Text>
              </Pressable>
            </Pressable>
          </View>
        </View>

        {/* Activity */}
        <View style={[styles.section, { marginBottom: 100 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Points Activity</Text>
            <Pressable style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight color="#6366F1" size={16} />
            </Pressable>
          </View>
          
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#EEF2FF' }]}>
                <Award color="#6366F1" size={20} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Points Earned</Text>
                <Text style={styles.activityDescription}>Electricity bill payment</Text>
              </View>
              <View style={styles.activityPoints}>
                <Text style={styles.activityPointsText}>+25</Text>
                <Text style={styles.activityDate}>Today</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#DCFCE7' }]}>
                <Award color="#16A34A" size={20} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Points Earned</Text>
                <Text style={styles.activityDescription}>Cashback offer</Text>
              </View>
              <View style={styles.activityPoints}>
                <Text style={styles.activityPointsText}>+500</Text>
                <Text style={styles.activityDate}>Yesterday</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={[styles.activityIcon, { backgroundColor: '#FFE4E6' }]}>
                <Award color="#E11D48" size={20} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Points Redeemed</Text>
                <Text style={styles.activityDescription}>Shopping voucher</Text>
              </View>
              <View style={styles.activityPoints}>
                <Text style={[styles.activityPointsText, styles.pointsRedeemed]}>-2,000</Text>
                <Text style={styles.activityDate}>20 Jun 2023</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1F2937',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  rewardsCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  rewardsCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rewardsCardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  rewardsPoints: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  rewardsLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  rewardsProgress: {
    marginBottom: 20,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  progressValue: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#FFFFFF',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  progressMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  rewardsActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardsButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  rewardsButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  rewardsButtonOutline: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  rewardsButtonOutlineText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  sectionSubtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
    marginRight: 4,
  },
  scratchCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  scratchedCard: {
    backgroundColor: '#6366F1',
  },
  scratchCardContent: {
    alignItems: 'center',
    padding: 20,
  },
  scratchCardText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  scratchInstructions: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  scratchInstructionsText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  revealedReward: {
    alignItems: 'center',
    padding: 20,
  },
  rewardIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  rewardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  rewardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  claimButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  claimButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#6366F1',
  },
  earnCardsList: {
    
  },
  earnCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  earnCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  earnCardContent: {
    flex: 1,
  },
  earnCardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  earnCardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 18,
  },
  offersContainer: {
    paddingRight: 20,
  },
  offerCard: {
    width: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  offerImage: {
    width: '100%',
    height: 120,
  },
  offerContent: {
    padding: 16,
  },
  offerBadge: {
    position: 'absolute',
    top: -56,
    right: 12,
    backgroundColor: '#EF4444',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  offerBadgeBlue: {
    backgroundColor: '#3B82F6',
  },
  offerBadgeGreen: {
    backgroundColor: '#10B981',
  },
  offerBadgeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  offerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  offerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerMetaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 6,
  },
  redeemOptionsList: {
    
  },
  redeemOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  redeemOptionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  redeemOptionContent: {
    flex: 1,
  },
  redeemOptionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 2,
  },
  redeemOptionDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  redeemPointsRequired: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redeemPointsText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6366F1',
    marginLeft: 6,
  },
  redeemNowButton: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  redeemNowButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6366F1',
  },
  activityList: {
    
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 2,
  },
  activityDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  activityPoints: {
    alignItems: 'flex-end',
  },
  activityPointsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#16A34A',
    marginBottom: 2,
  },
  pointsRedeemed: {
    color: '#E11D48',
  },
  activityDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
});