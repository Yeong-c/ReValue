import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sendDealNotification, NOTIFICATION_TYPES } from '../../lib/notifications';
import "../global.css";

export default function Favorites() {
  const [selectedTab, setSelectedTab] = useState('products'); // 'products' or 'stores'

  // 알림 토글 핸들러
  const handleNotificationToggle = async (value: boolean, itemName: string) => {
    if (value) {
      // 알림이 켜지면 테스트 알림 전송
      await sendDealNotification(
        NOTIFICATION_TYPES.DEAL_EXPIRING,
        itemName,
        '',
        undefined,
        undefined
      );
      console.log(`${itemName} 알림이 활성화되었습니다.`);
    } else {
      console.log(`${itemName} 알림이 비활성화되었습니다.`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>찜한 목록</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'products' && styles.activeTab]} 
            onPress={() => setSelectedTab('products')}
          >
            <Text style={[styles.tabText, selectedTab === 'products' && styles.activeTabText]}>찜한 제품</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'stores' && styles.activeTab]} 
            onPress={() => setSelectedTab('stores')}
          >
            <Text style={[styles.tabText, selectedTab === 'stores' && styles.activeTabText]}>찜한 매장</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        {selectedTab === 'products' ? (
          <View style={styles.favoritesList}>
            {/* 유통기한 임박 알림 */}
            <View style={styles.expiryNotice}>
              <Ionicons name="time" size={20} color="#ef4444" />
              <Text style={styles.expiryText}>오늘 마감 임박 제품 2개</Text>
            </View>

            {/* 찜한 제품 목록 */}
            <View style={styles.favoriteItem}>
              <View style={styles.itemContent}>
                <View style={styles.itemImagePlaceholder}>
                  <Ionicons name="image" size={40} color="#dcfce7" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>디저트39 케이크 세트</Text>
                  <Text style={styles.itemSubtitle}>디저트39 명동점</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.itemPrice}>3,000원</Text>
                    <Text style={styles.originalPrice}>10,000원</Text>
                  </View>
                  <Text style={styles.itemStatus}>2시간 후 마감</Text>
                </View>
              </View>
              <View style={styles.itemActions}>
                <Ionicons name="heart" size={20} color="#f87171" />
                <View style={styles.notificationToggle}>
                  <Switch
                    value={true}
                    onValueChange={(value) => handleNotificationToggle(value, '찜한 제품')}
                    trackColor={{ false: '#dcfce7', true: '#22c55e' }}
                    thumbColor="#ffffff"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.favoriteItem}>
              <View style={styles.itemContent}>
                <View style={styles.itemImagePlaceholder}>
                  <Ionicons name="image" size={40} color="#dcfce7" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>여름 티셔츠 모음</Text>
                  <Text style={styles.itemSubtitle}>패션몰 강남점</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.itemPrice}>15,000원</Text>
                    <Text style={styles.originalPrice}>30,000원</Text>
                  </View>
                  <Text style={styles.itemStatus}>6시간 후 마감</Text>
                </View>
              </View>
              <View style={styles.itemActions}>
                <Ionicons name="heart" size={20} color="#f87171" />
                <View style={styles.notificationToggle}>
                  <Switch
                    value={false}
                    onValueChange={(value) => handleNotificationToggle(value, '찜한 제품')}
                    trackColor={{ false: '#dcfce7', true: '#22c55e' }}
                    thumbColor="#ffffff"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.favoriteItem}>
              <View style={styles.itemContent}>
                <View style={styles.itemImagePlaceholder}>
                  <Ionicons name="image" size={40} color="#dcfce7" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>세제/샴푸 세트</Text>
                  <Text style={styles.itemSubtitle}>라이프마트 홍대점</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.itemPrice}>8,000원</Text>
                    <Text style={styles.originalPrice}>20,000원</Text>
                  </View>
                  <Text style={styles.itemStatus}>1일 후 마감</Text>
                </View>
              </View>
              <View style={styles.itemActions}>
                <Ionicons name="heart" size={20} color="#f87171" />
                <View style={styles.notificationToggle}>
                  <Switch
                    value={true}
                    onValueChange={(value) => handleNotificationToggle(value, '찜한 제품')}
                    trackColor={{ false: '#dcfce7', true: '#22c55e' }}
                    thumbColor="#ffffff"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.favoritesList}>
            {/* 찜한 매장 목록 */}
            <View style={styles.favoriteItem}>
              <View style={styles.itemContent}>
                <View style={styles.storeImagePlaceholder}>
                  <Ionicons name="storefront" size={40} color="#dcfce7" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>디저트39 명동점</Text>
                  <Text style={styles.itemSubtitle}>매일 새로운 떨이 등록</Text>
                  <View style={styles.storeInfo}>
                    <Text style={styles.storeStats}>⭐ 4.8 (124개 리뷰)</Text>
                    <Text style={styles.storeDistance}>📍 150m</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemActions}>
                <Ionicons name="heart" size={20} color="#f87171" />
                <View style={styles.notificationToggle}>
                  <Switch
                    value={true}
                    onValueChange={(value) => handleNotificationToggle(value, '찜한 제품')}
                    trackColor={{ false: '#dcfce7', true: '#22c55e' }}
                    thumbColor="#ffffff"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.favoriteItem}>
              <View style={styles.itemContent}>
                <View style={styles.storeImagePlaceholder}>
                  <Ionicons name="storefront" size={40} color="#dcfce7" />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>패션몰 강남점</Text>
                  <Text style={styles.itemSubtitle}>의류 전문 매장</Text>
                  <View style={styles.storeInfo}>
                    <Text style={styles.storeStats}>⭐ 4.6 (89개 리뷰)</Text>
                    <Text style={styles.storeDistance}>📍 300m</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemActions}>
                <Ionicons name="heart" size={20} color="#f87171" />
                <View style={styles.notificationToggle}>
                  <Switch
                    value={false}
                    onValueChange={(value) => handleNotificationToggle(value, '찜한 제품')}
                    trackColor={{ false: '#dcfce7', true: '#22c55e' }}
                    thumbColor="#ffffff"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4', // Light green background
  },
  header: {
    backgroundColor: '#22c55e', // Green header
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  favoritesList: {
    flex: 1,
  },
  favoriteItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#22c55e',
    shadowColor: '#16a34a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#dcfce7',
  },
  storeImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#dcfce7',
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#16a34a',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22c55e',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  itemStatus: {
    fontSize: 12,
    color: '#ef4444',
    fontWeight: '600',
  },
  storeInfo: {
    marginBottom: 4,
  },
  storeStats: {
    fontSize: 12,
    color: '#16a34a',
    marginBottom: 2,
  },
  storeDistance: {
    fontSize: 12,
    color: '#16a34a',
  },
  itemActions: {
    alignItems: 'center',
  },
  notificationToggle: {
    marginTop: 8,
  },
  
  // 탭 스타일
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dcfce7',
  },
  activeTabText: {
    color: '#22c55e',
  },
  
  // 유통기한 알림
  expiryNotice: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  expiryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc2626',
    marginLeft: 8,
  },
});