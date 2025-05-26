import { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { CreditCard, ArrowRight, TrendingUp, ChartPie as PieChart, Wallet, Bell, Plus } from 'lucide-react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { SplashScreen } from 'expo-router';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const router = useRouter();
  
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Samantha</Text>
        </View>
        <View style={styles.headerRight}>
          <Pressable style={styles.iconButton}>
            <Bell color="#6366f1" size={24} />
            <View style={styles.notificationBadge} />
          </Pressable>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
          </View>
          <Text style={styles.balanceAmount}>₹74,250.00</Text>
          <View style={styles.balanceActions}>
            <Pressable style={styles.actionButton} onPress={() => router.push('/payments')}>
              <CreditCard color="#ffffff" size={20} />
              <Text style={styles.actionButtonText}>Pay</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Plus color="#ffffff" size={20} />
              <Text style={styles.actionButtonText}>Add Money</Text>
            </Pressable>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
          </View>
          <View style={styles.quickActions}>
            <Pressable style={styles.quickAction} onPress={() => router.push('/scan-pay')}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#EEF2FF' }]}>
                <CreditCard color="#6366f1" size={24} />
              </View>
              <Text style={styles.quickActionText}>Scan &amp; Pay</Text>
            </Pressable>
            <Pressable style={styles.quickAction} onPress={() => router.push('/bills')}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#FEF3C7' }]}>
                <Wallet color="#D97706" size={24} />
              </View>
              <Text style={styles.quickActionText}>Pay Bills</Text>
            </Pressable>
            <Pressable style={styles.quickAction} onPress={() => router.push('/transfer')}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#DCFCE7' }]}>
                <ArrowRight color="#16A34A" size={24} />
              </View>
              <Text style={styles.quickActionText}>Send Money</Text>
            </Pressable>
            <Pressable style={styles.quickAction} onPress={() => router.push('/analytics')}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#FFE4E6' }]}>
                <PieChart color="#E11D48" size={24} />
              </View>
              <Text style={styles.quickActionText}>Analytics</Text>
            </Pressable>
          </View>
        </View>

        {/* Spending Insights */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Spending Insights</Text>
            <Pressable onPress={() => router.push('/insights')}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.insightsCard}>
            <View style={styles.insightsHeader}>
              <TrendingUp color="#6366f1" size={20} />
              <Text style={styles.insightsTitle}>This Month</Text>
            </View>
            <View style={styles.insightsContent}>
              <View style={styles.insightItem}>
                <Text style={styles.insightLabel}>Spent</Text>
                <Text style={styles.insightValue}>₹24,500</Text>
                <View style={styles.insightBar}>
                  <View style={[styles.insightBarFill, { width: '65%', backgroundColor: '#6366f1' }]} />
                </View>
              </View>
              <View style={styles.insightItem}>
                <Text style={styles.insightLabel}>Income</Text>
                <Text style={styles.insightValue}>₹45,000</Text>
                <View style={styles.insightBar}>
                  <View style={[styles.insightBarFill, { width: '85%', backgroundColor: '#16A34A' }]} />
                </View>
              </View>
              <View style={styles.insightItem}>
                <Text style={styles.insightLabel}>Saved</Text>
                <Text style={styles.insightValue}>₹20,500</Text>
                <View style={styles.insightBar}>
                  <View style={[styles.insightBarFill, { width: '40%', backgroundColor: '#F59E0B' }]} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Pressable onPress={() => router.push('/transactions')}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.transactionsList}>
            <Pressable style={styles.transactionItem}>
              <View style={[styles.transactionIcon, { backgroundColor: '#EEF2FF' }]}>
                <CreditCard color="#6366f1" size={24} />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Amazon</Text>
                <Text style={styles.transactionDate}>Today - 2:45 PM</Text>
              </View>
              <Text style={styles.transactionAmount}>- ₹2,499</Text>
            </Pressable>

            <Pressable style={styles.transactionItem}>
              <View style={[styles.transactionIcon, { backgroundColor: '#DCFCE7' }]}>
                <Wallet color="#16A34A" size={24} />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Salary</Text>
                <Text style={styles.transactionDate}>Yesterday - 9:30 AM</Text>
              </View>
              <Text style={[styles.transactionAmount, styles.incomeAmount]}>+ ₹45,000</Text>
            </Pressable>

            <Pressable style={styles.transactionItem}>
              <View style={[styles.transactionIcon, { backgroundColor: '#FEF3C7' }]}>
                <Wallet color="#D97706" size={24} />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Electricity Bill</Text>
                <Text style={styles.transactionDate}>15 Jun 2023 - 5:20 PM</Text>
              </View>
              <Text style={styles.transactionAmount}>- ₹1,245</Text>
            </Pressable>
          </View>
        </View>

        {/* Rewards Banner */}
        <Pressable style={styles.rewardsBanner} onPress={() => router.push('/rewards')}>
          <View style={styles.rewardsBannerContent}>
            <View>
              <Text style={styles.rewardsBannerTitle}>You have 750 reward points!</Text>
              <Text style={styles.rewardsBannerSubtitle}>Redeem now and save on your purchases</Text>
            </View>
            <ArrowRight color="#ffffff" size={24} />
          </View>
        </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  greeting: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1F2937',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  balanceCard: {
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
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  balanceAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  actionButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  seeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  quickAction: {
    alignItems: 'center',
    width: 80,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  insightsCard: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  insightsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 8,
  },
  insightsContent: {
    gap: 16,
  },
  insightItem: {
    marginBottom: 4,
  },
  insightLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  insightValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  insightBar: {
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
  },
  insightBarFill: {
    height: 6,
    borderRadius: 3,
  },
  transactionsList: {
    marginHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1F2937',
  },
  transactionDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  transactionAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  incomeAmount: {
    color: '#16A34A',
  },
  rewardsBanner: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#8B5CF6',
    borderRadius: 16,
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  rewardsBannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardsBannerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  rewardsBannerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});